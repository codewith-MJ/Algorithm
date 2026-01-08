function solution(num_list) {
    let evenNumCount = 0;
    for (const num of num_list) {
        if (num % 2 === 0) {
            evenNumCount++;
        }
    }
    return [evenNumCount, num_list.length - evenNumCount];
}