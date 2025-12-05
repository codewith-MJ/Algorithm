function solution(num1, num2) {
    if (checkIfNumLimit(num1) || checkIfNumLimit(num2)) {
        return;
    }
    
    return num1 === num2 ? 1 : -1;
}

function checkIfNumLimit(number) {
    if (number < 0 || number > 10000) {
        return true;
    }
}