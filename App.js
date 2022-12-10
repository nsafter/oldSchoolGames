let count = 1;
function getSuggestion() {
  if ($("#apiAct").hasClass("animate__backInDown")) {
    $("#apiAct").removeClass("animate__backInDown");
  }
  $.ajax({
    url: "https://www.boredapi.com/api/activity",
    method: "GET",
    success: function (data) {
      {
        $("#apiAct").text(data.activity);
        $("#apiAct").addClass("animate__backInDown");
      }
    },
  });
  count++;
}
