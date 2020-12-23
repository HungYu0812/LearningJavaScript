const input = document.getElementById("input");
const num = document.getElementById("show");
const list = document.getElementById("array");



let data = localStorage.getItem("DATA");
let LIST;
if(data){
    LIST = JSON.parse(data);
    loadList(LIST); // load the list to the user interface
}else{
    // if data isn't empty
    LIST = [];
}

function loadList(array){
    array.forEach(function(item){
        addNumber(item);
    });
}

document.addEventListener("keyup", function(even){
    if (event.keyCode == 13){
        const show_number = input.value;
        shownumber(show_number);
        LIST.push(show_number)
        localStorage.setItem("DATA", JSON.stringify(LIST));
        input.value = "";
    }
})
function shownumber(number){
    const item = `${number}`;
    num.innerHTML = item;
    addNumber(number);
}
function clearMemory(){
    localStorage.clear();
    list.innerHTML="";
    objStream.Close();
}


function addNumber(number){
    const item = `<li>
                    <p>${number}</p>
                  </li>`;
    
    const position = "beforeend";
    
    list.insertAdjacentHTML(position, item);
}