// Create a vector with m dimensions.
Vector vector(double arr[], int m) {
    Vector k;
    int i;
    k = vector_zeroes(m);
    for(i = 0; i < m; i++) {
        k.vec[i] = arr[i];
    }
    k.dim = m;
    return k;
}

// Create a vector full of m zeroes.
Vector vector_zeroes(int m) {
    Vector k;
    assert(m > 0);
    k.vec = calloc(m, sizeof(double));
    k.dim = m;
    return k;
}

// Free the memory allocated by a vector.
void vector_free(Vector *k) {
    if(k->vec) {
        free(k->vec);
        k->vec = NULL;
        k = NULL;
    }
}

// Prints the vector to the debug console.
void vector_print(Vector k) {
    int i;
    printf("[");
    for(i = 0; i < k.dim; i++) {
        if(i > 0) {
            printf(",");
        }
        printf("%8.3lf", k.vec[i]);
    }
    printf("]\n");
}

// Multiply each element in the vector by c.
void vector_scale(double c, Vector *k) {
    int i;
    for(i = 0; i < k->dim; i++) {
        k->vec[i] *= c;
    }
}

// Adds two vectors and returns the sum.
Vector vector_add(Vector k, Vector l) {
    Vector s;
    int i;
    assert(k.dim == l.dim);
    s = vector_zeroes(k.dim);
    for(i = 0; i < k.dim; i++) {
        s.vec[i] = k.vec[i] + l.vec[i];
    }
    s.dim = k.dim;
    return s;
}

// Compute the dot product between two vectors.
double vector_dot(Vector k, Vector l) {
    int i;
    double d = 0;
    assert(k.dim == l.dim);
    for(i = 0; i < k.dim; i++) {
        d += k.vec[i] * l.vec[i];
    }
    return d;
}

// Calculate the magnitude of vector k.
double vector_mag(Vector k) {
    return sqrt(vector_dot(k, k));
}