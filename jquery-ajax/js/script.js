$(document).ready(function () {
  

  $("#selectCategory").on("change", function () {

    // We hebben de waarde opgevraagd van het select tag
    var value = $(this).val();

    $.post("http://localhost/2017-2018/blok3/k-frte-am1b/jquery-ajax/data.php", 
           {"category" :  value}, 
           function (data) {
              console.log(data);
              $(".jumbotron p").eq(1).text(data);
           },
           "json");

  });
});