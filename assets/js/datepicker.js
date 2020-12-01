/*jshint esversion: 6 */
$(function () {
  var dateFormat = "mm/dd/yy",
    from = $("#from")
      .datepicker({
        defaultDate: "+1w",
        changeMonth: false,
        numberOfMonths: 2,
        minDate: +1,
      })
      .on("change", function () {
        to.datepicker("option", "minDate", getDate(this));
      }),
    to = $("#to")
      .datepicker({
        defaultDate: "+1w",
        changeMonth: false,
        numberOfMonths: 2,
      })
      .on("change", function () {
        from.datepicker("option", "maxDate", getDate(this));
      });

  function getDate(element) {
    var date;
    try {
      date = $.datepicker.parseDate(dateFormat, element.value);
    } catch (error) {
      date = null;
    }

    return date;
  }
  var $dates = $("#from, #to").datepicker();

  $("#clear-dates").on("click", function () {
    $dates.datepicker("setDate", null);
  });
});
