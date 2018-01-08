var topics=["french", "italian", "wine", "cheese", "coffee", "chocolate", "pasta", "paris", "bordeaux", "rome"];
function renderButton(){
	$("#buttons").empty();

for (var i=0; i < topics.length; i++){
	var buttons=$('<button>').text(topics[i]);
	buttons.addClass("test");
	buttons.attr("data-topic", topics[i]);
	$('#buttons').append(buttons);
	
	//assign the text as the value of an attribute "data-topic"
};
};

renderButton();	//$('#viewGifs').prepend("<img src='"+response.data[i].images.downsized.url+"'>");

	//button onclick event that will grab the gifs and apply attributes
 $("#buttons").on("click", ".test" , function(){

 	var topic = ($(this).attr("data-topic"));
 	var queryUrl="https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";
 	
	$.ajax({
		url: queryUrl,
		method: "GET"
	}).done(function(response){
			
		//var staticGif=response.data[1].url;
		for (var i=0; i < response.data.length; i++){
			var rating=$("<p>").text("Rating: " + response.data[i].rating);
			var gif=$("<img>").attr("src", response.data[i].images.downsized_still.url);
			console.log(gif);

			//$('#viewGifs').prepend("<p>Rating: "+response.data[i].rating+"</p>");
			//$('#viewGifs').prepend("<img src='"+response.data[i].images.downsized_still.url+"'>");
			
			gif.attr("data-state", "still");
			gif.attr("data-still", response.data[i].images.downsized_still.url );
			gif.attr("data-animate", response.data[i].images.downsized.url );
			gif.addClass("gif");
			console.log(response.data[i].images.downsized_still.url);
			$("#viewGifs").prepend(rating);
			$("#viewGifs").prepend(gif);

		}
		
		});

 });

 //image onclick events that will either animate or pause the gifs
 //if click on image and state is still, flip to animate. vice versa. always reset state.
 $("#viewGifs").on("click", ".gif", function(){
 	var state=$(this).attr("data-state");
	 	if(state==="still"){
	 		$(this).attr("src", $(this).attr("data-animate"));
		 	console.log("testing");
		 	$(this).attr("data-state", "animate");
	 	} else {
	 		$(this).attr("src", $(this).attr("data-still"));
	 		$(this).attr("data-state", "still");

	 	}
 	
 })

 $("#submitButton").on("click", function(event){
 	event.preventDefault();
 	
 	var userInput=$("#userInput").val();
 	
 	topics.push(userInput);
 	console.log(topics);
 	renderButton();
 })

