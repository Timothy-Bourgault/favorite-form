var formData = []
var updateData = []


$(document).ready(function() {
  $("form#favoriteThings").submit(function(event) {
    var name = $("#name").val();
    var food = $("#food").val();
    var location = $("#location").val();
    var musicGenre = $("#musicGenre").val();
    var sexPosition = $("#sexPosition").val();
    var portlandBar = $("#portlandBar").val();


    formData[0]=name;
    formData[1]=food;
    formData[2]=location;
    formData[3]=musicGenre;
    formData[4]=sexPosition;
    formData[5]=portlandBar;
    // formData.push() = [name, food, location, musicGenre, sexPosition, portlandBar]
    updateData.push(formData[0], formData[1], formData[2], formData[3], formData[4], formData[5]);
    console.log(formData);
    event.preventDefault();
    $("ul").append("<li>" + updateData.shift(0) + "</li>");
    $("ul").append("<li>" + updateData.shift(1) + "</li>");
    $("ul").append("<li>" + updateData.shift(2) + "</li>");
    $("ul").append("<li>" + updateData.shift(3) + "</li>");
    $("ul").append("<li>" + updateData.shift(4) + "</li>");
    $("ul").append("<li>" + updateData.shift(5) + "</li>");
    // updateData.forEach(function(updateData) {
    //   item = "<li>" + updateData + "</li>";
    //   $("outPut").prepend(item);
  });
});
