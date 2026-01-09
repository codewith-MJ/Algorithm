function solution(age) {
    return age.toString()
            .split("")
            .map(n => "abcdefghij"[n])
            .join("");
}