// this is your custom Javascript file
$(function () {
  // add any custom Javascript code below this line
   // Content Change
  $("#change-text").mouseover(function () {
    $("#garden-text").text(
      "Hibiscus plants are known for their large colorful blooms and can flower throughout the summer."
    );
  });
  // Image Swap
  $("#hibiscus-flower").mouseover(function () {
    $(this).attr(
      "src",
      "coral-hibiscus.png"
    );
  });
   $("#hibiscus-flower").mouseout(function () {
    $(this).attr(
      "src",
      "hibiscus-flowers.png"
    );
  });
  // Animation
  $("#reveal-button").click(function () {
    $("#cover-flower").animate({
    left: "300px",
    top: "400px"  
  });
   $("#hidden-fact").show();
});
  // add any custom Javascript code above this line.
})
