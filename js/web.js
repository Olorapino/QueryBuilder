concepts = 1

function addConcept(){
	
	concepts = concepts +1;
	newConceptId = "c"+ concepts;
	var newConcept = document.createElement("div");
	newConcept.id = newConceptId;
	
	newConcept.innerHTML ='<textarea placeholder="Search term1, search term2 ..." id="t1"></textarea>';
	//<input type="button" value="X" onclick="removeConcept(this)">

	document.getElementById('concepts').appendChild(newConcept);
	document.getElementById(newConceptId).addEventListener('keyup',sendCode);

}

function removeConcept(input){

		document.getElementById('concepts').removeChild(input.parentNode);	
}

window.onload = function(){

	var editor = document.getElementById("t1");
	var output = document.getElementById("output");		
	
	editor.addEventListener('keyup',sendCode);

};

function sendCode(){
	
	output.innerHTML = "";
			
	for(i=1;i<=concepts;i++){
		text = "";
		currentID = "c"+i;
		
		conceptValues = document.getElementById(currentID).childNodes[0].value;
		conceptItemArray = conceptValues.split(",");
		if(document.getElementById('header_simple').checked) {
			text += " ( " //HEADER OF A CONCEPT
		}
		else if(document.getElementById('header_tak1').checked){
			text += " TITLE-ABSTR-KEY ( " //HEADER OF A CONCEPT
		}
		else if(document.getElementById('header_tak2').checked){
			text += " TITLE-ABS-KEY ( " //HEADER OF A CONCEPT
		}
		else if(document.getElementById('header_t').checked){
			text += " TITLE ( " //HEADER OF A CONCEPT
		}

		isEmpty = true;
		conceptItemArray.forEach(function(element, index, array) {

			if(element.length>0){
				isEmpty = false;
				text += "\"" + element.trim() + "\" " ;
				if(index != array.length - 1){
					text += " OR ";
				}

			}	
				
		}, this);
		text = text.replace(/OR\s*$/, "");
		text += " ) "; //END OF A CONCEPT

		if(i!=concepts){
			text += "<br/>AND<br/>";
		}
		if(isEmpty){
			text = "";
		}
		text = text.replace(/AND\s*$/, "");
	output.innerHTML += text;
	}
	

}