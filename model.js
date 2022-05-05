class ToDo {
    static PRIORITY = {
       low: {order: 0, name: 'bassa', color: 'green'},
       medium: {order: 1, name: 'media', color: 'yellow'},
       high: {order: 2, name: 'alta', color: 'orange'},
       veryHigh: {order: 3, name: 'molto alta', color: 'red'}
    }

    // static fromPriorityToString (selectedPriority){
    //     if (selectedPriority === 0) {
    //         return 'bassa';
    //     } else if (selectedPriority === 1){
    //         return 'media'
    //     } else if (selectedPriority === 2) {
    //         return 'alta'
    //     } else {
    //         return 'molto alta'
    //     }
    // }


    constructor(title, priority = ToDo.PRIORITY.low, tags = []){
        this.title = title;
        this.priority = priority;
        this.tags = tags;
        this._creationDate = new Date().getTime();
    }

    get creationDate () {
        const date = new Date (this._creationDate);
        return date;
    }

    set creationDate (date) {
        const timeStamp = this.getTime();
        this._creationDate = timeStamp;
    }
    
    toString(){
    
        const toDoString = 'Nome: ' + this.title + '\n' +
                           'Priorità: ' + this.priority.name + '\n' +
                           'Tag: ' + this.tags + '\n' +
                           'Data di creazione: ' + this.creationDate;
        return toDoString;
      }

}

//////////////////////////////////////////////////////////////////////////////////////

// class MultipleToDo extends ToDo {
//    constructor(title, priority = ToDo.PRIORITY.low, tags = [], subToDo = []){
//        super(title, priority, tags);
//        this.subToDo = subToDo;
//    }


//    toString(){
//         const multipleToDoString =  super.toString() + '\n' +
//                                     'Sotto-Attività: ' + this.subToDo;
//         return multipleToDoString;
//    }
// }

//////////////////////////////////////////////////////////////////////////////////////

class DeadLineToDo extends ToDo{

    constructor(title, deadLineDate, priority = ToDo.PRIORITY.low, tags = []){
        super(title, priority, tags);
        if (deadLineDate === null) {
            this._deadLineDate = this._creationDate + (1000 * 60 * 60 * 24);
            // const tomorrow = new Date(this._creationDate.getTime());
            // tomorrow.setDate.apply(tomorrow.getDate()+1);
            // this._deadLineDate = tomorrow.getTime();
        } else {            
            this._deadLineDate = deadLineDate;
        }
    }

    get deadLineDate () {
        const date = new Date (this._deadLineDate);
        return date;
    }

    set deadLineDate (date) {
        const timeStamp = this.getTime();
        this._deadLineDate = timeStamp;
    }

    toString(){
    
        const toDoString = super.toString() + '\n' +
                           'Data di scadenza: ' + this.deadLineDate;
        return toDoString;
      }
}

