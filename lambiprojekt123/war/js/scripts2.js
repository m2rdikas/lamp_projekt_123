function showStatistics() {
	$("#statisticsContent").empty();
	$.post('/lambiprojekt123?query=geteverything', function(data) {
		console.log(data);
		var andmed =new Array();
		var haaliKokku = 0;
		for(var i=0;i<data.length;i++){
			haaliKokku = haaliKokku + parseInt(data[i].votes);
			andmed[i] = [data[i].votes,data[i].party];
		}
		
		$('#statisticsContent').jqbargraph({
		  	 data: andmed,
		   colors: ['#FFFF00','#FF0000','#FF00FF'],
		   legend: true,
		   animate: false
		});
	});

}
function onOpened() {
    //alert("Channel opened!");
}

function onMessage(msg) {
    //alert(msg.data);
	showStatistics();
	
}

function onError(err) {
    //alert(err);
}

function onClose() {
    //alert("Channel closed!");
}

function addVote(id){
	$.get('/lambiprojekt123?operation=addvote&candidateID='+id, function(data) {
		showVoteContent();
		});
}
function removeVote(id){
	$.get('/lambiprojekt123?operation=removevote&candidateID='+id, function(data) {
		showVoteContent();
		});
}
function showVoteContent(){
	$.post('/lambiprojekt123?query=geteverything', function(data) {
		  console.log(data);
		  var html = "<h1>...</h1>" +
		  	"<table>" +
	  			"<tr>" +
	  				"<th>id</th>" +
	  				"<th>Nimi</th>" +
	  				"<th>Partei</th>" +
	  				"<th>Piirkond</th>" +
	  				"<th>Häälte arv</th>" +
	  				"<th></th>"
	  			"</tr>";
		  
		  for(var i = 0; i<data.length;i++){
				html += "<tr>" +
    			"<td>" + data[i].candidateId + "</td>" +
    			"<td>" + data[i].firstName + ", " + data[i].lastName + "</td>" +
    			"<td>" + data[i].party + "</td>" +
    			"<td>" + data[i].county + "</td>" +
    			"<td>" + data[i].votes + "</td>" +
    			"<td><span onclick=addVote("+data[i].candidateId+");>+</span>  " +
    			"<span onclick=removeVote("+data[i].candidateId+");>-</span></td>" +
    			"</tr>";
		  }
		  html += "</table>";
		  $("#voteContent").html(html);
		  
		});
	$.get('/channel?operation=msg', function(data) {
		
	});
}
function ChangeContentToHash () {
	if(window.location.hash) {
		//alert(typeof window.location.hash.replace('#',''));
//		vaheta = window.location.hash.replace('#','').split(":");
		changeContent(window.location.hash.replace("#",""));
//			if(vaheta[0] == "search") {
//				$("#search div").hide();
//				$("#"+vaheta[1]).show();
//			}
		} else {
		  //alert("ei ole hashi");
		}
}
function updateSearch (that, tulemus) {
		try {
		var currentId = $(that).parent().attr('id');
		}
		catch (Exception) {
			var currentId = that;
		}
		//alert(currentId);
		
		
//		if(currentId == "byCanditate"){
//			var jsonUrl = "candidate.json";
//		}
//		else if (currentId == "byRegion"){
//			var jsonUrl = "findCandidatesByRegion.json";
//			
//		}
//		else if (currentId == "byParty"){
//			var jsonUrl = "findCandidatesByParty.json";
//			
//		}
//		else if(currentId == "byPartyAndRegion"){
//			var jsonUrl = "findCandidatesByPartyAndRegion.json";
//		}
//		else {
//			alert("VIGA!");
//			}
		
		//alert(json);
		
		data = tulemus;
//			  console.log(data);
//			  alert(currentId);
			  var html = "<h1>Tulemus</h1>" +
				  	"<table>" +
			  			"<tr>" +
			  				"<th>id</th>" +
			  				"<th>Nimi</th>" +
			  				"<th>Partei</th>" +
			  				"<th>Piirkond</th>" +
			  			"</tr>"; 
			  for (var i = 0; i < data.length;i++) {
					html += "<tr onclick=\"displayInfo(this);\">" +
		    			"<td>" + data[i].id + "</td>" +
		    			"<td>" + data[i].firstName + ", " + data[i].lastName + "</td>" +
		    			"<td>" + data[i].party + "</td>" +
		    			"<td>" + data[i].county + "</td>" +
		    		"</tr>";
					  
				  }
				  html += "</table>";
			  			
//			 console.log(data);
			  
//			  if(currentId == "byCanditate"){ 
//			    html += "<tr onclick=\"displayInfo(this);\">" +
//			    			"<td>" + data.id + "</td>" +
//			    			"<td>" + data.person.name + "</td>" +
//			    			"<td>" + data.party.name + "</td>" +
//			    			"<td>" + data.region.name + "</td>" +
//			    		"</tr>" +
//			    	"</table>";
//			  }
//			  else if (currentId == "byRegion" ){
////				  console.log(data.candidates);
//				  for (var i = 0; i < data.candidates.length;i++) {
//					html += "<tr onclick=\"displayInfo(this);\">" +
//		    			"<td>" + data.candidates[i].id + "</td>" +
//		    			"<td>" + data.candidates[i].person.name + "</td>" +
//		    			"<td>" + data.candidates[i].party.name + "</td>" +
//		    			"<td>" + "PIIRKOND" + "</td>" +
//		    		"</tr>";
//					  
//				  }
//				  html += "</table>";
//			  }
//			  else if (currentId == "byParty" ){
//				  //console.log(data.candidates);
//				  alert("SIIN");
//				  for (var i = 0; i < data.length;i++) {
//					html += "<tr onclick=\"displayInfo(this);\">" +
//		    			"<td>" + data[i].id + "</td>" +
//		    			"<td>" + data[i].firstName + ", " + data[i].lastName + "</td>" +
//		    			"<td>" + data[i].party + "</td>" +
//		    			"<td>" + data[i].county + "</td>" +
//		    		"</tr>";
//					  
//				  }
//				  html += "</table>";
//			  }
//			  else if (currentId == "byPartyAndRegion") {
////				  console.log(data.candidates);
//				  for (var i = 0; i < data.candidates.length;i++) {
//					html += "<tr onclick=\"displayInfo(this);\">" +
//		    			"<td>" + data.candidates[i].id + "</td>" +
//		    			"<td>" + data.candidates[i].person.name + "</td>" +
//		    			"<td>" + "PARTEII" + "</td>" +
//		    			"<td>" + "PIIRKOND" +"</td>" +
//		    		"</tr>";
//					  
//				  }
//				  html += "</table>";
//				  
//			  }
			  	html += "<div id=\"canditateInfo\"></div>";
//			 console.log(html);
			    $("#searchResults").show();
			    
			    $("#searchResults").html(html);
			    $("#canditateInfo").hide();
			
	}
