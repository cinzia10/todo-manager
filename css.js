function writeDocument (array){
    const container = document.getElementById('todo-container')
    for (const element of array) {
      const div = document.createElement('div');
      div.classList.add('todo-object')

      const title = document.createElement('h1');
      const textTitle = document.createTextNode(element.title)
      title.appendChild(textTitle);
      div.appendChild(title);

      for (const tag of element.tags){
        //   const tagDiv = document.createElement('div');
        //   const tagPar = document.createElement('p')
        //   const tagText = document.createTextNode(tag);
        //   tagPar.appendChild(tagText)
        //   tagDiv.appendChild(tagPar);
        //   div.appendChild(tagDiv);
        const tagDiv = document.createElement('h4');
        tagDiv.classList.add("tag")
        const tagText = document.createTextNode(tag);
        tagDiv.appendChild(tagText)
        div.appendChild(tagDiv)
      }

      const date =document.createElement('p')
      const textDate = document.createTextNode(element.creationDate.toDateString());
      date.appendChild(textDate)
      div.appendChild(date)


      if (element.priority === ToDo.PRIORITY.low){
        div.style["background"] = "#3f3f3f";
      } else if (element.priority === ToDo.PRIORITY.medium){
        div.style["background"] = "yellow";
      } else if (element.priority === ToDo.PRIORITY.high) {
        div.style["background"] = "orange";
      } else {
        div.style["background"] = "red";
      }


      container.appendChild(div);
    }
}