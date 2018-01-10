var div = document.createElement("DIV");
var div1 = document.createElement("DIV");
var div3 = document.createElement("DIV");
var div4 = document.createElement("DIV");
div3.className = "container";
div1.setAttribute("style", "background-color: coral");
div4.setAttribute("style", "background-color: grey")

div4.className = "jumbotron text-center";
div4.id = "div4";
var h1 = document.createElement("H1");
h1.id = "hid";
h1.appendChild(document.createTextNode("To Do App"));

div4.appendChild(h1);
div3.appendChild(div4);
div1.appendChild(div3);

let div5 = document.createElement("DIV");
div5.className = "container";
var div6 = document.createElement("DIV");
div6.className = "form-group";
var label = document.createElement("LABEL");
label.appendChild(document.createTextNode("What to do?"));
label.setAttribute("style", "color: black;font-size:40px; font-family: Arial")
var input = document.createElement("INPUT");
input.className = "form-control";
input.id = "enter";
div6.appendChild(label);

div6.appendChild(input);
div5.appendChild(div6);
var div2 = document.createElement("DIV");
div2.innerHTML = "<button id=add onclick=addNewElement()>ADD TASK</button>";


div5.appendChild(div2);
div1.appendChild(div5);


div.appendChild(div1);
var ul = document.createElement("UL");
var div7 = document.createElement("DIV");
div7.className = "container";
ul.id = "ul1";
div7.appendChild(ul);
div.appendChild(div7);

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(div);
document.getElementById("add").className = "btn btn-success";

var display = [" "];
var ind = 0;

var addNewElement = () => {
    display[ind] = document.getElementById("enter").value;
    console.log(display[ind]);
    var li = document.createElement("LI");
    li.id = ind;



    li.innerHTML = "<div id=d" + ind + ">" + display[ind] + "</div><div class=container><div class=row><form> <div class=col-sm-4><input type=radio onclick=tododdel(" + ind + ") name=check id=Td" + ind + " checked>To-Do</input></div><div class=col-sm-4><input type=radio onclick=inpddel(" + ind + ") name=check id=Ip" + ind + ">In-Progress</input></div><div class=col-sm-4><input type=radio onclick=dodel(" + ind + ") name=check id=Do" + ind + " style=font:24px>Done</input></div><button style=display:none id=del" + ind + " onclick=deleted(" + ind + ")>Delete TASK</button></div></div></form></div></div></br>"
    ul.appendChild(li);

    document.getElementById("d" + ind).setAttribute("style", "color: blue;font-size:36px; font-family: Times New Roman");

    document.getElementById("del" + ind).className = "btn btn-danger";

    ind++;
}


var tododdel = (ind) => {
    document.getElementById("del" + ind).style.display = "none";
}
var inpddel = (ind) => {
    document.getElementById("del" + ind).style.display = "none";
}
var dodel = (ind) => {
    document.getElementById("del" + ind).style.display = "unset";
}
var deleted = (ind) => {

    document.getElementById(ind).remove();
}

document.getElementById("hid").style.color = "#ffffff";
document.getElementById("div4").style.backgroundColor = "#237BB1";