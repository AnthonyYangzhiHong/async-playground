/*
* Problem: 10,20,30 as initial paramters, calling doubleAfter2Seconds on each of them
* and add the results up
* Solution: async/await
*/


function doubleAfter2Seconds(x) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(x * 2);
		}, 2000);
	})
}

async function addAsync(a,b,c){
	const result1 = await doubleAfter2Seconds(a);
	const result2 = await doubleAfter2Seconds(b);
	const result3 = await doubleAfter2Seconds(c);
	return result1 + result2 + result3;
}

addAsync(10, 20, 30)
.then(sum => {
	console.log(sum);
})