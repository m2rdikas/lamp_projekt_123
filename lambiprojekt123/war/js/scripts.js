
//kaart
function initializeMap()
{




//var maakonnad =new Array(
//		["Harju maakond","0"],
//		["hiiu","0"],
//		["ida-viru",""],
//		["jogeva",""],
//		["jarva",""],
//		["laane",""],
//		["l-viru",""],
//		["polva",""],
//		["parnu",""],
//		["Rapla maakond",""],
//		["saare",""],
//		["tartu",""],
//		["valga",""],
//		["viljandi",""],
//		["voru",""]
//						);

//var maakonnad = new Array(new Array());

$.post('/lambiprojekt123?query=getmapData', function(data) {
	var myCenter=new google.maps.LatLng(58.5000,25.0000);
	var ida_viru=new google.maps.LatLng(59.189999, 27.333984);

var mapProp = {
  center:new google.maps.LatLng(58.5000,25.0000),
  zoom:7,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };
var map= new google.maps.Map(document.getElementById("googleMap")
  ,mapProp);

	var maakonnad = {
			"Harju maakond": {"party":"","votes": 0},
			"Hiiu maakond":{"party":"","votes": 0},
			"Ida-Viru maakond":{"party":"","votes": 0},
			"Hiiu maakond":{"party":"","votes": 0},
			"Järva maakond":{"party":"","votes": 0},
			"Lääne maakond":{"party":"","votes": 0},
			"Lääne-Viru maakond":{"party":"","votes": 0},
			"Põlva maakond":{"party":"","votes": 0},
			"Pärnu maakond":{"party":"","votes": 0},
			"Rapla maakond":{"party":"","votes": 0},
			"Saare maakond":{"party":"","votes": 0},
			"Tartu maakond":{"party":"","votes": 0},
			"Valga maakond":{"party":"","votes": 0},
			"Viljandi maakond":{"party":"","votes": 0},
			"Võru maakond":{"party":"","votes": 0},
			"KOKKU": 0
			};
	for(var i=0;i<data.length;i++){
		if(data[i]){
			maakonnad["KOKKU"] += parseInt(data[i].votes);
			maakonnad[data[i].county] = {"party": data[i].party ,"votes": parseInt(data[i].votes)};
		}
		
	}
	console.log(maakonnad);
	var labelText = maakonnad["Ida-Viru maakond"].party + "</br>" + Math.round(maakonnad["Ida-Viru maakond"].votes/maakonnad["KOKKU"]*100*10)/10 + "%";

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

	var labelText = maakonnad["Lääne-Viru maakond"].party + "</br>" + Math.round(maakonnad["Lääne-Viru maakond"].votes/maakonnad["KOKKU"]*100*10)/10 + "%";

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


	var labelText = maakonnad["Harju maakond"].party + "</br>" + Math.round(maakonnad["Harju maakond"].votes/maakonnad["KOKKU"]*100*10)/10 + "%";

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

	
	var labelText = maakonnad["Hiiu maakond"].party + "</br>" + Math.round(maakonnad["Hiiu maakond"].votes/maakonnad["KOKKU"]*100*10)/10 + "%";

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
	
	var labelText = maakonnad["Saare maakond"].party + "</br>" + Math.round(maakonnad["Saare maakond"].votes/maakonnad["KOKKU"]*100*10)/10 + "%";

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
	
	var labelText = maakonnad["Lääne maakond"].party + "</br>" + Math.round(maakonnad["Lääne maakond"].votes/maakonnad["KOKKU"]*100*10)/10 + "%";

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

	var labelText = maakonnad["Rapla maakond"].party + "</br>" + Math.round(maakonnad["Rapla maakond"].votes/maakonnad["KOKKU"]*100*10)/10 + "%";

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

	
	var labelText = maakonnad["Pärnu maakond"].party + "</br>" + Math.round(maakonnad["Pärnu maakond"].votes/maakonnad["KOKKU"]*100*10)/10 + "%";

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

	var labelText = maakonnad["Viljandi maakond"].party + "</br>" + Math.round(maakonnad["Viljandi maakond"].votes/maakonnad["KOKKU"]*100*10)/10 + "%";

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

	var labelText = maakonnad["Järva maakond"].party + "</br>" + Math.round(maakonnad["Järva maakond"].votes/maakonnad["KOKKU"]*100*10)/10 + "%";

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

	var labelText = maakonnad["Tartu maakond"].party + "</br>" + Math.round(maakonnad["Tartu maakond"].votes/maakonnad["KOKKU"]*100*10)/10 + "%";

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


	var labelText = maakonnad["Põlva maakond"].party + "</br>" + Math.round(maakonnad["Põlva maakond"].votes/maakonnad["KOKKU"]*100*10)/10 + "%";

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

	var labelText = maakonnad["Võru maakond"].party + "</br>" + Math.round(maakonnad["Võru maakond"].votes/maakonnad["KOKKU"]*100*10)/10 + "%";

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

	var labelText = maakonnad["Valga maakond"].party + "</br>" + Math.round(maakonnad["Valga maakond"].votes/maakonnad["KOKKU"]*100*10)/10 + "%";

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


	var labelText = maakonnad["Järva maakond"].party + "</br>" + Math.round(maakonnad["Järva maakond"].votes/maakonnad["KOKKU"]*100*10)/10 + "%";

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
});




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
