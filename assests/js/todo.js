//Check off Specific Todos By clicking on it 
$("li").click(function(){
	$(this).toggleClass("completed");
});