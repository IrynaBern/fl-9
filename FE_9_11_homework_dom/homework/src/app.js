let rootNode = document.getElementById('root');
const MAX = 10;
let counter = 0;
let doc = document;
let header;
let messege;
let formSection;
let inputField;
let addButton;
let todoList;
let listItem;
let footer;
let immige;
header = doc.createElement('header');
header.innerHTML = '<h1>TODO Cat List</h1>';
header.setAttribute('class', 'todo-header');
messege = doc.createElement('p');
messege.setAttribute('class', 'max-msg');
messege.innerHTML = 'Maximum item per list are created';
header.appendChild(messege);
formSection = doc.createElement('div');
formSection.setAttribute('class', 'todo-add');
inputField = doc.createElement('input');
inputField.setAttribute('class', 'add-input');
inputField.setAttribute('type', 'text');
inputField.setAttribute('name', 'inputField');
inputField.setAttribute('placeholder', 'Add New Action');
inputField.setAttribute('autofocus', 'true');
addButton = doc.createElement('button');
addButton.setAttribute('class', 'add-btn');
addButton.setAttribute('disabled', 'true');
addButton.innerHTML = '<i class="material-icons">add_box</i>';
todoList = doc.createElement('ul');
todoList.setAttribute('class', 'todo-list');
footer = doc.createElement('footer');
footer.setAttribute('class', 'todo-footer');
immige = doc.createElement('img');
immige.setAttribute('class', 'todo-img');
immige.setAttribute('src', 'assets/img/cat.png');
immige.setAttribute('alt', 'Todo-cat');
footer.appendChild(immige);
formSection.appendChild(inputField);
formSection.appendChild(addButton);
rootNode.appendChild(header);
rootNode.appendChild(formSection);
rootNode.appendChild(todoList);
rootNode.appendChild(footer);
	
inputField.addEventListener('change', event => {
  const text = inputField.value;
  addButton.disabled = !text;
  if (event.code === 'Enter' && text) {
    addListItem(text);
  }
});

inputField.addEventListener('keyup', event => {
  const text = inputField.value;
  addButton.disabled = !text;
  if (event.code === 'Enter' && text) {
    addListItem(text);
  }
});

addButton.addEventListener('click', () => {
  addListItem(inputField.value.trim());
});

function addListItem(labelText) {
  const checkIcon = doc.createElement('i');
  checkIcon.className = 'material-icons';
  checkIcon.innerHTML = 'check_box_outline_blank';
  const deleteIcon = doc.createElement('i');
  deleteIcon.className = 'material-icons';
  deleteIcon.innerHTML = 'delete';
  const label = doc.createElement('span');
  label.innerHTML = labelText;
  const checkboxBtn = doc.createElement('button');
  checkboxBtn.className = 'checkbox-item';
  const deleteBtn = doc.createElement('button');
  deleteBtn.className = 'remove-item';
  const listItem = doc.createElement('li');
  listItem.className = 'list-item';
  listItem.setAttribute('draggable', 'true');
  checkboxBtn.appendChild(checkIcon);
  checkboxBtn.appendChild(label);
  deleteBtn.appendChild(deleteIcon);
  listItem.appendChild(checkboxBtn);
  listItem.appendChild(deleteBtn);
  todoList.appendChild(listItem);
  
  checkboxBtn.addEventListener('click', () => {
    checkIcon.textContent = 'check_box';
  });

  deleteBtn.addEventListener('click', () => {
    listItem.remove();
    counter--;
    inputField.disabled = false;
    messege.style.display = 'none';
  });

  if (++counter >= MAX) {
    inputField.disabled = true;
    messege.style.display = 'block';
  }
  inputField.value = '';
  addButton.disabled = true;
}

