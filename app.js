$(document).ready(function(){
    $('.photos').featherlightGallery();
});

//ADD CAPTION

//Initializing array of captions
var captions = [
    "I love hay bales. Took this snap on a drive through the countryside past some straw fields.",
    "The lake was so calm today. We had a great view of the snow on the mountains from here.",
    "I hiked to the top of the mountain and got this picture of the canyon and trees below.",
    "It was amazing to see an iceberg up close, it was so cold but didn’t snow today.",
    "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.",
    "Fall is coming, I love when the leaves on the trees start to change color.",
    "I drove past this plantation yesterday, everything is so green!",
    "My summer vacation to the Oregon Coast. I love the sandy dunes!",
    "We enjoyed a quiet stroll down this countryside lane.",
    "Sunset at the coast! The sky turned a lovely shade of orange.",
    "I did a tour of a cave today and the view of the landscape below was breathtaking.",
    "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."
    ]

function addCaption() {
$(document).ready(function(){

// Getting img collection index
  $("img").click(function(){
  var c = ($(this).index());

// Using index to retrieve and add the caption below the lightbox image
  $('<p>' + captions[c] + '</p>').appendTo('.featherlight-content')
    });
});
}

addCaption();


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