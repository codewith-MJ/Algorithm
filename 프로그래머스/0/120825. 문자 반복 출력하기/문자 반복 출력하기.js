function solution(my_string, n) {
    let answer = "";
    for (const letter of my_string) {
        answer += letter.repeat(n);
    }
    return answer;
}