
//kaart
function initializeMap()
{
	var myCenter=new google.maps.LatLng(58.5000,25.0000);
	var ida_viru=new google.maps.LatLng(59.189999, 27.333984);

var mapProp = {
  center:new google.maps.LatLng(58.5000,25.0000),
  zoom:7,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };
var map= new google.maps.Map(document.getElementById("googleMap")
  ,mapProp);

var maakonnad =new Array(
		["harjumaa",""],
		["hiiu",""],
		["ida-viru",""],
		["jogeva",""],
		["jarva",""],
		["laane",""],
		["l-viru",""],
		["polva",""],
		["parnu",""],
		["rapla",""],
		["saare",""],
		["tartu",""],
		["valga",""],
		["viljandi",""],
		["voru",""]
						);


var labelText = maakonnad[2][1].party + " " + maakonnad[2][1].votes + "%";

var myOptions = {
         content: labelText
        ,boxStyle: {
           border: "1px solid black"
          ,textAlign: "center"
          ,fontSize: "12pt"
          ,background: "#FFFFFF"					
         }
        ,disableAutoPan: true
        ,pixelOffset: new google.maps.Size(-25, 0)
        ,position: ida_viru
        ,closeBoxURL: ""
        ,isHidden: false
        ,pane: "mapPane"
        ,enableEventPropagation: true
};

var ibLabel = new InfoBox(myOptions);
ibLabel.open(map);

var labelText = maakonnad[5][1] + " " + maakonnad[5][2] + "%";

var myOptions = {
         content: labelText
        ,boxStyle: {
           border: "1px solid black"
          ,textAlign: "center"
          ,fontSize: "12pt"
          ,background: "#FFFFFF"					
         }
        ,disableAutoPan: true
        ,pixelOffset: new google.maps.Size(-25, 0)
        ,position: new google.maps.LatLng(59.237796, 26.356201)
        ,closeBoxURL: ""
        ,isHidden: false
        ,pane: "mapPane"
        ,enableEventPropagation: true
};

var ibLabel = new InfoBox(myOptions);
ibLabel.open(map);

var ibLabel = new InfoBox(myOptions);
ibLabel.open(map);

var labelText = maakonnad[0][1] + " " + maakonnad[0][2] + "%";

var myOptions = {
         content: labelText
        ,boxStyle: {
           border: "1px solid black"
          ,textAlign: "center"
          ,fontSize: "12pt"
          ,background: "#FFFFFF"					
         }
        ,disableAutoPan: true
        ,pixelOffset: new google.maps.Size(-25, 0)
        ,position: new google.maps.LatLng(59.414343, 24.966431)
        ,closeBoxURL: ""
        ,isHidden: false
        ,pane: "mapPane"
        ,enableEventPropagation: true
};

var ibLabel = new InfoBox(myOptions);
ibLabel.open(map);


var labelText = maakonnad[1][1] + " " + maakonnad[1][2] + "%";

var myOptions = {
         content: labelText
        ,boxStyle: {
           border: "1px solid black"
          ,textAlign: "center"
          ,fontSize: "12pt"
          ,background: "#FFFFFF"					
         }
        ,disableAutoPan: true
        ,pixelOffset: new google.maps.Size(-25, 0)
        ,position: new google.maps.LatLng(58.955674, 22.489014)
        ,closeBoxURL: ""
        ,isHidden: false
        ,pane: "mapPane"
        ,enableEventPropagation: true
};

var ibLabel = new InfoBox(myOptions);
ibLabel.open(map);

var labelText = maakonnad[10][1] + " " + maakonnad[10][2] + "%";

var myOptions = {
         content: labelText
        ,boxStyle: {
           border: "1px solid black"
          ,textAlign: "center"
          ,fontSize: "12pt"
          ,background: "#FFFFFF"					
         }
        ,disableAutoPan: true
        ,pixelOffset: new google.maps.Size(-25, 0)
        ,position: new google.maps.LatLng(58.539595, 22.379150)
        ,closeBoxURL: ""
        ,isHidden: false
        ,pane: "mapPane"
        ,enableEventPropagation: true
};

var ibLabel = new InfoBox(myOptions);
ibLabel.open(map);

var labelText = maakonnad[5][1] + " " + maakonnad[5][2] + "%";

var myOptions = {
         content: labelText
        ,boxStyle: {
           border: "1px solid black"
          ,textAlign: "center"
          ,fontSize: "12pt"
          ,background: "#FFFFFF"					
         }
        ,disableAutoPan: true
        ,pixelOffset: new google.maps.Size(-25, 0)
        ,position: new google.maps.LatLng(59.060330, 23.411865)
        ,closeBoxURL: ""
        ,isHidden: false
        ,pane: "mapPane"
        ,enableEventPropagation: true
};

var ibLabel = new InfoBox(myOptions);
ibLabel.open(map);

var labelText = maakonnad[9][1] + " " + maakonnad[9][2] + "%";

var myOptions = {
         content: labelText
        ,boxStyle: {
           border: "1px solid black"
          ,textAlign: "center"
          ,fontSize: "12pt"
          
          ,background: "#FFFFFF"					
         }
        ,disableAutoPan: true
        ,pixelOffset: new google.maps.Size(-25, 0)
        ,position: new google.maps.LatLng(59.065978, 24.570923)
        ,closeBoxURL: ""
        ,isHidden: false
        ,pane: "mapPane"
        ,enableEventPropagation: true
};

var ibLabel = new InfoBox(myOptions);
ibLabel.open(map);


var labelText = maakonnad[8][1] + " " + maakonnad[8][2] + "%";

var myOptions = {
         content: labelText
        ,boxStyle: {
           border: "1px solid black"
          ,textAlign: "center"
          ,fontSize: "12pt"
          
          ,background: "#FFFFFF"					
         }
        ,disableAutoPan: true
        ,pixelOffset: new google.maps.Size(-25, 0)
        ,position: new google.maps.LatLng(58.576845, 23.950195)
        ,closeBoxURL: ""
        ,isHidden: false
        ,pane: "mapPane"
        ,enableEventPropagation: true
};

var ibLabel = new InfoBox(myOptions);
ibLabel.open(map);

var labelText = maakonnad[13][1] + " " + maakonnad[13][2] + "%";

var myOptions = {
         content: labelText
        ,boxStyle: {
           border: "1px solid black"
          ,textAlign: "center"
          ,fontSize: "12pt"
          
          ,background: "#FFFFFF"					
         }
        ,disableAutoPan: true
        ,pixelOffset: new google.maps.Size(-25, 0)
        ,position: new google.maps.LatLng(58.513783, 25.565186)
        ,closeBoxURL: ""
        ,isHidden: false
        ,pane: "mapPane"
        ,enableEventPropagation: true
};

var ibLabel = new InfoBox(myOptions);
ibLabel.open(map);

var labelText = maakonnad[4][1] + " " + maakonnad[4][2] + "%";

var myOptions = {
         content: labelText
        ,boxStyle: {
           border: "1px solid black"
          ,textAlign: "center"
          ,fontSize: "12pt"
          
          ,background: "#FFFFFF"					
         }
        ,disableAutoPan: true
        ,pixelOffset: new google.maps.Size(-25, 0)
        ,position: new google.maps.LatLng(58.995311, 25.543213)
        ,closeBoxURL: ""
        ,isHidden: false
        ,pane: "mapPane"
        ,enableEventPropagation: true
};

var ibLabel = new InfoBox(myOptions);
ibLabel.open(map);

var labelText = maakonnad[11][1] + " " + maakonnad[11][2] + "%";

var myOptions = {
         content: labelText
        ,boxStyle: {
           border: "1px solid black"
          ,textAlign: "center"
          ,fontSize: "12pt"
          
          ,background: "#FFFFFF"					
         }
        ,disableAutoPan: true
        ,pixelOffset: new google.maps.Size(-25, 0)
        ,position: new google.maps.LatLng(58.476465, 26.740723)
        ,closeBoxURL: ""
        ,isHidden: false
        ,pane: "mapPane"
        ,enableEventPropagation: true
};

var ibLabel = new InfoBox(myOptions);
ibLabel.open(map);


var labelText = maakonnad[7][1] + " " + maakonnad[7][2] + "%";

var myOptions = {
         content: labelText
        ,boxStyle: {
           border: "1px solid black"
          ,textAlign: "center"
          ,fontSize: "12pt"
          
          ,background: "#FFFFFF"					
         }
        ,disableAutoPan: true
        ,pixelOffset: new google.maps.Size(-25, 0)
        ,position: new google.maps.LatLng(58.130121, 27.136230)
        ,closeBoxURL: ""
        ,isHidden: false
        ,pane: "mapPane"
        ,enableEventPropagation: true
};

var ibLabel = new InfoBox(myOptions);
ibLabel.open(map);

var labelText = maakonnad[14][1] + " " + maakonnad[14][2] + "%";

var myOptions = {
         content: labelText
        ,boxStyle: {
           border: "1px solid black"
          ,textAlign: "center"
          ,fontSize: "12pt"
          
          ,background: "#FFFFFF"					
         }
        ,disableAutoPan: true
        ,pixelOffset: new google.maps.Size(-25, 0)
        ,position: new google.maps.LatLng(57.862288, 26.674805)
        ,closeBoxURL: ""
        ,isHidden: false
        ,pane: "mapPane"
        ,enableEventPropagation: true
};

var ibLabel = new InfoBox(myOptions);
ibLabel.open(map);

var labelText = maakonnad[12][1] + " " + maakonnad[12][2] + "%";

var myOptions = {
         content: labelText
        ,boxStyle: {
           border: "1px solid black"
          ,textAlign: "center"
          ,fontSize: "12pt"
          
          ,background: "#FFFFFF"					
         }
        ,disableAutoPan: true
        ,pixelOffset: new google.maps.Size(-25, 0)
        ,position: new google.maps.LatLng(58.054632, 26.015625)
        ,closeBoxURL: ""
        ,isHidden: false
        ,pane: "mapPane"
        ,enableEventPropagation: true
};

var ibLabel = new InfoBox(myOptions);
ibLabel.open(map);


var labelText = maakonnad[3][1] + " " + maakonnad[3][2] + "%";

var myOptions = {
         content: labelText
        ,boxStyle: {
           border: "1px solid black"
          ,textAlign: "center"
          ,fontSize: "12pt"
          
          ,background: "#FFFFFF"					
         }
        ,disableAutoPan: true
        ,pixelOffset: new google.maps.Size(-25, 0)
        ,position: new google.maps.LatLng(58.802362, 26.312256)
        ,closeBoxURL: ""
        ,isHidden: false
        ,pane: "mapPane"
        ,enableEventPropagation: true
};

var ibLabel = new InfoBox(myOptions);
ibLabel.open(map);
}


