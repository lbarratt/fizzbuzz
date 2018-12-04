const FizzBuzz = require('./fizzbuzz');

test('Transforms multiples of 3 to fizz', () => {
  const fizzer = new FizzBuzz(1, 6);

  fizzer.fizzle();

  expect(fizzer.getValues()).toEqual([
    1,
    2,
    'fizz',
    4,
    'buzz',
    'fizz'
  ]);
});

test('Transforms multiples of 5 to buzz', () => {
  const fizzer = new FizzBuzz(5, 10);

  fizzer.fizzle();

  expect(fizzer.getValues()).toEqual([
    'buzz',
    'fizz',
    7,
    8,
    'fizz',
    'buzz'
  ]);
});

test('Transforms multiples of 15 to fizzbuzz', () => {
  const fizzer = new FizzBuzz(1, 30);
  fizzer.fizzle();
  const values = fizzer.getValues();

  expect(values[14]).toEqual('fizzbuzz');
  expect(values[29]).toEqual('fizzbuzz');
});
