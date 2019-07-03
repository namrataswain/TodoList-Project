//Check off Specific Todos By clicking on it 
$("li").click(function(){
	$(this).toggleClass("completed");
});
// click on X to delte todo
$("span").click(function(event){
	$(this).parent().fadeOut(500,function(){
       $(this).remove();
	});
	event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		console.log("you entered a enter");
	}
})