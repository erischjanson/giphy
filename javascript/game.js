//array of gif/button topics
var topics=["french", "italian", "wine", "cheese", "coffee", "chocolate", "pasta", "paris", "bordeaux", "rome"];

//function to create and render buttons
function renderButton(){
	$("#buttons").empty();
	//iterate through the topics array and create buttons for each item
for (var i=0; i < topics.length; i++){
		var buttons=$('<button>').text(topics[i]);
		buttons.addClass("test");
		buttons.attr("data-topic", topics[i]);
		$('#buttons').append(buttons);
	};
};

renderButton();

	//onclick event that will grab the gifs and apply attributes when a button is clicked
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
			//console.log(gif);	
			
			gif.attr("data-state", "still");
			gif.attr("data-still", response.data[i].images.downsized_still.url );
			gif.attr("data-animate", response.data[i].images.downsized.url );
			gif.addClass("gif");


			var giphy = $("<div class = 'giphy'>").append(gif, rating);
			$("#viewGifs").prepend(giphy);
			// $("#viewGifs").prepend(rating);
			// $("#viewGifs").prepend(gif);
		}		
		});
 });

 //onclick event that will either animate or pause the gifs depending on their data-state.
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
 });

 //creates a new button with topic of user's choice
 $("#submitButton").on("click", function(event){
 	event.preventDefault();
 	
 	var userInput=$("#userInput").val();
 	
 	topics.push(userInput); 	
 	renderButton();
 });

