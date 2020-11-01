double sqrt(double x) {
	double xn = 1, xn1 = 0, epsilon = 1e-15;
	x = absf(x);
	if(zero(x)) { return 0; }
	while(absf(xn-xn1) > epsilon) {
		xn1 = xn;
		xn = (xn+x/xn)/2;
	}
	return xn;
}