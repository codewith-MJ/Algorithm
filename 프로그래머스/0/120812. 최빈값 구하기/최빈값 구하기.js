const solution = array => {
    const check = {};
    let maxCount = 0;
    let mode = -1;
    let isTie = false;
    
    for (const number of array) {
        check[number] = ++check[number] || 1;
    }
    
    for (const key in check) {
        const count = check[key];
        const value = Number(key);
        
        if (count > maxCount) {
            maxCount = count;
            mode = value;
            isTie = false;
        } else if (count === maxCount) {
            isTie = true;
        }
    }
    
    return isTie ? -1 : mode;
}