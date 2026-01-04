const getGcd = (a, b) => {
    while (b !== 0) {
        const temp = a % b;
        a = b;
        b = temp;
    }
    
    return a;
};

const solution = (numer1, denom1, numer2, denom2) => {
    const denom = denom1 * denom2;
    const numer = numer1 * denom2 + numer2 * denom1;
    
    const gcd = getGcd(numer, denom);
        
    return [numer / gcd, denom / gcd];
};