//javascript
document.addEventListener ("DOMContentLoaded", function (event) {

var thumbnailElement = document.getElementById ("smart_thumbnail");


thumbnailElement.addEventListener("click", function() {
  // write here
  if (thumbnailElement.className == "") { 
	thumbnailElement.className = "small";
} else{
  thumbnailElement.className = "";
}
});

});