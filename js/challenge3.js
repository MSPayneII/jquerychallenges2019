$(document).ready(function(){

  $("form").submit(function(event){
    if($('input[name="fruit"]:checked').length == 0){
      alert("You must select a class standing and a favorite fruit");
      event.preventDefault();
    }
    else if($('input[name="standing"]:checked').length == 0){
      alert("You must select a class standing and a favorite fruit");
      event.preventDefault();
    }
  });
});
