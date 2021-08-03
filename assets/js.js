$(function () 

  var nineAmInput = $("#9");
  var tenAmInput = $("#10");
  var ellevenAmInput = $("#11");
  var twelveAmInput = $("#12");
  var onePmInput = $("#1");
  var twoPmInput = $("#2");
  var threePmInput = $("#3");
  var fourPmInput = $("#4");
  var fivePmInput = $("#5");

  var todaywithouttime = moment().format("MMMM Do YYYY");
  var currentTime = moment().format("h a");
  console.log(currentTime);

  $("#currentDay").text(todaywithouttime);

  function setBackgroundColor() {
    var currentTime = moment().format("h a");
    switch (currentTime) {
      case "9 am": {
      }
    }
  }

  function setSchedule() {
    var nineAm = localStorage.getItem("9 am");
    nineAmInput.val(nineAm);

    var tenAm = localStorage.getItem("10 am");
    tenAmInput.val(tenAm);

    var ellevenAm = localStorage.getItem("11 am");
    ellevenAmInput.val(ellevenAm);

    var twelveAm = localStorage.getItem("12 am");
    twelveAmInput.val(twelveAm);

    var onePm = localStorage.getItem("1 pm");
    onePmInput.val(onePm);

    var twoPm = localStorage.getItem("2 pm");
    twoPmInput.val(twoPm);

    var threePm = localStorage.getItem("3 pm");
    threePmInput.val(threePm);

    var fourpm = localStorage.getItem("4 pm");
    fourPmInput.val(fourpm);

    var fivePm = localStorage.getItem("5 pm");
    fivePmInput.val(fivePm);
  }

  setSchedule();

  $('.saveBtn').on('click', function () {
    // get nearby values
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    // save in localStorage
    localStorage.setItem(time, value);
  });
});
