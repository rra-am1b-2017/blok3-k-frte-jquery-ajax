// We moeten er eerst voor zorgen dat de hele html pagina geladen is in de browser
$(document).ready(function () {
  // Hier komt vanaf nu al je jquery code!
  $("[class*=primary]").on("click", function () {
    $("#left li:first").append(". Dit is wat tekst na de oorspronkelijke tekst");
  });
  
  $("[class*=alert]").on("click", function () {
    $("#left li:last").prepend("Dit is wat tekst voor de oorspronkelijke tekst. ");
  });

  $("[class*=danger]").on("click", function () {
    var newListItem = $("<li>Dit is een heel nieuw listitem na de derde li</li>");
    newListItem.css({"background-color" : "orange"});
    $("#left li:eq(2)").after(newListItem);
  });

  $("[class*=success]").on("click", function () {
    var newListItem = $("<li>Dit is een heel nieuw listitem voor de eerste li</li>");
    newListItem.css({"background-color" : "orange"});
    $("#left li:first").before(newListItem);
  });
});


