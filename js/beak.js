
// data to test JSON returns
var data = '[{"person":"Teo","Time":45},{"person":"Damien","Time":10},{"person":"Esteban","Time":22}]';

// test function with props
edit.onclick = (event) => {
	event.preventDefault();
	// show the selected index
	alert(event);
};


// test function with onclick
function editForm () {
	alert('edit');
}

// parding data as JSON object 
function addData(data) { 
} 
var data = JSON.parse(data);



// function to replace content in HTML
function fillData() {
	var tag = [];
	data.forEach(
		function newItem(w) {
			tag = document.createElement("li");
			var text = document.createTextNode(w.person);
			tag.appendChild(text);
			var element = document.getElementById("participants");
			element.appendChild(tag);
		}
		);
	
	addData(data);
}

