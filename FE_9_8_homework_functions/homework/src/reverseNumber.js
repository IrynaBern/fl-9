function reverseNumber(number){
	const TEN = 10;
	const ONE = 1;
	let sign = number > 0 ? ONE : -ONE;
	number = Math.abs(number);
	let revers = 0;
	while(number > 0){
		revers *= TEN;
		revers += parseInt(number % TEN);
		number = parseInt(number / TEN);
	}
	return sign * revers;
}