$(document).ready(function(){
	$("#subscribe").click(function(){
		if (this.checked){
			$("#emailField").show();
		}else {
			$("#emailField").hide();
		}
	});

});
