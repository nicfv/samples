#ifndef MAT_H
#define MAT_H

#include "mathix.h"

// A structure with a 2D array that represent the elements of a matrix.
typedef struct _Matrix {
    double** mat;
    int rows;
    int cols;
} Matrix;

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

// Include function definitions.
#include "matrix.c"

#endif // MAT_H