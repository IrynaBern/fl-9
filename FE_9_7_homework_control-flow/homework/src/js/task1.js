function checkLogin(login){
	if(login === null || login === ''){
		alert('Canceled.');
	}else{
		if(login.length < 4){
			alert('I don\'t know any users having name length less than 4 symbols');
		}else{
			if(login !== 'User'){
				alert('I don\'t know you');
			}else{
				if(login === 'User'){
					return true;
				}
			}
		}
	}
	return false;
}
function checkPassword(password){
	if(password === null || password === ''){
		alert('Canceled.');
	}else{
		if(password !== 'SuperUser'){
			alert('Wrong password');
		}else{
			if(password === 'SuperUser' && new Date().getHours() < 20){
				alert('Good day!');
			}else{
				alert('Good evening!');
			}
		}
	}
}
let login;
login = prompt('Enter your login: ', '');
if(checkLogin(login)){
	let password;
	password = prompt('Enter your password: ', '');
	checkPassword(password);
}
		