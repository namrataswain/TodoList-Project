//Check off Specific Todos By clicking on it 
$("li").click(function(){
	// if li is gray
	
	if($(this).css("color") === "rgb(128, 128, 128)"){
		console.log("it is currently gray");
		$(this).css({
			// turn it black
			color: 'black',
			textDecoration : "none"
		});
	}

	//else
	//turn it gray
	else{
		$(this).css({
		color : "grey",
		textDecoration :"line-through"
		});
	}
	
});