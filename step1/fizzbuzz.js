class FizzBuzz {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  fizzle() {
    const range = this.max - this.min + 1;

    this.values = Array(range).fill().map((_, index) => {
      const integer = this.min + index;

      const rule = Object.keys(this.constructor.RULES).find(rule => {
        return this.constructor.RULES[rule](integer);
      });

      return rule || integer;
    });
  }

  getValues() {
    return this.values;
  }
}

FizzBuzz.RULES = {
  fizzbuzz: i => i % 15 === 0,
  fizz: i => i % 3 === 0,
  buzz: i => i % 5 === 0
}

module.exports = FizzBuzz;

