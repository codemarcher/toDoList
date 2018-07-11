//cache the elements to use
var button01 = document.querySelector("#add");
var input01 = document.querySelector("#userinput");
var ul = document.querySelector("ul");
var delBut = document.querySelector(".remove");
var li = document.querySelector("li");
var div = document.querySelector("div");
var remove = document.querySelector(".remove")

//make input length to be number
function inputLength() {
	return input01.value.length;
}

//create li with input text; add li to append ul; make input blank
//more on exercise; create div, delBut; add classes in them;
function createListElement() {
	var newli = document.createElement("li");
	var newDelBut = document.createElement("button");
	var div = document.createElement("div");
	div.classList.add("divLi")
	newli.appendChild(document.createTextNode(input01.value));
	newDelBut.appendChild(document.createTextNode("♥"));
	ul.appendChild(div);
	div.appendChild(newDelBut);
	div.appendChild(newli);
	newDelBut.classList.add("remove");
	newli.classList.add("inline");
	input01.value = "";
}

//If input not blank; create li
function addListAfterClick() {
	if (inputLength() > 0){
		createListElement();
	}
}

//If input not blank; press enter to create li
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//toggle done for list
function toggleDone(event) {
	event.target.classList.toggle("done");
}

//remove parent node
function delNode(event) {
	if (event.target.localName === "button")
	event.target.parentNode.remove();
}

//activated click addlist
button01.addEventListener("click", addListAfterClick);

//activated enter addlist
input01.addEventListener("keypress", addListAfterKeypress);

//activated click toggle done
ul.addEventListener("click", toggleDone);

//activated click remove parent
ul.addEventListener("click", delNode);














