#ifndef VEC_H
#define VEC_H

#include "mathix.h"

// A structure with a 1D array that represent the elements of a vector.
typedef struct _Vector {
    double* vec;
    int dim;
} Vector;

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

// Include function definitions.
#include "vector.c"

#endif // VEC_H