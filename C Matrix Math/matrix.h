#ifndef MAT_H
#define MAT_H

// A structure with a 2D array that represent the elements of a matrix.
typedef struct _Matrix {
    double** mat;
    int rows;
    int cols;
} Matrix;

// A structure with a 1D array that represent the elements of a vector.
typedef struct _Vector {
    double* vec;
    int dim;
} Vector;

// Matrix member functions.

Matrix matrix(double*, int, int);
Matrix matrix_identity(int);
Matrix matrix_zeroes(int, int);
void matrix_free(Matrix*);
void matrix_print(Matrix);
void matrix_scale(double, Matrix*);
Vector matrix_row(Matrix, int);
Vector matrix_col(Matrix, int);
Matrix matrix_add(Matrix, Matrix);
Matrix matrix_mult(Matrix, Matrix);
Matrix matrix_transpose(Matrix);
double matrix_det(Matrix);

// Vector member functions.

Vector vector(double*, int);
Vector vector_zeroes(int);
void vector_free(Vector*);
void vector_print(Vector);
void vector_scale(double, Vector*);
Vector vector_add(Vector, Vector);
double vector_dot(Vector, Vector);
double vector_mag(Vector);

// Include function definitions for matrices and vectors.
#include "matrix.c"
#include "vector.c"

#endif