$(document).ready(function(){
	//remove list items on click
	function setHandleClose() {
		for(var j = 0; j < close.length; j++){
			close[j].onclick = function(){
				var div = this.parentElement;
				div.remove();
			}
		}
	}
	
	//close button for each list item
	var myList = document.getElementsByTagName("LI");
	var i;
	for(i = 0; i < myList.length; i++){
		var span = document.createElement("SPAN");
		var txt = document.createTextNode("\u00D7");
		span.className = "close";
		span.appendChild(txt);
		myList[i].appendChild(span);
	}
	
	//close current list item
	var close = document.getElementsByClassName("close");
	setHandleClose();
	
	//toggle selected list item
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
      }
    }, false);
	
	
	//add list item on click
    $(".addBtn").click(function(){
	  var li = document.createElement("li");
	  var inputValue = document.getElementById("myInput").value;
	  var textli = document.createTextNode(inputValue);
	  li.appendChild(textli);
	  if(inputValue === ""){
	    alert("Enter a task!");
	  }
	  else{
	    document.getElementById("myList").appendChild(li);
	  }
	  document.getElementById("myInput").value = "";
	  
	  var span = document.createElement("SPAN");
	  var txt = document.createTextNode("\u00D7");
	  span.className = "close";
	  span.appendChild(txt);
	  li.appendChild(span);
	  
	  setHandleClose();
    });
	
	//enter key event
	$("#myInput").keypress(function(e){
		if(e.which == 13){
			$(".addBtn").click();
		}
	});
});