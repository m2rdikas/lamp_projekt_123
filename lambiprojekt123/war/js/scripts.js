function changeContent(divId){
	setDisplayNone();
	document.getElementById(divId).style.display="inline"
}
function setDisplayNone(){
	document.getElementById('content1').style.display="none";
	document.getElementById('candidate').style.display="none";
	document.getElementById('vote').style.display="none";
	document.getElementById('search').style.display="none";
	document.getElementById('lists').style.display="none";
	document.getElementById('realTime').style.display="none";
	document.getElementById('statistics').style.display="none";
}
function validateNotEmpty(elemId){
	var elem = document.getElementById(elemId);
	if(document.getElementById(elemId).value == ""){
		document.getElementById(elemId).className="error";
		document.getElementById(elemId + "Label").className="error";
		document.getElementById(elemId + "Error").className="error";
		document.getElementById(elemId + "Error").innerHTML = "Väli on kohustuslik";
		return false;
	} else {
		document.getElementById(elemId).className="";
		document.getElementById(elemId + "Label").className="";
		document.getElementById(elemId + "Error").innerHTML="";
		return true;
	}
}
function setCandidate(){
	var isValid;
	isValid = validateNotEmpty('firstName');
	if(isValid){
		isValid = validateNotEmpty('lastName');
		if(isValid){
			isValid = validateNotEmpty('party');
		} else {
			validateNotEmpty('party');
		}
	} else {
		validateNotEmpty('lastName');
		validateNotEmpty('party');
	}
	if(isValid){
		$.get('/lambiprojekt123', function(data) {
			  $('.result').html(data);
			  alert('Edukalt kandideeritud.');
			});
		$('#firstName').val('');
		$('#lastName').val('');
		$('#party').val('');
	} 
	
}