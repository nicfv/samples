#ifndef MATHX_H
#define MATHX_H

#define EPS (1e-15)

#define absf(a) ((a) > 0 ? (a) : -(a))
#define zero(a) ((a) < EPS && (a) > -EPS)

// Compute the square root of the absolute value of x.
double sqrt(double);

// Include function definitions.
#include "mathix.c"

#endif // MATHX_H