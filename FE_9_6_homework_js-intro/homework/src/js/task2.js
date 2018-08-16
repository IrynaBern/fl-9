const alfa = 180;
let a = parseFloat(prompt('Input 1-st side of triangle', '0'));
let b = parseFloat(prompt('Input 2-nd side of triangle', '0'));
let angle = parseFloat(prompt('Input α-angle', '0'));
if(!(!isNaN(parseFloat(a)) && isFinite(a)) || 
	!(!isNaN(parseFloat(b)) && isFinite(b)) ||
	!(!isNaN(parseFloat(angle)) && isFinite(angle)) ||
	a <= 0 || b <=0 || angle <=0 || angle >= alfa){
	console.log('Invalid data');
}else{
	let angleInRad = angle * Math.PI / alfa;
	let c = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(angleInRad)); 
	let perimeter = a + b + c;
	let halfP = perimeter / 2;
	let square = Math.sqrt(halfP * ((halfP - a) * (halfP - b) * (halfP - c)));
	if(+c.toFixed(2) === 0 || +square.toFixed(2) === 0 || +perimeter.toFixed(2) === 0){
		console.log('Invalid data');
	}else{
		console.log('c length: ' + +c.toFixed(2) +
					'\nTriangle square: ' + +square.toFixed(2) +
					'\nTriangle perimeter: ' + +perimeter.toFixed(2));
	}
}