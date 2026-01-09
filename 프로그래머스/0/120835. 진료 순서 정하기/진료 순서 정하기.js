function solution(emergency) {
    const priority = {};
    [...emergency].sort((a, b) => b - a).forEach((item, index) => {
        priority[item] = index + 1;
    })

    return emergency.map((number) => priority[number]);
}