function solution(num_list) {
    let left = 0;
    let right = num_list.length - 1;
    
    while (left < right) {
        const temp = num_list[left];
        num_list[left] = num_list[right];
        num_list[right] = temp;
        left++;
        right--;
    }
    
    return num_list;
}