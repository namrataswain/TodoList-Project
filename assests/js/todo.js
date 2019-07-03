//Check off Specific Todos By clicking on it 
$("li").click(function(){
	$(this).toggleClass("completed");
});
// click on X to delte todo
$("span").click(function(event){
	alert("clicked on a span");
	event.stopPropagation();
});