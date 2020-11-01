#include <stdio.h>
#include <stdlib.h>
#include <assert.h>

#include "matrix.h"

int main() {
    Matrix A, B, C;
    Vector b;
    double data[] = {2, 0, 1, -4, 0, 1, 2, 3, 0, 2, 3, 0, 1, 2, 0, 3},
        data2[] = {0, 0, 0, -2, 0, 1, 2, 0, 0, 2, 4, 0, 1, -6, 0, 2},
        data3[] = {-1, 2, 4, 6};
    A = matrix(data, 4, 4);
    B = matrix(data2, 4, 4);
    b = vector(data3, 4);

    printf("\nA = \n");
    matrix_print(A);

    printf("\nB = \n");
    matrix_print(B);

    printf("\ndet(A) = %lf\n", matrix_det(A));

    printf("\ndet(B) = %lf\n", matrix_det(B));

    printf("\nA+B = \n");
    C = matrix_add(A, B);
    matrix_print(C);
    matrix_free(&C);

    printf("\nA-B = \n");
    matrix_scale(&B, -1);
    C = matrix_add(A, B);
    matrix_scale(&B, -1);
    matrix_print(C);
    matrix_free(&C);

    printf("\nA*B = \n");
    C = matrix_mult(A, B);
    matrix_print(C);
    matrix_free(&B);
    matrix_free(&C);

    printf("\nb = \n");
    vector_print(b);

    printf("\nAx = b (unsolved)\n");
    matrix_print_equations(A, b);

    printf("\nAx = b (solved)\n");
    matrix_solve(&A, &b);
    matrix_print_equations(A, b);
    matrix_free(&A);
    vector_free(&b);

    printf("\nA^-1 = \n");
    A = matrix(data, 4, 4);
    B = matrix_invert(&A);
    matrix_print(B);
    matrix_free(&A);

    printf("\nA*A^-1 = \n");
    A = matrix(data, 4, 4);
    C = matrix_mult(A, B);
    matrix_print(C);
    matrix_free(&A);
    matrix_free(&B);
    matrix_free(&C);
    
    return 0;
}