const toDo1 = new ToDo ('Fare la spesa', ToDo.PRIORITY.veryHigh, ['casa','spesa']);

const todoList = [toDo1]

writeDocument(todoList)

// toDo1.title = 'Pulire';

// toDo1._creationDate = new Date (2022, 9, 30);

// console.log(toDo1.toString());

//////////////////////////////////////////////////////////////////////////////////////

// const toDo2 = new ToDo ('html', ToDo.PRIORITY.low, ['scuola']);
// const toDo3 = new ToDo ('css', ToDo.PRIORITY.medium, ['scuola']);
// const toDo4 = new ToDo ('javascript', ToDo.PRIORITY.high, ['scuola']);
// const multi = new MultipleToDo('finire il corso', ToDo.PRIORITY.low, ['scuola'], [toDo2, toDo3, toDo4])

//////////////////////////////////////////////////////////////////////////////////////

// const deadLine1 = new DeadLineToDo ('Fare la spesa', new Date (2022, 04, 06), ToDo.PRIORITY.low, ['casa']);

// console.log(deadLine1.toString());