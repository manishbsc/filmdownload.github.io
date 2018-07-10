$(document).ready(function()
{
	document.getElementById("my-form").reset();
	refresh();
	
});

 function refresh(){
 	$("#cardhide").hide();
  $('#my-form').submit(function(e) {
  	 e.preventDefault();
  	 /* process to get data in form of string*/
  	 var i=$(this).serialize();
  	  $("#mainhide").hide();
  	    $("#cardhide").show();
  	 getfile(i);
  });
}
var getfile=(i)=>{
        console.log("making requedtest");
        $.ajax({           
	type:'GET',
	dataType:'json',
	async:true,
	url:'http://www.omdbapi.com/?apikey=3405677d&'+i,
	success:(response)=>{

		$('#image').html('<img class="card-img-top"  onerror="this.src=\'image/image.jpeg\';" src="' + response.Poster + '" />');
		$('.card-text').append(response.Title);
		$('#id1').append(response.Year);
		$('#id2').append(response.Rated);
		$('#id3').append(response.Released);
		$('#id4').append(response.imdbID);
		$('#id5').append(response.Actors);
		$('#id6').append(response.Genre);
		$('#id7').append(response.Director);
		$('#id8').append(response.Plot);
		$('#id9').append(response.imdbRating);
		$('#id10').append(response.Awards);
		$('#id11').append(response.Country);
		$('#id12').append(response.Runtime);
		$('#id13').append(response.Production);
		$('#id14').append(response.Language);


		var k=response.Response;
		console.log(k);
		respo(k);
	},
	error:(response)=>{
		alert("SOME ERROR");
	}
        });
}

function respo(k){
	console.log("making requedtest");
	if (k=="False") {
		alert("error.kindly close");
		document.getElementById("my-form").reset();
		location.reload();
	}


}


