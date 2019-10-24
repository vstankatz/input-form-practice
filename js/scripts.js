//Back-end




//User Interface

$(document).ready(function(){
  var flesh;
  var curse;
  var color;
  var born;
  var firstName;
  var lastName;
  var streetAddress;
  var aptNum;
  var city ;
  var state;
  var zip;



  $("form#first").submit(function(event) {
  event.preventDefault();
  flesh = $("select#flesh").val();
  curse = $("input:radio[name=curse]:checked").val()
  color = $("input#color"). val();
  born = $("input#born").val();
  $(".flesh").text(flesh);
  $(".curse").text(curse);
  $(".color").text(color);
  $(".born").text(born);
  $("#form2").show();


}); //First Form


$("#second").submit(function(event) {

  event.preventDefault();
  firstName = $("input#firstName").val();
  lastName = $("input#lastName").val();
  streetAddress = $("input#streetAddress").val();
  aptNum = $("input#aptNum").val();
  city = $("input#city").val();
  state = $("input#state").val();
  zip = $("input#zip").val();
  $(".firstName").text(firstName);
  $(".lastName").text(lastName);

  $(".streetAddress").text(streetAddress);
  $(".aptNum").text(aptNum);
  $(".city").text(city);
  $(".state").text(state);
//  console.log("second`");
  $(".zip").text(zip);

  $(".receipt").show();
  //console.log("third");
});
});
