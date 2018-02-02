// We moeten er eerst voor zorgen dat de hele html pagina geladen is in de browser
$(document).ready(function () {
  // Hier komt vanaf nu al je jquery code!

  // Hier wordt de css method gechained (Het chainen van methods)
  $("ol").css("border", "5px solid orange")     
         .css("padding", "25px")
         .css("width", "400px");

  // We maken nu een javascript object met css property - value paren
  var style_li = {"border"  : "5px solid black",
                  "padding" : "25px",
                  "margin"  : "20px"};
  // We geven het javascript object mee aan de css method
  $("li").css(style_li);

  // We maken een javascript object met een property - value paar
  var ol_style_left = {"background-color" : "rgb(220, 220, 220)"};
  // We geven deze mee aan de ol met id="left"
  $("#left").css(ol_style_left);

  // We geven direct een js-object mee aan de css method. We passen dz cby 
  $("#right").css({"background-color" : "rgb(200,200,200)"});

  $(".a").css({"font-size" : "18px", "background-color" : "rgb(255,255,255)"});

  $(".b").css({"font-size" : "6px", "background-color" : "rgb(230,230,230)"});






  


  
});


