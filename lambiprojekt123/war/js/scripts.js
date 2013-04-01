function changeContent(divId){
	setDisplayNone();
	vaheta = divId.split(":");
	
	
	document.getElementById(vaheta[0]).style.display="inline";
	if(vaheta[0] == "search"){
		$("#search div").hide();
		$("#"+vaheta[1]).show();
		$('.otsivalik[value=' + vaheta[1] + ']').prop('checked', true);
	}
	
	if(vaheta[0] != "content1"){
		window.location.hash = "#" + divId;
	}
	else {
		window.location.hash = ""
	}
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
		document.getElementById(elemId + "Error").innerHTML = "V��li on kohustuslik";
		return false;
	} else {
		document.getElementById(elemId).className="";
		document.getElementById(elemId + "Label").className="";
		document.getElementById(elemId + "Error").innerHTML="";
		return true;
	}
}
function setCandidate(){
	if(validateNotEmpty('firstName') || validateNotEmpty('lastName') || validateNotEmpty('party')){
		$.get('/lambiprojekt123', function(data) {
			  $('.result').html(data);
			  alert('Load was performed.');
			});
	} 
}
