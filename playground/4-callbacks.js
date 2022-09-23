// 
// Goal: Mess aroudn with callback pattern
// 
// 1. Define an add function that accepts the correct aruguments.
// 2. Use setTimeout to simulate 2 seconds delay.
// 3. After 2 seconds are up, call the callback function with the sum.
// 4. Test your work.

const add = (a, b, callback) {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) //Should print:5
})