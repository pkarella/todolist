function Task(input) {
  this.input = input;
}



$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();

    var inputTask = $("input#task").val();

      var newThing = new Task(inputTask);

    $("ul#thing").append("<li class='list'>" + newThing.input + "</li>");

    $(".list").click(function(){
      $(this).addClass("list-done");
      $(this).prependTo("#final");
    });

    $(".button").click(function(){
      $("#final").empty();
    });

    $("input#task").val("");



  });
});
