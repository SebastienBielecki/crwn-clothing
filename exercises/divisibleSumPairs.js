function findMedian(arr) {
    // Write your code here
    arr.sort(function(a, b) {
        return b - a;
      });
    
      console.log(arr);
    const medianIndex = Math.floor(arr.length / 2);
    //console.log(medianIndex);
    return arr[medianIndex];
}

console.log(findMedian([5,3,1,2,4]));
console.log(findMedian([0,1,2,4,6,5,3]));

