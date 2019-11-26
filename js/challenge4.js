$(document).ready(function(){
  $("form").submit(function(event){
    if($("#fullname").val().length == 0){
      $("#nameerrormsg").show();
      event.preventDefault();
    }
    else {
      $("#nameerrormsg").hide();
    }
    if ($("#streetaddr").val().length == 0){
      $("#addrerrormsg").show();
      event.preventDefault();
    }
    else {
      $("#addrerrormsg").hide();
    }
  });

});
