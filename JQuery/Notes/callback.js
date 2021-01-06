function myCall(param1, param2) {
    console.log(param1 + param2)
}

function myFun(cb) {
    cb();
}

// THis works. Arrow notation provides an anon wrapper function. Why that's required? ECMAScript is garbage.
myFun(cb => { myCall(1, 2) });