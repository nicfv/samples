#ifndef MAT_H
#define MAT_H

#include "mathix.h"

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

// Matrix member functions:

// Create a matrix with m rows and n columns.
Matrix matrix(double*, int, int);
// Create an m x m identity matrix.
Matrix matrix_identity(int);
// Create an m x n zero matrix.
Matrix matrix_zeroes(int, int);
// Free the memory allocated by a matrix.
void matrix_free(Matrix*);
// Prints the matrix to the debug console.
void matrix_print(Matrix);
// Prints the linear equations to Ax=b.
void matrix_print_equations(Matrix, Vector);
// Returns row m of matrix k as a vector.
Vector matrix_row(Matrix, int);
// Returns column n of matrix k as a vector.
Vector matrix_col(Matrix, int);
// Adds two matrices and returns the sum.
Matrix matrix_add(Matrix, Matrix);
// Multiplies two matrices and returns the product.
Matrix matrix_mult(Matrix, Matrix);
// Returns a new matrix with the rows and columns of the matrix k swapped.
Matrix matrix_transpose(Matrix);
// Compute the determinant of matrix k.
double matrix_det(Matrix);
// Swap row i1 with i2.
void matrix_swap_rows(Matrix*, int, int);
// Swap column j1 with j2.
void matrix_swap_cols(Matrix*, int, int);
// Multiply each element in the matrix by c.
void matrix_scale(Matrix*, double);
// Multiply each element in row i of the matrix by c.
void matrix_scale_row(Matrix*, int, double);
// Multiply each element in column j of the matrix by c.
void matrix_scale_col(Matrix*, int, double);
// Add row i_src onto row i_dest multiplied by factor f.
void matrix_add_row(Matrix*, int, int, double);
// Add column j_src onto column j_dest multiplied by factor f.
void matrix_add_col(Matrix*, int, int, double);
// Solves or simplifies the linear equation Ax=b.
void matrix_solve(Matrix*, Vector*);

// Vector member functions:

// Create a vector with m dimensions.
Vector vector(double*, int);
// Create a vector full of m zeroes.
Vector vector_zeroes(int);
// Free the memory allocated by a vector.
void vector_free(Vector*);
// Prints the vector to the debug console.
void vector_print(Vector);
// Adds two vectors and returns the sum.
Vector vector_add(Vector, Vector);
// Compute the dot product between two vectors.
double vector_dot(Vector, Vector);
// Calculate the magnitude of vector k.
double vector_mag(Vector);
// Multiply each element in the vector by c.
void vector_scale(Vector*, double);
// Multiply the element i in the vector by c.
void vector_scale_element(Vector*, int, double);
// Swap vector indices i1 and i2.
void vector_swap(Vector*, int, int);
// Add element i_src onto element i_dest multiplied by factor f.
void vector_add_element(Vector*, int, int, double);

// Include function definitions for matrices and vectors.
#include "matrix.c"
#include "vector.c"

#endif