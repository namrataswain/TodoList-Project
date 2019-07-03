//Check off Specific Todos By clicking on it 
$("ul").on('click' , 'li', function(){
	$(this).toggleClass("completed");
});
// click on X to delte todo
$("ul").on('click', 'span' ,function(event){
	$(this).parent().fadeOut(500,function(){
       $(this).remove();
	});
	event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grabbing new todo text from input
	 var todoText = $(this).val();
	 //after enter is hit, it resets the text input
	 $(this).val("");
	 // create a new li and add to ul
	 $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});