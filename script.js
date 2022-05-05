class ToDo {
    static PRIORITY = {
       low: 0,
       medium: 1,
       high: 2,
       veryHigh: 3,
    }

    constructor(title, priority = ToDo.PRIORITY.low, tags =[]){
        this.title = title;
        this.priority = priority;
        this._creationDate = new Date().getTime();
        this.tags = tags;
    }

    toString(){
    
        const toDoString = 'Nome: ' + this.title + '\n' +
                           'Priorità: ' + this.priority + '\n' +
                           'Data di creazione: ' + this.creationDate;
        return toDoString;
      }
}

///////////////////////////////////////////////////

class MultipleToDo extends ToDo {
   constructor(title, priority = ToDo.PRIORITY.low, tags =[], subToDo = []){
       super(title, priority, tags);
       this.subToDo = subToDo;
   }


   toStringMulti(){
        const multipleToDoString =  super.toString() + '\n' +
                                    'Sotto-Attività: ' + this.subToDo;
        return multipleToDoString;
   }
}

///////////////////////////////////////////////////

class DeadLineToDo {
    constructor(deadLineDate){
        this.deadLineDate = deadLineDate;
    }
}




const toDo1 = new ToDo ('Fare la spesa', ToDo.PRIORITY.high, ['casa']);


const multi = new MultipleToDo('finire il corso', ToDo.PRIORITY.low, ['scuola'], [toDo2, toDo3, toDo4])
const toDo2 = new ToDo ('html', ToDo.PRIORITY.low, ['scuola']);
const toDo3 = new ToDo ('css', ToDo.PRIORITY.medium, ['scuola']);
const toDo4 = new ToDo ('javascript', ToDo.PRIORITY.high, ['scuola']);

console.log(multi.toString())
