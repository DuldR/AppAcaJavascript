Array.prototype.bubbleSort = function() {

    let swapped = true

    while (swapped != false) {
        swapped = false;

        for (i = 1; i < this.length; i++) {
           let initial = this[i - 1]; 
           let check = this[i];

           if (initial > check) {
               this[i - 1] = check;
               this[i] = initial;
               swapped = true;
           }
        }
    }

    return this;

}

String.prototype.substrings = function() {
    let subs = []

    for (i = 0; i < this.length; i++) {

        for (j = 1; j <= this.length; j++) {

            if (i === j || i > j) {
                continue;
            } else {
                subs.push(this.slice(i, j));
            }
            
        }
    }

    return subs;
}