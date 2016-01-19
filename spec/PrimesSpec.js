var Prime = require('../src/primes');

describe("isPrime", function() {

  it("should return true when passed a prime number, and an array of all the prime numbers that come before it", function() {
    var primesLessThanFive = [ 2, 3 ];

    expect(Prime.isPrime(5, primesLessThanFive)).toBe(true);
  });

  it("should return false when passed a non-prime number, and an array of all the prime numbers that come before it", function() {  
    var primesLessThanSix = [ 2, 3, 5 ];

    expect(Prime.isPrime(6, primesLessThanSix)).toBe(false);
  });

});

describe("firstNPrimes", function() {

  it("should return an array of the first 10 prime numbers when 10 is passed in", function() {
    var expected = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ];

    expect(Prime.firstN(10)).toEqual(expected);
  });

  it("should return an empty array when passed a number less than 1", function() {
   
   expect(Prime.firstN(-1)).toEqual([]);
   
   expect(Prime.firstN(0)).toEqual([]);
  });

  it("should return [2] when 1 is passed in", function() {
    expect(Prime.firstN(1)).toEqual([2]);
  });

});

describe("primeMultiplicationTable", function() {

  it("should return 2D representing a multiplication table of the first N primes, with the first row and column being the first N primes", function() {
    var onePrimeTable = [ 
                          [ " ", 2], 
                          [ 2, 4 ] 
                        ];

    expect(Prime.primeMultiplicationTable(1)).toEqual(onePrimeTable);

    var threePrimesTable = [ 
                [ " ", 2, 3, 5 ], 
                [ 2, 4, 6, 10 ],
                [ 3, 6, 9, 15 ],
                [ 5, 10, 15, 25]
               ];

    expect(Prime.primeMultiplicationTable(3)).toEqual(threePrimesTable);
  });
});