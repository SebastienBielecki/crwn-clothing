function matchingStrings(strings, queries) {
    let result = new Array(queries.length).fill(0);
    // Write your code here
    for (let i=0; i<queries.length;i++) {
        for (let string of strings) {
            if (queries[i] === string) {
                result[i]++;
            }
        }
    }
    return result;
    
}

console.log(matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"]));

