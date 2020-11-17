class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.

    const date = new Date();
    this.hour = date.getHours();
    this.second = date.getSeconds();
    this.minute = date.getMinutes();


    this.printTime;
    // setInterval(this._tick(), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.

    console.log(`The time is ${this.hour}:${this.minute}:${this.second}.`);
  }

//   _tick() {
//     // 1. Increment the time by one second.
//     // 2. Call printTime.

//     second = second + 1;

//     if (second === 60) {
//         minute = minute + 1;
//         second = 0;
        
//         if (minute === 60) {
//             hour = hour + 1;
//             minute = 0;

//             if (hour === 24) {
//                 hour = 0;
//             }
//         }
//     }

//     this.printTime();

//   }
}

const clock = new Clock();