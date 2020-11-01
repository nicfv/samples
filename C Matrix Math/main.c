#include <stdio.h>
#include <stdlib.h>
#include <assert.h>
#include <math.h>

#include "matmath.c"
#include "matrix.h"

int main() {
    Matrix A, B, C;
    Vector b;
    double data[] = {2, 0, 1, 1, 0, 1, 2, 3, 0, 2, 3, 0, 1, 2, 0, 3},
        data2[] = {0, 0, 0, -2, 0, 1, 2, 0, 0, 2, 4, 0, 1, 2, 0, 2},
        data3[] = {1, 2, 4, 6};
    A = matrix(data, 4, 4);
    B = matrix(data2, 4, 4);
    b = vector(data3, 4);

    printf("A =\n");
    matrix_print(A);
    // printf("b =\n");
    // vector_print(b);
    // matrix_print_equations(A, b);

    B = matrix_invert(&A);

    printf("A' =\n");
    matrix_print(A);
    printf("A^-1 =\n");
    matrix_print(B);
    // matrix_print_equations(A, b);

    A = matrix(data, 4, 4);
    printf("C =\n");
    C = matrix_mult(A, B);
    matrix_print(C);

    // B = matrix_invert(&A);

    // printf("A =\n");
    // matrix_print(A);

    // printf("B =\n");
    // matrix_print(B);

    // printf("C =\n");
    // vector_print(C);

    // printf("\n\n");
    // matrix_print_equations(A, C);
    // printf("\n\n");

    // matrix_solve(&A, &C);
    // printf("\n\n");

    // printf("A =\n");
    // matrix_print(A);
    // printf("C =\n");
    // vector_print(C);

    // printf("\n\n");
    // matrix_print_equations(A, C);
    // printf("\n\n");

    matrix_free(&A);
    matrix_free(&B);
    
    return 0;
}