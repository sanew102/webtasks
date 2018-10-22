/*let cities = ["almaty", "AStana", "karagandy"]
function changeFN(){
	let selectedvalue = event.curretnTarget.value;
	document.querySelector('#text').textContent = selectedvalue;
}
function clickFn(){
	for (let city of cities){
		let cutyitem = document.createElement("option");
		cutyitem.textContent= city;
		document.querySelector("select").appendChild(cutyitem);
	}
}
document.querySelector("select").addEventListener("change",changeFN);
document.querySelector("button").addEventListener("click",clickFn); */

let countries = ["Kazakhstan","Russia","England","France"];
let cities = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};



function clickFn(){
	var selec = document.querySelector("#countries");
	selec.innerHTML="";
	for(let country of countries){
		let countryitem = document.createElement("option");
		countryitem.textContent = country;
		document.querySelector("select").appendChild(countryitem);
	}
	selec.removeEventListener("click",clickFn);
	
}

function changeFn(){
	var s = document.querySelector("#countries").value;
	var sel =  document.querySelector("#cities");
	sel.innerHTML = s[1];
	
	let citiesOfCoun = cities[s];
	for(let city of citiesOfCoun){
		let cityitem = document.createElement("option");
		cityitem.textContent = city;
		document.querySelector("#cities").appendChild(cityitem);
	}
	
	sel.removeEventListener("click",changeFn);

}

document.querySelector("#countries").addEventListener("click",clickFn);
document.querySelector("#countries").addEventListener("click",changeFn);




