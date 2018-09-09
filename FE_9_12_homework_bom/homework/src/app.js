const rootNode = document.getElementById('root');
const todoItems = [];
let counter = 0;
let doc = document;
let header;
let messege;
let inputField;
let addNewTaskBtn;
let saveChangeBtn;
let canselBtn;
let todoList;
let listItem;
let blankIcon;
let checkboxIcon;
let removeIcon;
let blankBtn;
let checkboxBtn;
let removeBtn;
let todoItem;
let conteiner;
let wrapper;
const ZERO = 0;

function clearContent(conteiner) {
	let content = document.getElementsByClassName(conteiner)[ZERO];
	if (content) {
		rootNode.removeChild(content);
	}
}

function hashHandler() {
	let hash = window.location.hash;
	addNewTask();
}

function createMainPage(){
	wrapper = doc.createElement('div');
	wrapper.setAttribute('class', 'wrapper');
	header = doc.createElement('header');
	header.innerHTML = '<h1>Simple TODO application</h1>';
	conteiner = doc.createElement('div');
	conteiner.setAttribute('class', 'todo-content');
	addNewTaskBtn = doc.createElement('input');
	addNewTaskBtn.setAttribute('type', 'button');
	addNewTaskBtn.setAttribute('class', 'add-btn');
	addNewTaskBtn.setAttribute('value', 'Add new task');
	messege = doc.createElement('p');
	messege.setAttribute('class', 'msg');
	messege.innerHTML = 'TODO is empty';
	todoList = doc.createElement('ul');
    todoList.setAttribute('class', 'todo-list');	
	conteiner.appendChild(addNewTaskBtn);
	conteiner.appendChild(messege);
	for(let i = 0; i < todoItems.length; i++) {
		addListItem(i);
	}
	if(todoItems.length === ZERO) {
		messege.style.display = 'block';
	} else {
		messege.style.display = 'none';
		conteiner.appendChild(todoList);
	}
	wrapper.appendChild(header);
	wrapper.appendChild(conteiner);
	rootNode.appendChild(wrapper);
	
	addNewTaskBtn.addEventListener('click', () => {
		let hash = window.location.href;
		if(window.location.hash === ''){
			hash += '#/add';
			window.location.href = hash;
		}
		clearContent('wrapper');
		addNewTask();
	});
}

function addNewTask() {
	wrapper = doc.createElement('div');
	wrapper.setAttribute('class', 'wrapper');
	conteiner = doc.createElement('div');
	conteiner.setAttribute('class', 'todo-content');
	header = doc.createElement('header');
	header.innerHTML = '<h1>Add task</h1>';
	inputField = doc.createElement('input');
	inputField.setAttribute('type', 'text');
	inputField.setAttribute('autofocus', 'true');
	canselBtn = doc.createElement('input');
	canselBtn.setAttribute('type', 'button');
	canselBtn.setAttribute('class', 'add-btn');
	canselBtn.setAttribute('value', 'Cansel');
	saveChangeBtn = doc.createElement('input');
	saveChangeBtn.setAttribute('type', 'button');
	saveChangeBtn.setAttribute('class', 'add-btn');
	saveChangeBtn.setAttribute('value', 'Save changed');
	conteiner.appendChild(inputField);
	conteiner.appendChild(canselBtn);
	conteiner.appendChild(saveChangeBtn);
	wrapper.appendChild(header);
	wrapper.appendChild(conteiner);
	rootNode.appendChild(wrapper);
	
	saveChangeBtn.addEventListener('click', () => {
		const text = inputField.value;
		if(text) {
			let item = {isDone: false, id: 12345, description: text};
			todoItems.push(item);
		}
		clearContent('wrapper');
		window.history.back();
		clearContent('wrapper');
		createMainPage(); 
	});
	
	canselBtn.addEventListener('click', () => {
		clearContent('wrapper');
		window.history.back();
		createMainPage();
	});
}

function addListItem(index) {
	checkboxBtn = doc.createElement('button');
	checkboxBtn.className = 'checkbox-item';
	checkboxIcon = doc.createElement('img');
	checkboxIcon.setAttribute('src', './assets/img/todo-s.png');
	checkboxIcon.setAttribute('alt','Blank');
	checkboxBtn.appendChild(checkboxIcon);
	removeBtn = doc.createElement('button');
	removeBtn.setAttribute('class', 'remove-item');
	removeIcon = doc.createElement('img');
	removeIcon.setAttribute('src', './assets/img/remove-s.jpg');
	removeIcon.setAttribute('alt','Done');
	removeBtn.appendChild(removeIcon);
	todoItem = doc.createElement('p');
	todoItem.innerHTML = todoItems[index].description;
	listItem = doc.createElement('li');
	listItem.className = 'list-item';
	listItem.appendChild(checkboxBtn);
	listItem.appendChild(todoItem);
	listItem.appendChild(removeBtn);
	todoList.appendChild(listItem);
  
	checkboxBtn.addEventListener('click', () => {
		checkboxIcon.setAttribute('src', './assets/img/done-s.png');
		checkboxIcon.setAttribute('alt','Checked');
		todoItems[index].isDone = 'true';
	});

	removeBtn.addEventListener('click', () => {
		listItem.remove();
		counter--;
		todoItems.splice(index ,1);
		if(counter <= ZERO) {
			messege.style.display = 'block';
		} else {
			messege.style.display = 'none';
		}
	});
}

createMainPage();