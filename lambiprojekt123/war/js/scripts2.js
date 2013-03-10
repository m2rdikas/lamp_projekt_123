function updateSearch (that) {
		var currentId = $(that).parent().attr('id');
		//alert(currentId);
		
		
		if(currentId == "byCanditate"){
			var jsonUrl = "candidate.json";
		}
		else if (currentId == "byRegion"){
			var jsonUrl = "findCandidatesByRegion.json";
			
		}
		else if (currentId == "byParty"){
			var jsonUrl = "findCandidatesByParty.json";
			
		}
		else if(currentId == "byPartyAndRegion"){
			var jsonUrl = "findCandidatesByPartyAndRegion.json";
		}
		else {
			alert("VIGA!");
			}
		
		//alert(json);
		
		$.getJSON('js/'+jsonUrl, function(data) {
			  console.log(data);
//			  alert(currentId);
			  var html = "<h1>Tulemus</h1>" +
				  	"<table>" +
			  			"<tr>" +
			  				"<th>id</th>" +
			  				"<th>Nimi</th>" +
			  				"<th>Partei</th>" +
			  				"<th>Piirkond</th>" +
			  			"</tr>"; 
			  			
			  			
//			 console.log(data);
			  
			  if(currentId == "byCanditate"){ 
			    html += "<tr>" +
			    			"<td>" + data.id + "</td>" +
			    			"<td>" + data.person.name + "</td>" +
			    			"<td>" + data.party.name + "</td>" +
			    			"<td>" + data.region.name + "</td>" +
			    		"</tr>" +
			    	"</table>";
			  }
			  else if (currentId == "byRegion" ){
				  console.log(data.candidates);
				  for (var i = 0; i < data.candidates.length;i++) {
					html += "<tr>" +
		    			"<td>" + data.candidates[i].id + "</td>" +
		    			"<td>" + data.candidates[i].person.name + "</td>" +
		    			"<td>" + data.candidates[i].party.name + "</td>" +
		    			"<td>" + "PIIRKOND" + "</td>" +
		    		"</tr>";
					  
				  }
				  html += "</table>";
			  }
			  else if (currentId == "byParty" ){
				  console.log(data.candidates);
				  for (var i = 0; i < data.candidates.length;i++) {
					html += "<tr>" +
		    			"<td>" + data.candidates[i].id + "</td>" +
		    			"<td>" + data.candidates[i].person.name + "</td>" +
		    			"<td>" + "PARTEII" + "</td>" +
		    			"<td>" + data.candidates[i].region.name + "</td>" +
		    		"</tr>";
					  
				  }
				  html += "</table>";
			  }
			  else if (currentId == "byPartyAndRegion") {
				  console.log(data.candidates);
				  for (var i = 0; i < data.candidates.length;i++) {
					html += "<tr>" +
		    			"<td>" + data.candidates[i].id + "</td>" +
		    			"<td>" + data.candidates[i].person.name + "</td>" +
		    			"<td>" + "PARTEII" + "</td>" +
		    			"<td>" + "PIIRKOND" +"</td>" +
		    		"</tr>";
					  
				  }
				  html += "</table>";
				  
			  }
			  
//			 console.log(html);
			    $("#searchResults").show();
			    
			    $("#searchResults").html(html);
			    
			});
	}

$(document).ready(function (){
	$("#loader").hide();
	$("#search div").hide();
	$("#search #searchResults").hide();
	$("input[name=radiogroup1]:radio").change(function (){
		
		$("#search div").hide();
		$("#"+$(this).val()).show();
		
});
	
	$(".searchSubmit").click( function () {
		var that = $(this);
		$("#loader").show();
		var timeoutId = window.setTimeout(
				function () {
					
					updateSearch(that);
					$("#loader").hide();
				},1000
		);
	});
});
