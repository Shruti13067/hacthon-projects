// JavaScript code
function search() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('animals');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}
function openNav() {
  document.getElementById("mySidenav1").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav1").style.width = "0";
}


function openNav3() {
	document.getElementById("mySidenav3").style.width = "250px";
  }
  
  function closeNav3() {
	document.getElementById("mySidenav3").style.width = "0";
  }
  function openNav2() {
	document.getElementById("mySidenav2").style.width = "250px";
  }
  
  function closeNav2() {
	document.getElementById("mySidenav2").style.width = "0";
  }
  function openNav4() {
	document.getElementById("mySidenav4").style.width = "250px";
  }
  
  function closeNav4() {
	document.getElementById("mySidenav4").style.width = "0";
  }