const solution = array => {
    const sroted = [...array].sort((a, b) => a - b);
    
    return sroted[Math.floor(sroted.length / 2)];
}