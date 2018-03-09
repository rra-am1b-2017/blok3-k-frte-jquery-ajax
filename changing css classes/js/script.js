$(document).ready(function () {
  $("#addclass").on("click", function () {
    $("#first").addClass("funnyClass");
  });

  $("#removeclass").on("click", function () {
    $("#first").removeClass("funnyClass");
  });

  $("#toggleclass").on("click", function () {
    $("#second").toggleClass("funnyClass2");
  });

  setInterval(function () {
    $("#second").toggleClass("funnyClass2");
  }, 100);
});