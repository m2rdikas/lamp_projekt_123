function changeContent(divId){
	setDisplayNone();
	document.getElementById(divId).style.display="inline"
}
function setDisplayNone(){
	document.getElementById('content').style.display="none";
	document.getElementById('candidate').style.display="none";
	document.getElementById('vote').style.display="none";
	document.getElementById('search').style.display="none";
	document.getElementById('lists').style.display="none";
	document.getElementById('realTime').style.display="none";
	document.getElementById('statistics').style.display="none";
}