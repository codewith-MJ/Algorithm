function solution(rsp) {
    const arr = {
        2: 0,
        0: 5,
        5: 2
    };
    
    return [...rsp].map(value => arr[value]).join("");
}