
// data to test JSON returns
var data = '[{"a":1,"b":2,"c":3},{"a":4,"b":5,"c":6},{"a":7,"b":8,"c":9}]';

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
	data.forEach(e => console.log(e));
	var tag = document.createElement("li");
	var text = document.createTextNode(JSON.stringify(data));
	tag.appendChild(text);
	var element = document.getElementById("participants");
	element.appendChild(tag);
	addData(data);
}

