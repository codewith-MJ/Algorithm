function getGcd(a, b) {
    while (b !== 0) {
        const temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}

function solution(n) {
    const gcd = getGcd(6, n);
    return 6 * n / gcd / 6;
}