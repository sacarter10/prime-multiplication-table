var Prime = {
	isPrime: function (number, primesSoFar) {
		var squareRoot = Math.sqrt(number);

		for (var j = 0; j < primesSoFar.length && primesSoFar[j] <= squareRoot; j++) {

			if (number % primesSoFar[j] == 0) {	
				return false;
			} 
		}

		return true;
	},

	// returns an array of the first n prime numbers
	firstN: function (n) {
		var primeArray = [];

		for (var i = 2; primeArray.length < n; i++) {

			if (this.isPrime(i, primeArray)) {
				primeArray.push(i);
			}
		}

		return primeArray;
	},

	// returns a two-dimensional array, representing a multiplication table of the first n prime numbers
	primeMultiplicationTable: function (n) {
		var primes = this.firstN(n);
		var multiplicationTable = []; 

		var firstRow = [1].concat(primes);
		multiplicationTable.push(firstRow);

		for (var i = 1; i < firstRow.length; i++) {
			var row = new Array(firstRow.length);

			for (var j = 0; j < firstRow.length; j++) {
				row[j] = firstRow[i] * firstRow[j];
			}

			multiplicationTable.push(row);
		}

		multiplicationTable[0][0] = " "; 

		return multiplicationTable;
	}, 

	printTable: function (n) {
		var table = this.primeMultiplicationTable(n);

		table.forEach(function (row, index) {
			console.log(row.join(" "));
		});
	}
}

module.exports = Prime;

console.log(Prime.printTable(10));