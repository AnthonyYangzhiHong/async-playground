/*
* Problem: 10,20,30 as initial paramters, calling doubleAfter2Seconds on each of them
* and add the results up
* Solution: Promise.all
*/

function doubleAfter2Seconds(x) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(x * 2);
		}, 2000);
	})
}

var promise1 = doubleAfter2Seconds(10);
var promise2 = doubleAfter2Seconds(20);
var promise3 = doubleAfter2Seconds(30);

Promise
.all([promise1, promise2, promise3])
.then(result => {
	console.log(result);
})
