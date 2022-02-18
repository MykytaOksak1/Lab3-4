const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let todoListItems = []

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  let taskText = "new task"
  let newTask = { taskText: taskText, isDone: false }
  todoListItems.push(newTask)
  localStorage.setItem('todoListItems', todoListItems)
  updateTodoList()
}

function updateTodoList() {
  const lastItem = todoListItems[todoListItems.length - 1]
  let newTask = list.appendChild(document.createElement('li'))
  newTask.classList.add('todo-container', 'flow-right')
  newTask.innerText = lastItem.taskText

  let checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.checked = lastItem.isDone
  checkbox.onclick = () => handleCheckboxClick(lastItem)
  newTask.appendChild(checkbox)
  
  updateItemCount()
  updateUncheckedCount()
}

function updateItemCount() {
  itemCountSpan.innerText = todoListItems.length
}

function handleCheckboxClick(lastItem) {
  lastItem.isDone = !lastItem.isDone
  updateUncheckedCount()
}

function updateUncheckedCount() {
  let uncheckedCount = 0
  todoListItems.forEach(item => {
    if(!item.isDone) uncheckedCount++
  })
  uncheckedCountSpan.innerText = uncheckedCount
}