google.maps.event.addDomListener(window, 'load', initializeMap);

//kaart end
function getEverything() {
	$.post('/lambiprojekt123?query=geteverything', function(data) {
		console.log(data[1]);
		});
}
function changeContent(divId){
	setDisplayNone();
	vaheta = divId.split(":");
	
	if(vaheta[0] != "_=_" ){
	document.getElementById(vaheta[0]).style.display="inline";
	if(vaheta[0] == "map"){
		
	}
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
}
function setDisplayNone(){
	document.getElementById('content1').style.display="none";
	document.getElementById('candidate').style.display="none";
	document.getElementById('vote').style.display="none";
	document.getElementById('search').style.display="none";
	document.getElementById('lists').style.display="none";
	document.getElementById('realTime').style.display="none";
	document.getElementById('statistics').style.display="none";
	document.getElementById('map').style.display="none";
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
		$.get('/lambiprojekt123?operation=updatedb&firstName='+document.getElementById('firstName').value+'&lastName='+document.getElementById('lastName').value+'&county='+document.getElementById('countySelect').value+'&party='+document.getElementById('party').value, function(data) {
			  $('.result').html(data);
			  alert('Edukalt kandideeritud.');
			});
		$('#firstName').val('');
		$('#lastName').val('');
		$('#party').val('');
	} 	
}