function displayInfo(that) {
		var infoInside = "<h1>Info</h1><hr>";
		$(that).children().each(function () {
			infoInside += "<p>" + $(this).html() + "</p>";
		});
//		console.log(infoInside);
		$("#canditateInfo").html(infoInside);
		$("#canditateInfo").show();
	
}

$(document).ready(function (){
	$("#statisticsButton").click(function(){
		showStatistics();
	});
	$.get('/channel?operation=gettoken', function(token) {
	    channel = new goog.appengine.Channel(token);
	    socket = channel.open();
	    socket.onopen = onOpened;
	    socket.onmessage = onMessage;
	    socket.onerror = onError;
	    socket.onclose = onClose;
		});
	$("#voteButton").click(function(){
		showVoteContent();
	});
	$("#searchButton").click(function(){
		$.post('/lambiprojekt123?query=geteverything', function(data) {
			  var nimed = new Array(data.length);
			  for (var i = 0; i < data.length;i++) {
				  
				  nimed[i] = data[i].firstName;
		
				  }
			  console.log(nimed);
			  
			  $( "#byname" ).autocomplete({
					source: nimed,
					minLength: 2
				});
			});
	});
	$(function() {
		var availableTags = [
			"Eduard",
			"Oskar",
		];
//		alert("asd");
		
		$.post('/lambiprojekt123?query=geteverything', function(data) {
//			  console.log(data);
			  if(typeof(Storage)!=="undefined")
			  	{ 
				  localStorage.setItem("data", JSON.stringify(data));
			  	}
//			  console.log(JSON.parse(localStorage["data"]));
			  
			  var nimed = new Array(data.length);
			  for (var i = 0; i < data.length;i++) {
				  
				  nimed[i] = data[i].firstName;
		
				  }
//			  console.log(nimed);
			  
			  $( "#byname" ).autocomplete({
					source: nimed,
					minLength: 2
				});
			});
		
			// Hover states on the static widgets
			$( "#dialog-link, #icons li" ).hover(
				function() {
					$( this ).addClass( "ui-state-hover" );
				},
				function() {
					$( this ).removeClass( "ui-state-hover" );
				}
			);
		});
	
	$("#loader").hide();
	$("#search div").hide();
	$("#search #searchResults").hide();
	if(window.location.hash.indexOf("query=") != -1){
		$.post('/lambiprojekt123?query='+ window.location.hash.split("=")[1], function(data) {
//			  console.log(data);
//			  data123 = data;
			 if(typeof(Storage)!=="undefined")
			  	{ 
				  localStorage.setItem("data", JSON.stringify(data));
			  	}
			  updateSearch(window.location.hash.split(":")[1], JSON.parse(localStorage["data"]))
			  //alert(query);
			
			});
	}
	$("input[name=radiogroup1]:radio").change(function (){
		
		$("#search div").hide();
		$("#"+$(this).val()).show();
		
		window.location.hash = "#search" + ":" + $(this).val();
		
});
	
	$(".searchSubmit").click( function () {
		var that = $(this);
		query="";
		parent_id = $(this).parent().attr("id");
		if(parent_id == "byCanditate"){
			query = parent_id + ";" + $(this).parent().find("input").val();
			}
		else if(parent_id == "byRegion"){
			query = parent_id + ";" + $(this).parent().find("select").val();
		}
		else if(parent_id == "byParty"){
			query = parent_id + ";" + $(this).parent().find("input").val();
		}
		else if(parent_id == "byPartyAndRegion"){
			query = parent_id + ";" + $(this).parent().find("input").val();
			query = query + ";" + $(this).parent().find("select").val();
		}
			//query = $(this).parent().find('input[type=text]').val()
		if(window.location.hash.indexOf("query=") == -1){
			
			window.location.hash = window.location.hash + ":query=" + query;
		}
		else{
			tykid = window.location.hash.split(":");
			tykk = "query=" + query;
			kokku = tykid[0]+":"+tykid[1]+":"+tykk;
			window.location.hash = kokku;
		}
		$("#loader").show();
		
		$.post('/lambiprojekt123?query='+query, function(data) {
//			  console.log(data);
			  if(typeof(Storage)!=="undefined")
			  	{ 
				  localStorage.setItem("data", JSON.stringify(data));
			  	}
			  //alert(query);
			});
		var timeoutId = window.setTimeout(
				function () {
					//console.log(data123);
					updateSearch(that, JSON.parse(localStorage["data"]));
					$("#loader").hide();
				},1000
		);
		

	});
	//bookmarkitavad lingid
	ChangeContentToHash();
	



});
