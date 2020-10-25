function printCallback(num) {

    console.log(`Mx. ${num} Jingleheimer Schmidt`)

}

function titleize(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i]);
    }
}

titleize(["Mary", "Brian", "Leo"], printCallback)