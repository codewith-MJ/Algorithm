function solution(n) {
    const answer = [];
    let ifMinus = false;
    
    for (let i = 1; i <= n; i++) {
        if (answer.includes(n / i)) {
            break;
        }
        
        if (n % i === 0) {
            answer.push(i);
            if (n / i === i) {
                ifMinus = true;
            }
        }
    }
    
    return ifMinus ? answer.length * 2 - 1 : answer.length * 2;
}