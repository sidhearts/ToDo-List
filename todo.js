//check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

//Add todos from input
$("input").keypress(function(event){
	if(event.which === 13){
		//take new todo from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new todo in list
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input").fadeToggle();
})