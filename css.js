function writeDocument (array){

    const container = document.getElementById('todo-container');

    for (const element of array) {

      const div = document.createElement('div');
      div.classList.add('todo-object');

      const title = document.createElement('h1');
      const textTitle = document.createTextNode(element.title);
      title.appendChild(textTitle);
      div.appendChild(title);

      for (const tag of element.tags){
        //   const tagDiv = document.createElement('div');
        //   const tagPar = document.createElement('p')
        //   const tagText = document.createTextNode(tag);
        //   tagPar.appendChild(tagText)
        //   tagDiv.appendChild(tagPar);
        //   div.appendChild(tagDiv);
        const tagDiv = document.createElement('p');
        tagDiv.classList.add("tag");
        const tagText = document.createTextNode(tag);
        tagDiv.appendChild(tagText);
        div.appendChild(tagDiv);
      }

      const date = document.createElement('div');

      const create =document.createElement('p');
      const textCreate = document.createTextNode('Creato: ' + element.creationDate.toDateString());
      create.classList.add("date")
      create.appendChild(textCreate);
      date.appendChild(create)
      div.appendChild(date);

      const expire =document.createElement('p');
      if (element.deadLineDate !== undefined){
        const textExpire = document.createTextNode('Scade il: ' + element.deadLineDate.toDateString());
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