const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.

  reader.question(`Is ${el1} greater than ${el2}? `, function(ans) {
      if (ans == "yes") {
          callback(true);
      } else {
          callback(false);
      }
  });
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.

//   None of this shit worked.
//   let swapped = madeAnySwaps;

//   if (i < arr.length - 1) {
//       askIfGreaterThan(arr[i], arr[i + 1], isGreaterThan => {
//           if (isGreaterThan === true) {
//               let tmp = arr[i];
//               arr[i] = arr[i + 1];
//               arr[i + 1] = tmp;

//               console.log(arr);

//               i = i + 1;
//               swapped = true;
//               innerBubbleSortLoop(arr, i, swapped, outerBubbleSortLoop);
//           } else {

    
//               swapped = false;
//               i = i + 1;
//               innerBubbleSortLoop(arr, i, swapped, outerBubbleSortLoop);
//           }
//       });
//   } else if (i == arr.length - 1) {
//     console.log(swapped);
//     outerBubbleSortLoop(madeAnySwaps);
//   }

    if (i == (arr.length - 1)) {
        outerBubbleSortLoop(madeAnySwaps);
        return;
    }

    if (i < arr.length - 1) {
      askIfGreaterThan(arr[i], arr[i + 1], isGreaterThan => {
          if (isGreaterThan === true) {
              let tmp = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = tmp;

              madeAnySwaps = true;
          } 

          innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
      });
    }





}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.

    if (madeAnySwaps === true) {
        let i = 0;
        innerBubbleSortLoop(arr, i, false, outerBubbleSortLoop);
    } else {
        sortCompletionCallback(arr);
    }
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.

  outerBubbleSortLoop(true);

}

absurdBubbleSort([3, 2, 1, 4], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

// askIfGreaterThan(1, 2, cb => {
//     console.log(cb);
//     reader.close();
// });


// s = function() {
//     console.log("MadeSwaps")
// }

// d = function() {
//     console.log("Outloop")
// }

// innerBubbleSortLoop([3, 2, 1], 0, s, d) 