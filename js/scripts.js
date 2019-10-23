//Back-end

var body = $("input#body").val();
var curse = $("input:radio[name=curse]:checked").val()
var color = $("input#color"). val();
var born = $("input#born").val();
var firstName = $("input#firstName").val();
var lastName = $("input#lastName").val();
var streetAddress = $("input#streetAddress").val();
var aptNum = $("input#aptNum").val();
var city = $("input#city").val();
var state = $("input#state").val();
var zip = $("input#zip").val();



//User Interface

$(document).ready(function(){
  $("form#first").submit(function(event) {
  event.preventDefault();
  $(".body").text(body);
  $(".curse").text(curse);
  $(".color").text(color);
  $(".born").text(born);

  $("#form2").show();


}); //First Form
$("form#second").submit(function(event) {
      event.preventDefault();
  $(".firstName").text(firstName);
  $(".lastName").text(lastName);
  $(".streetAddress").text(streetAddress);
  $(".aptNum").text(aptNum);
  $(".city").text(city);
  $(".state").text(state);
  $(".zip").text(zip);

  $("#receipt").show();
});
});
