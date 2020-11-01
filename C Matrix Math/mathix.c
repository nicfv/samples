double sqrt(double x) {
	double r = 1, epsilon = 1e-15;
	x = absf(x);
	if(zero(x)) { return 0; }
	while(absf(x-r*r) > x*epsilon) {
		r = (r+x/r)/2;
	}
	return r;
}