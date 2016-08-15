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
    updateData.push(formData[1],formData[0],formData[2]);
    console.log(formData);
    event.preventDefault();
  });
});
