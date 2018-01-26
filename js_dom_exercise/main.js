/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed 
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.  

*/
var things = [];

document.getElementById("new-thing-button").onclick = getInfo;

function getInfo()
{
	var thing = document.getElementById("new-thing").value;
	//if (thing === "") {
	//	alert("You must type in a value!")
	//}
	//else {
		addToList(thing);
		return false;
	//}
}

function addToList(newThing) {
	var li = document.createElement("li");
	li.className = "fav-thing";
	li.innerHTML = newThing;
	document.getElementById("fav-list").appendChild(li);
	document.getElementById("new-thing").value = "";
	clean();
}

function clean () {
	var child = 0;
	var list = document.getElementById("fav-list");
	for(i = 0; i < list.childNodes.length; i++)
	{
		if(list.childNodes[i].className === "fav-thing") {
			child = i;
			break;
		}
	}
	document.getElementById("fav-list").removeChild(list.childNodes[child]);

	//console.log(list.childNodes[0]);	
}

//window.onload = function() {
	
  // when someone clicks the button...

  // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
//};

/*

Bonus:

When they click submit without typing anything, alert the user 
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/


