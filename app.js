//ADD CAPTION (via Featherlight)

$.featherlightGallery.prototype.afterContent = function() {
  var caption = this.$currentTarget.find('img').attr('alt');
  this.$instance.find('.caption').remove();
  $('<div class="caption">').text(caption).appendTo(this.$instance.find('.featherlight-content'));
};


//SEARCH FUNCTION

function search() {
    var input, imgs, src, i;

    // Get the user's input from the search-bar
    input = document.getElementById("input-id");
    inputLower = input.value.toLowerCase();
    photos = document.getElementById("photos");

    // Create an array of all image ids
    imgs = $('.thumbnail');
    for (i = 0; i < imgs.length; i++) {
        src = imgs[i].id;

    // Compare the input to each of the element ids in the array
        if (src.indexOf(inputLower) > -1) {
            imgs[i].style.display = "";

    // If input doesn't match element, hide element
        } else { 
            imgs[i].style.display = "none";
          }
    }
}