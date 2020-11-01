#ifndef MATHX_H
#define MATHX_H

#define absf(a) ((a) > 0 ? (a) : -(a))
#define zero(a) ((a) < 1e-15 && (a) > -1e-15)

// Compute the square root of the absolute value of x.
double sqrt(double);

#include "mathix.c"

#endif