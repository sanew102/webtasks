function image_load() {
  var c = event.currentTarget; //basu
  var x = c.src; //basilgan syrettin imagin alu
  document.getElementById("bigImage").src = x; //ylkendi tenestiru
	
};
document.querySelector("#q").addEventListener('click',image_load);
document.querySelector("#w").addEventListener('click',image_load);
document.querySelector("#e").addEventListener('click',image_load);
document.querySelector("#a").addEventListener('click',image_load);
document.querySelector("#s").addEventListener('click',image_load);