const linearSearch = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        const currentVal = arr[i];
        if (num === currentVal) return i;
    }
    return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5], 3))
// Same as Array.indexOf()
// console.log([1,2,3,4,5].indexOf(3))