Matrix matrix(double *arr, int m, int n) {
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

Matrix matrix_identity(int m) {
    Matrix k;
    int i;
    k = matrix_zeroes(m, m);
    for(i = 0; i < m; i++) {
        k.mat[i][i] = 1;
    }
    return k;
}

Matrix matrix_zeroes(int m, int n) {
    Matrix k;
    int i;
    assert(m > 0 && n > 0);
    // Allocate an array of pointers.
    k.mat = calloc(m, sizeof(double*));
    for(i = 0; i < m; i++) {
        k.mat[i] = calloc(n, sizeof(double));
    }
    k.rows = m;
    k.cols = n;
    return k;
}

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

void matrix_print_equations(Matrix A, Vector b) {
    int i, j, terms;
    double coef;
    assert(A.rows == b.dim);
    for(i = 0; i < A.rows; i++) {
        terms = 0;
        for(j = 0; j < A.cols; j++) {
            coef = A.mat[i][j];
            if(zero(coef)) {
                if(!terms && j >= A.cols-1) {
                    printf("0");
                } else {
                    continue;
                }
            } else {
                if(terms) {
                    if(coef > 0) {
                        printf(" + ");
                    } else {
                        printf(" - ");
                    }
                } else {
                    if(coef < 0) {
                        printf("-");
                    }
                }
                if(zero(absf(coef)-1)) {
                    printf("x%d", j+1);
                } else {
                    printf("%.3lf x%d", absf(coef), j+1);
                }
                terms++;
            }
        }
        printf(" = %.3lf (%d)\n", b.vec[i], i+1);
    }
}

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

double matrix_det(Matrix k) {
    Matrix smaller;
    int i, i_src, i_dest, j;
    double d = 0;
    assert(k.rows == k.cols);
    if(k.rows == 1) {
        return k.mat[0][0];
    } else {
        // Use the sum of the determinants from the first column
        for(i = 0; i < k.rows; i++) {
            smaller = matrix_zeroes(k.rows-1, k.cols-1);
            i_dest = 0;
            for(i_src = 0; i_src < k.rows; i_src++) {
                if(i_src == i) {
                    continue; // Skip row i
                }
                for(j = 1; j < k.cols; j++) {
                    smaller.mat[i_dest][j-1] = k.mat[i_src][j];
                }
                i_dest++;
            }
            d += (i%2 ? -1 : 1) * k.mat[i][0] * matrix_det(smaller);
            matrix_free(&smaller);
        }
    }
    return d;
}

void matrix_swap_rows(Matrix *k, int i1, int i2) {
    int j;
    double temp;
    assert(i1 >= 0 && i2 >= 0 &&
        i1 < k->rows && i2 < k->rows);
    for(j = 0; j < k->cols; j++) {
        temp = k->mat[i1][j];
        k->mat[i1][j] = k->mat[i2][j];
        k->mat[i2][j] = temp;
    }
}

void matrix_swap_cols(Matrix *k, int j1, int j2) {
    int i;
    double temp;
    assert(j1 >= 0 && j2 >= 0 &&
        j1 < k->cols && j2 < k->cols);
    for(i = 0; i < k->rows; i++) {
        temp = k->mat[i][j1];
        k->mat[i][j1] = k->mat[i][j2];
        k->mat[i][j2] = temp;
    }
}

void matrix_scale(Matrix *k, double c) {
    int i, j;
    for(i = 0; i < k->rows; i++) {
        for(j = 0; j < k->cols; j++) {
            k->mat[i][j] *= c;
        }
    }
}

void matrix_scale_row(Matrix *k, int i, double c) {
    int j;
    assert(i >= 0 && i < k->rows);
    for(j = 0; j < k->cols; j++) {
        k->mat[i][j] *= c;
    }
}

void matrix_scale_col(Matrix *k, int j, double c) {
    int i;
    assert(j >= 0 && j < k->cols);
    for(i = 0; i < k->rows; i++) {
        k->mat[i][j] *= c;
    }
}

void matrix_add_row(Matrix *k, int i_src, int i_dest, double f) {
    int j;
    assert(i_src >= 0 && i_dest >= 0 &&
        i_src < k->rows && i_dest < k->rows);
    for(j = 0; j < k->rows; j++) {
        k->mat[i_dest][j] += f * k->mat[i_src][j];
    }
}

void matrix_add_col(Matrix *k, int j_src, int j_dest, double f) {
    int i;
    assert(j_src >= 0 && j_dest >= 0 &&
        j_src < k->cols && j_dest < k->cols);
    for(i = 0; i < k->cols; i++) {
        k->mat[i][j_src] += f * k->mat[i][j_dest];
    }
}

void matrix_solve(Matrix *A, Vector *b) {
    int i, j, i_src, i_dest, diagonal_count;
    double f;
    assert(A->rows == b->dim);
    for(i_src = 0; i_src < A->rows; i_src++) {
        // Find the first nonzero element in row i_src.
        for(j = 0; zero(A->mat[i_src][j]) && j < A->cols; j++) {}
        // Or skip if the row is full of zeroes.
        if(j >= A->cols) { continue; }
        // Simplify row i_src.
        f = 1/A->mat[i_src][j];
        matrix_scale_row(A, i_src, f);
        vector_scale_element(b, i_src, f);
        // Eliminate all other elements in column j.
        for(i_dest = 0; i_dest < A->rows; i_dest++) {
            if(i_src == i_dest) { continue; }
            f = -A->mat[i_dest][j];
            matrix_add_row(A, i_src, i_dest, f);
            vector_add_element(b, i_src, i_dest, f);
        }
    }
    // Order each row based on leading zeroes.
    diagonal_count = 0;
    for(j = 0; j < A->cols; j++) {
        for(i = diagonal_count; i < A->rows; i++) {
            if(!zero(A->mat[i][j])) {
                matrix_swap_rows(A, i, diagonal_count);
                vector_swap(b, i, diagonal_count);
                diagonal_count++;
            }
        }
    }
}



Matrix matrix_invert(Matrix *k) {
    int i, j, i_src, i_dest, diagonal_count;
    double f;
    Matrix l;
    // If the determinant is 0, k cannot be inverted. (Linearly dependent.)
    assert(!zero(matrix_det(*k)));
    l = matrix_identity(k->rows);
    for(i_src = 0; i_src < k->rows; i_src++) {
        // Find the first nonzero element in row i_src.
        // There should always be at least 1 nonzero element
        // in each row because the determinant is not zero.
        for(j = 0; zero(k->mat[i_src][j]) && j < k->cols; j++) {}
        // Simplify row i_src.
        f = 1/k->mat[i_src][j];
        matrix_scale_row(k, i_src, f);
        matrix_scale_row(&l, i_src, f);
        // Eliminate all other elements in column j.
        for(i_dest = 0; i_dest < k->rows; i_dest++) {
            if(i_src == i_dest) { continue; }
            f = -k->mat[i_dest][j];
            matrix_add_row(k, i_src, i_dest, f);
            matrix_add_row(&l, i_src, i_dest, f);
        }
    }
    // Order each row based on leading zeroes.
    diagonal_count = 0;
    for(j = 0; j < k->cols; j++) {
        for(i = diagonal_count; i < k->rows; i++) {
            if(!zero(k->mat[i][j])) {
                matrix_swap_rows(k, i, diagonal_count);
                matrix_swap_rows(&l, i, diagonal_count);
                diagonal_count++;
            }
        }
    }
    return l;
}