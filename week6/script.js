function first(){	
	var a = event.currentTarget;
	var parent = a.parentNode;
	var child = new Array;
	child = parent.childNodes;
	child[1].style.textDecoration = "line-through";
	
}

var buttons = document.querySelectorAll("button");
for(button of buttons){
	button.addEventListener("click",first);
}

