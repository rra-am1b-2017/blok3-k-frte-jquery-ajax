$(document).ready(function () {
  

  $("#selectCategory").on("change", function () {

    // We hebben de waarde opgevraagd van het select tag
    var value = $(this).val();

    $.post("http://localhost/2017-2018/blok3/k-frte-am1b/jquery-ajax/data.php", 
           {"category" :  value}, 
           function (data) {
              // console.log(data);
              //$(".jumbotron p").eq(1).text(data);
              for ( var i=0; i<data.length; i++) {
                //console.log(data[i].info);
                $(".carousel-inner img").eq(i).attr("src", "./images/" + data[i].name);
                $(".carousel-inner h5").eq(i).text(data[i].title);
                $(".carousel-inner p").eq(i).text(data[i].info);

              }
           },
           "json");

  });
});