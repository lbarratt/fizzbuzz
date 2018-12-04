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

  getReport() {
    return this.values.reduce((report, value) => {
      const key = isFinite(value) ? 'integer' : value;

      report[key] = (report[key] ? report[key] + 1 : 1);

      return report;
    }, {});
  }
}

FizzBuzz.RULES = {
  lucky: i => i.toString().includes('3'),
  fizzbuzz: i => i % 15 === 0,
  fizz: i => i % 3 === 0,
  buzz: i => i % 5 === 0
}

module.exports = FizzBuzz;
