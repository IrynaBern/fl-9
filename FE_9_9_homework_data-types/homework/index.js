function findType(element) {
	return typeof element;
}

function forEach(array, callbackFunction){
	for(let elem of array) {	
		callbackFunction(elem);
	}
}

function map(array, transformFunction) {
	let newArray = [];
	forEach(array,elem => newArray.push(transformFunction(elem)));
	return newArray;
}

function filter(array, predicateFunction) {
	let newArray = [];
	forEach(array, elem => {
		if(predicateFunction(elem)){
			newArray.push(elem);
		}
	});
	return newArray;
}

function getAdultAppleLovers(data) {
	return map(filter(data, elem => elem.age > 18 && elem.favoriteFruit === 'apple'), elem => elem.name);
}

function keys(object){
	let keysOfObject = [];
	for(let key in object) {
		if(object.hasOwnProperty(key)) {
			keysOfObject.push(key);
		}
	}
	return keysOfObject;
}

function values(object){
	let valuesOfObject = [];
	for(let key in object) {
		if(object.hasOwnProperty(key)) {
			valuesOfObject.push(object[key]);
		}
	}
	return valuesOfObject;
}

function showFormattedDate(date){
	const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return `It is ${date.getDate()} of ${date[date.getMonth()]}, ${date.getFullYear()}`;
}