function solution(age) {
    return age.toString()
            .split("")
            .map(n => String.fromCharCode(Number(n) + 97))
            .join("");
}