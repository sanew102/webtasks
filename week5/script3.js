function bla(){
	
	var fname = document.getElementById("name").value;//console.log(fname);
	if(fname==""){
		document.getElementById("name").style.border = "2px solid red";
		return;  //kizilga boiaidi namedi pustoi bolsa
	}
	document.getElementById("name").style.border = "";	
	var lname = document.getElementById("surname").value;
	if(lname==""){
		document.getElementById("surname").style.border = "2px solid red";
		return;
	}
	document.getElementById("surname").style.border = "";
	var fac = document.getElementById("faculty").value;
	if(fac==-1){
		return;
	}
	document.getElementById("name").value=""; //pustoi kiladi
	document.getElementById("surname").value="";
	document.getElementById("faculty").value="-1";
	var z = document.createElement('tr');
	var x = document.createElement('td');
	var c = document.createElement('td');
	var v = document.createElement('td');
	x.innerHTML = fname;
	c.innerHTML = lname;
	v.innerHTML = fac;
	z.appendChild(x);z.appendChild(c);z.appendChild(v);
	var table = document.getElementById('students');
	table.appendChild(z); tablega kosu
	}
document.getElementById("addStudent").addEventListener('click',bla);