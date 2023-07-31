let pedometer = {
  numberOfFoot: 0,
  increase: function () {
    this.numberOfFoot++;
    return this;
  },
  decrease: function () {
    if (this.numberOfFoot > 0) {
      this.numberOfFoot--;
    }
    return this;
  },

  reset: function () {
    this.numberOfFoot = 0;
    return this;
  },
  read: function () {
    console.log("Number of steps: " + this.numberOfFoot);
    return this;
  },
};
pedometer.increase();
pedometer.increase();
pedometer.read();
pedometer.decrease();
pedometer.read();
pedometer.reset();
pedometer.read();
