double sqrt(double x) {
    double r = 1;
    x = absf(x);
    if(zero(x)) { return 0; }
    while(absf(x-r*r) > x*EPS) {
        r = (r+x/r)/2;
    }
    return r;
}