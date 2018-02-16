// We moeten er eerst voor zorgen dat de hele html pagina geladen is in de browser
$(document).ready(function () {
  // Hier komt vanaf nu al je jquery code!

  // Hier wordt de css method gechained (Het chainen van methods)
  $("ol").css("border", "5px solid orange")
         .css("padding", "25px");

  // We maken nu een javascript object met css property - value paren
  var style_li = {"border"  : "5px solid black",
                  "padding" : "25px",
                  "margin"  : "20px"};
  // We geven het javascript object mee aan de css method
  $("li").css(style_li);

  // We maken een javascript object met een property - value paar
  var ol_style_left = {"background-color" : "rgb(220, 220, 220)", "border-radius" : "1em"};
  // We geven deze mee aan de ol met id="left"
  $("#left").css(ol_style_left);

  // We selecteren de ol met id=right. 
  // We geven direct css property - value paren met een js-object mee aan de css method.
  $("#right").css({"background-color" : "rgb(200,200,200)",
                   "border-radius" : "1em"});

  // We selecteren de ol met class="b" 
  // We geven direct css property - value paren met een js-object mee aan de css method.
  $(".a").css({"font-size" : "18px", "background-color" : "rgb(255,255,255)"});

  // We selecteren de ol met class="b" 
  // We geven direct css property - value paren met een js-object mee aan de css method.
  $(".b").css({"font-size" : "6px", "background-color" : "rgb(230,230,230)"});


  $("*").css({"font-family" : "verdana"});
  
  $("#left li").css({"border-radius" : "0.4em", "border-color" : "purple"});

  $("#right li").css({"border-radius" : "0.4em", "border-color" : "blue"});

  // Einde les lesweek 1 
  
  $("#first_li").on("click", function () {
    $("#left li:first").css({"background-color" : "yellow"});
  });

  // Maak nieuwe knoppen voor de volgende filter: last, even, odd, gt(2), lt(3), eq(3)

  $("#last_li").on("click", function() {
    $("#left li:last").css({"background-color" : "green"});
  });

  $("#even_li").on("click", function () {
    $("#left li:even").css({"background-color" : "orange"});
  });

  $("#odd_li").on("click", function () {
    $("#left li:odd").css({"background-color" : "blue"});
  });

  $("#gt_li").on("click", function () {
    $("#left li:gt(2)").css({"background-color" : "rgb(230, 45, 60)"});
  });
  
  $("#lt_li").on("click", function () {
    $("#left li:lt(2)").css({"background-color" : "rgb(230, 5, 160)"});
  });

  $("#eq_li").on("click", function () {
    $("#left li:eq(2)").css({"background-color" : "rgb(20, 145, 60)"});
  });


  $("#selectClass").on("click", function () {
    $("#right [class]").css({"background-color" : "purple", "color" : "white"});
  });

  $("#selectStyle").on("click", function () {
    $("#right [style*=bluev]").css({"background-color" : "rgb(200, 200, 0)", "color" : "black"});
  });
  
});


