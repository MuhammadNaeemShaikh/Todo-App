

const addItem = () => {
    var list = document.getElementById("list");

    var todoValue = document.getElementById("todoItem");
    
    // creating li Element
    var li = document.createElement("li");
    var liText = document.createTextNode(todoValue.value);

    li.appendChild(liText);


    // creatig DELete Btn
    var dltBtn = document.createElement("button");
    var dltText = document.createTextNode("DELETE");
    dltBtn.setAttribute("class","btn");
    dltBtn.setAttribute("onClick","dltItem(this)");
    dltBtn.appendChild(dltText);
    li.appendChild(dltBtn);

    // creating Edit Btn
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.setAttribute("class","editBtn");
    editBtn.setAttribute("onClick","editItem(this)");
    editBtn.appendChild(editText);
    li.appendChild(editBtn);




    list.appendChild(li);
    
}

const dltItem = (e) => {
    
    e.parentNode.remove();
}


const editItem = (e) => {

    var val = e.parentNode.firstChild.nodeValue;
    var editVal = prompt("Enter Update Value",val);
    e.parentNode.firstChild.nodeValue = editVal;
}