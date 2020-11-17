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


    this.printTime();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.

    console.log(`The time is ${this.hour}:${this.minute}:${this.second}.`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.

    this.second = this.second + 1;

    if (this.second === 60) {
        this.minute = this.minute + 1;
        this.second = 0;
        
        if (this.minute === 60) {
            this.hour = this.hour + 1;
            this.minute = 0;

            if (this.hour === 24) {
                this.hour = 0;
            }
        }
    }

    // console.log(this.second)
    // console.log(this.minute)
    // console.log(this.hour)

    this.printTime();

  }
}

const clock = new Clock();