//1.1
let game = confirm('Do you want to play a game?');
//1.2
if(game === false) {
	alert('You did not become a millionaire, but can.' );
	}else{
	const initMin = 0;
	const initMax = 5;
	const attempts = 3;		
	const one = 1;
	const True = true;
	const False = false;
	const initPrize = 0;
	const initMaxPrize = 10;
	let min = initMin;
	let max = initMax;
	let maxPrize = initMaxPrize;
	let secretNumber;
	let gamePrize = initPrize;
	while(True){
//2.1		
		secretNumber = Math.floor(Math.random() * (max - min + one)) + min;
//		console.log(secretNumber);// згенероване випадкове число
		let currentPrize = maxPrize;
		let continueGame = False;
		let guessAttempts = False;
//2.2	
		for (let i = 1; i <= attempts; i++){
//3.4
			let numberGame = prompt('Enter a number from ' + min + ' to ' + max + 
					'\nAttempts left: ' + (attempts - i + one) + 
					'\nTotal prize: ' + gamePrize + '$' +
					'\nPossible prize on current attempt: ' + currentPrize + '$\n' , '');
			if(numberGame !== '' && numberGame !== null && 
			(numberGame.charAt(0) !== 0 || Number(numberGame) === 0) &&	//валідація введених даних
			numberGame.indexOf('.') === -one && 
			!isNaN(numberGame = Number(numberGame))){
				numberGame = parseFloat(numberGame);
				if(Number.isInteger(numberGame) && numberGame >= min && numberGame <= max){
//2.3
					if( numberGame === secretNumber){
						gamePrize += currentPrize;
						guessAttempts = True;
//3.1 + 3.3
						game = confirm('Congratulation! Your prize is: ' + 
										gamePrize + '$\nDo you want continue a game?');
						if(game){ 
							maxPrize *= 3;
							max *= 2;
							continueGame = True;
						}
					break;
					}
				
				}
			}
			currentPrize = Math.floor(currentPrize / 2);
			}
			if (!guessAttempts){
				gamePrize = initPrize; //анулюємо приз після 3-го невгадування
			} 
//2.4 + 3.2 	
			if(!continueGame){
				alert('Thank you for a game. Your prize is: ' + gamePrize + '$');//якщо не продовжуємо,то забираємо приз
				game = confirm('Do you want to play again?'); // зіграти знову?
				if(game){
					min = initMin;
					max = initMax;
					maxPrize = initMaxPrize;
					gamePrize = initPrize;
				}else{
					break;
				}
			}
		}
	}

