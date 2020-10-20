jQuery(function ($) {
  $("div.card .term").click(function () {
      $(this).next().toggleClass("hidden");
  });
});
