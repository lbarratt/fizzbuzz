const FizzBuzz = require('./fizzbuzz');

test('Transforms multiples of 3 to fizz', () => {
  const fizzer = new FizzBuzz(1, 10);
  fizzer.fizzle();
  const values = fizzer.getValues();

  expect(values[5]).toEqual('fizz');
  expect(values[8]).toEqual('fizz');
});

test('Transforms multiples of 5 to buzz', () => {
  const fizzer = new FizzBuzz(1, 30);
  fizzer.fizzle();
  const values = fizzer.getValues();

  expect(values[4]).toEqual('buzz');
  expect(values[9]).toEqual('buzz');
});

test('Transforms multiples of 15 to fizzbuzz', () => {
  const fizzer = new FizzBuzz(1, 45);
  fizzer.fizzle();
  const values = fizzer.getValues();

  expect(values[14]).toEqual('fizzbuzz');
  expect(values[44]).toEqual('fizzbuzz');
});

test('Transforms number that include 3 to lucky', () => {
  const fizzer = new FizzBuzz(1, 30);
  fizzer.fizzle();
  const values = fizzer.getValues();

  expect(values[2]).toEqual('lucky');
  expect(values[12]).toEqual('lucky');
});

test('Reports on the number of occurences', () => {
  const fizzer = new FizzBuzz(1, 20);
  fizzer.fizzle();
  const report = fizzer.getReport();

  expect(report.integer).toEqual(10);
  expect(report.lucky).toEqual(2);
  expect(report.fizzbuzz).toEqual(1);
  expect(report.fizz).toEqual(4);
  expect(report.buzz).toEqual(3);
});
