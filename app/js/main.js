$(document).ready(function () {
  $("#showAll").click(function () {
    var currentHeight = $("#gallery").height(),
      fullHeight = $("#gallery").css('height', 'auto').height();
    $("#showAll").css('display', 'none');
    $("#gallery").height(currentHeight).animate({ height: fullHeight });
  })
})