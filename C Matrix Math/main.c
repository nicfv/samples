#include <stdio.h>
#include <stdlib.h>
#include <assert.h>
#include <math.h>

#include "matrix.h"

int main() {
    Matrix A, B, C, D, E, F, G;
    double data[] = {2, 0, 1, 1, 0, 1, 2, 3, 0, 2, 3, 0, 1, 2, 0, 3},
        data2[] = {0, 0, 1, 1, 0, 1, 2, 0, 0, 2, 1, 0, 1, 2, 0, 2};
    A = matrix(data, 4, 4);
    B = matrix(data2, 4, 4);
    C = matrix_add(A, B);
    D = matrix(data2, 2, 8);
    E = matrix_transpose(D);
    F = matrix_mult(D, E);
    G = matrix_mult(E, D);

    printf("A =\n");
    matrix_print(A);

    printf("B =\n");
    matrix_print(B);

    printf("A + B = C =\n");
    matrix_print(C);

    printf("D =\n");
    matrix_print(D);

    printf("D^T = E =\n");
    matrix_print(E);

    printf("D * D^T = F =\n");
    matrix_print(F);

    printf("D^T * D = G =\n");
    matrix_print(G);

    printf("\n");

    printf("det(A) = %lf\n", matrix_det(A));
    printf("det(B) = %lf\n", matrix_det(B));
    printf("det(C) = %lf\n", matrix_det(C));
    printf("det(F) = %lf\n", matrix_det(F));
    printf("det(G) = %lf\n", matrix_det(G));

    matrix_free(&A);
    matrix_free(&B);
    matrix_free(&C);
    matrix_free(&D);
    matrix_free(&E);
    matrix_free(&F);
    matrix_free(&G);
    
    return 0;
}