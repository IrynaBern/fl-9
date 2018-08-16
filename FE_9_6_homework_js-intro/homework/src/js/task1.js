let price = parseFloat(prompt('Input amount of money ', '0'));
let discount = parseFloat(prompt('Input discount ', '0'));
if(!(!isNaN(parseFloat(price)) && isFinite(price)) || 
	price < 0 || discount < 0 || discount > 100){
	console.log('Invalid data');
}else{
	let discountPrice = price - price * discount / 100;
	let saved = price - discountPrice;
	console.log('Price without discount: ' + +price.toFixed(2) + 
			'\nDiscount: ' + +discount.toFixed(2) + 
			'\nPrice with discount: ' + +discountPrice.toFixed(2) + 
			'\nSaved: ' + +saved);
	}