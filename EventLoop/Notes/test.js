class Clock {
  constructor() {

    const date = new Date();
    this.hour = date.getHours();
    this.second = date.getSeconds();
    this.minute = date.getMinutes();


    this.printTime();
    setInterval(this._tick(), 1000);
  }

  printTime() {
    console.log(`The time is ${this.hour}:${this.minute}:${this.second}.`);
  }

  _tick() {

    return () => {
        this.second = this.second + 1;
        this.printTime();
    }
  }
}

const clock = new Clock();