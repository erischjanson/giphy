var topics=["french", "italian", "wine", "cheese", "coffee", "chocolate", "pasta", "paris", "bordeaux", "rome"];

for (var i=0; i < topics.length; i++){
	var buttons=$('<button>').text(topics[i]);
	buttons.addClass("test");
	buttons.attr("data-topic", topics[i]);
	$('#buttons').append(buttons);
	console.log(buttons.attr("data-topic"));
	//assign the text as the value of an attribute "data-topic"
};
	//$('#viewGifs').prepend("<img src='"+response.data[i].images.downsized.url+"'>");
 $("#buttons").on("click", ".test" , function(){

 	var topic = ($(this).attr("data-topic"));
 	var queryUrl="https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";
 	
	$.ajax({
		url: queryUrl,
		method: "GET"
	}).done(function(response){
		console.log(response);
		console.log("The response object: " + response.data[1].url);
		console.log(response.length);
		//var staticGif=response.data[1].url;
		for (var i=0; i < response.data.length; i++){			
			console.log(response.data[i].rating)
			$('#viewGifs').prepend("<p>Rating: "+response.data[i].rating+"</p>");
			$('#viewGifs').prepend("<img src='"+response.data[i].images.downsized_still.url+"'>");
		}
		
		});

 });


/*$.ajax({
	url:"",
	method: "GET"
}).done(function(response){
	console.log(response);
})
*.

//create url variable
//create search term variable
//search term will need to be added as data-topic attribute of teh button

//create input field
//create submit button

//onclick event to grab response for all butons

/*$('button').on('click', function(){
	var x = $(this).data("search");
	var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + x + "&limit=10&api_key=dc6zaTOxFJmzC";

	$.ajax({
	url: queryUrl,
	method: 'GET'
}). done(function(response){
	console.log(response);
	for(var i=0; i<response.data.length; i++){
	$('#viewGifs').prepend("<p>Rating: "+response.data[i].rating+"</p>");
	$('#viewGifs').prepend("<img src='"+response.data[i].images.downsized.url+"'>");
}

})

});
*/
