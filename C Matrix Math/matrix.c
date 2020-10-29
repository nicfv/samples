// Create a matrix with m rows and n columns.
Matrix matrix(double* arr, int m, int n) {
    Matrix k;
    int i, j;
    k = matrix_zeroes(m, n);
    for(i = 0; i < m; i++) {
        for(j = 0; j < n; j++) {
            k.mat[i][j] = arr[i*n+j];
        }
    }
    return k;
}

// Create an m x m identity matrix.
Matrix matrix_identity(int m) {
    Matrix k;
    int i, j;
    k = matrix_zeroes(m, m);
    for(i = 0; i < m; i++) {
        for(j = 0; j < m; j++) {
            k.mat[i][j] = (i == j);
        }
    }
    return k;
}

// Create an m x n zero matrix.
Matrix matrix_zeroes(int m, int n) {
    Matrix k;
    int i;
    assert(m > 0 && n > 0);
    k.mat = calloc(m, sizeof(double*)); // Creating an array of pointers.
    for(i = 0; i < m; i++) {
        k.mat[i] = calloc(n, sizeof(double));
    }
    k.rows = m;
    k.cols = n;
    return k;
}

// Free the memory allocated by a matrix.
void matrix_free(Matrix *k) {
    int i;
    if(k->mat) {
        for(i = 0; i < k->rows; i++) {
            free(k->mat[i]);
        }
        free(k->mat);
        k->mat = NULL;
        k = NULL;
    }
}

// Prints the matrix to the debug console.
void matrix_print(Matrix k) {
    int i, j;
    for(i = 0; i < k.rows; i++) {
        printf("[");
        for(j = 0; j < k.cols; j++) {
            if(j > 0) {
                printf(",");
            }
            printf("%8.3lf", k.mat[i][j]);
        }
        printf("]\n");
    }
}

// Multiply each element in the matrix by c.
void matrix_scale(double c, Matrix *k) {
    int i, j;
    for(i = 0; i < k->rows; i++) {
        for(j = 0; j < k->cols; j++) {
            k->mat[i][j] *= c;
        }
    }
}

// Returns row m of matrix k as a vector.
Vector matrix_row(Matrix k, int m) {
    Vector v;
    int j;
    assert(m >= 0 && m < k.rows);
    v = vector_zeroes(k.cols);
    for(j = 0; j < k.cols; j++) {
        v.vec[j] = k.mat[m][j];
    }
    v.dim = k.cols;
    return v;
}

// Returns column n of matrix k as a vector.
Vector matrix_col(Matrix k, int n) {
    Vector v;
    int i;
    assert(n >= 0 && n < k.cols);
    v = vector_zeroes(k.rows);
    for(i = 0; i < k.rows; i++) {
        v.vec[i] = k.mat[i][n];
    }
    v.dim = k.rows;
    return v;
}

// Adds two matrices and returns the sum.
Matrix matrix_add(Matrix k, Matrix l) {
    Matrix s;
    int i, j;
    assert(k.rows == l.rows &&
        k.cols == l.cols);
    s = matrix_zeroes(k.rows, k.cols);
    for(i = 0; i < k.rows; i++) {
        for(j = 0; j < l.cols; j++) {
            s.mat[i][j] = k.mat[i][j] + l.mat[i][j];
        }
    }
    s.rows = k.rows;
    s.cols = l.cols;
    return s;
}

// Multiplies two matrices and returns the product.
Matrix matrix_mult(Matrix k, Matrix l) {
    Matrix p;
    int i, j;
    Vector row_k, col_l;
    assert(k.cols == l.rows);
    p = matrix_zeroes(k.rows, l.cols);
    for(i = 0; i < k.rows; i++) {
        row_k = matrix_row(k, i);
        for(j = 0; j < l.cols; j++) {
            col_l = matrix_col(l, j);
            p.mat[i][j] = vector_dot(row_k, col_l);
            vector_free(&col_l);
        }
        vector_free(&row_k);
    }
    p.rows = k.rows;
    p.cols = l.cols;
    return p;
}

// Returns a new matrix with the rows and columns of the matrix k swapped.
Matrix matrix_transpose(Matrix k) {
    Matrix l;
    int i, j;
    l = matrix_zeroes(k.cols, k.rows);
    for(i = 0; i < k.rows; i++) {
        for(j = 0; j < k.cols; j++) {
            l.mat[j][i] = k.mat[i][j];
        }
    }
    return l;
}

// Compute the determinant of matrix k.
double matrix_det(Matrix k) {
    Matrix smaller;
    int i, i_from, i_to, j;
    double d = 0;
    assert(k.rows == k.cols);
    if(k.rows == 1) {
        return k.mat[0][0];
    } else {
        // Use the sum of the determinants from the first column
        for(i = 0; i < k.rows; i++) {
            smaller = matrix_zeroes(k.rows-1, k.cols-1);
            i_to = 0;
            for(i_from = 0; i_from < k.rows; i_from++) {
                if(i_from == i) {
                    continue; // Skip row i
                }
                for(j = 1; j < k.cols; j++) {
                    smaller.mat[i_to][j-1] = k.mat[i_from][j];
                }
                i_to++;
            }
            d += (i%2 ? -1 : 1) * k.mat[i][0] * matrix_det(smaller);
            matrix_free(&smaller);
        }
    }
    return d;
}