const solution = (numer1, denom1, numer2, denom2) => {
    const denom = denom1 * denom2;
    const numer = numer1 * denom2 + numer2 * denom1;
    
    let a = denom;
    let b = numer;
    
    while (b !== 0) {
        const temp = a % b;
        a = b;
        b = temp;
    }
        
    return [numer / a, denom / a];
};