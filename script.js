const task1 = new ToDo('compra il tabacco', ToDo.PRIORITY.veryHigh, ['droga']);
const task2 = new ToDo('compra il pane', ToDo.PRIORITY.medium, ['spesa', 'casa']);
const task3 = new DeadLineToDo('fai gli auguri alla nonna', new Date(2022, 6, 9), ToDo.PRIORITY.low, ['affetti']);
const task4 = new DeadLineToDo('chiama pietro');

let toDoList = [task1, task2, task3, task4];

const doneList = [];


function writeActiveList (){

    const container = document.getElementById('todo-container');

    container.innerHTML = "";

    for (const element of toDoList) {

      const div = document.createElement('div');
      div.classList.add('todo-object');

      const title = document.createElement('p');
      title.classList.add('todo-title')
      const textTitle = document.createTextNode(element.title);
      title.appendChild(textTitle);
      div.appendChild(title);

      const button = document.createElement('button');
      const textButton = document.createTextNode('Done');
      button.appendChild(textButton);
      button.onclick = () => removeDoneToDo(element);
      div.appendChild(button);

      for (const tag of element.tags){
        const tagDiv = document.createElement('p');
        tagDiv.classList.add("tag");
        const tagText = document.createTextNode(tag);
        tagDiv.appendChild(tagText);
        div.appendChild(tagDiv);
      }

      const date = document.createElement('div');

      const create = document.createElement('p');
      const textCreate = document.createTextNode('Da: ' + element.creationDate.toDateString());
      create.classList.add("date")
      create.appendChild(textCreate);
      date.appendChild(create)
      div.appendChild(date);

      const expire = document.createElement('p');
      if (element.deadLineDate){
        const textExpire = document.createTextNode('A: ' + element.deadLineDate.toDateString());
        expire.classList.add("exp-date")
        expire.appendChild(textExpire);
        date.appendChild(expire)
        div.appendChild(date);
  
      }

      if (element.priority === ToDo.PRIORITY.low){
        div.style["background"] = "#b5e48c";
      } else if (element.priority === ToDo.PRIORITY.medium){
        div.style["background"] = "#e9c46a";
      } else if (element.priority === ToDo.PRIORITY.high) {
        div.style["background"] = "#ff9500";
      } else {
        div.style["background"] = "#ff392e";
      }


      container.appendChild(div);
    }
}

function writeDoneList (){

    const container = document.getElementById('done-container');

    container.innerHTML = "";

    for (const element of doneList) {

      const div = document.createElement('div');
      div.classList.add('todo-object');

      const title = document.createElement('p');
      title.classList.add('todo-title')
      const textTitle = document.createTextNode(element.title);
      title.appendChild(textTitle);
      div.appendChild(title);

      for (const tag of element.tags){
        const tagDiv = document.createElement('p');
        tagDiv.classList.add("tag");
        const tagText = document.createTextNode(tag);
        tagDiv.appendChild(tagText);
        div.appendChild(tagDiv);
      }

      const date = document.createElement('div');

      const create = document.createElement('p');
      const textCreate = document.createTextNode('Da: ' + element.creationDate.toDateString());
      create.classList.add("date")
      create.appendChild(textCreate);
      date.appendChild(create)
      div.appendChild(date);

      container.appendChild(div);
    }
}

writeActiveList();



function removeDoneToDo(element){
    toDoList = toDoList.filter(e => e.title !== element.title);
    writeActiveList();
    doneList.push(element);
    writeDoneList();
}

/// COMPARARE IL NOME

function orderByName() {
    toDoList.sort(compareByName);
    writeActiveList();
    doneList.sort(compareByName);
    writeDoneList();

}

function compareByName (el1, el2){
    return el1.title.localeCompare(el2.title);
}


/// COMPARARE LA DATA DI CREAZIONE

function orderByDate() {
    toDoList.sort(compareByDate);
    writeActiveList();
    doneList.sort(compareByDate);
    writeDoneList();
}

function compareByDate(el1, el2) {
    return el1.creationDate.getTime()-el2.creationDate.getTime();
}

const dateButton = document.getElementById('date-order-btn');
dateButton.onclick = orderByDate;  // CON ONCLICK E' POSSIBILE AGGIUNGERE UN SOLO EVENTO


/// COMPARARE LA PRIORITA'
function orderByPriority() {
    toDoList.sort(compareByPriority);
    writeActiveList();
    doneList.sort(compareByPriority);
    writeDoneList();
}

function compareByPriority (el1, el2){
    return el2.priority.order-el1.priority.order
}

function logToConsole(event) {
    console.log(event)
}



const priorityButton = document.getElementById('priority-order-btn');
priorityButton.addEventListener('click', orderByPriority); // CON ADDEVENTLISTENER E' POSSIBILE INSERIRE PIU' EVENTI
priorityButton.addEventListener('click', logToConsole);
priorityButton.addEventListener('mouseenter', () => changeButtonColor(priorityButton)); /// IN QUESTO MODO IL COLORE DEL BUTTON CAMBIA QUANDO CI SI PASSA SOPRA CON IL MOUSE
priorityButton.addEventListener('mouseleave', /*() => removeButtonColor(priorityButton)*/ removeButtonColor); /// IN QUESTO MODO IL COLORE DEL BUTTON VIENE RIMOSSO QUANDO CI SI PASSA SOPRA CON IL MOUSE

function changeButtonColor(button) {
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
}

function removeButtonColor(event) {
    // button.style.backgroundColor = null;
    // button.style.color = '';
    event.target.style.backgroundColor= '';
    event.target.style.color= '';
}































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