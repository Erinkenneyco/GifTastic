//javascript, jQuery
// F28W5xTKJkRFqexqoP0E7NQPzH2C8l6w API key for reference. 


var topicsArray=["Princess Tiana","Princess Belle", "Princess Jasmine","Snow White","Cinderella","Ariel","Rapunzel","Pocahontas","Sleeping Beauty","Mulan"];

$(document).ready(function() {
    for (var i = 0; i < topicsArray.length; i++) {
        $("#princess-buttons").append("<button type='button' onclick='searchGif(\"" + topicsArray[i] + "\")' class='btn btn-primary' value=' " + topicsArray[i] + "'> " + topicsArray[i] + " </button>");
    }
});

function princessButtonClicked() {
    var userInput = $('#princess-input').val();
    searchGif(userInput);
}

function submitButtonClicked(event) {
     var userInput = $('#princess-input').val();
  

    if (userInput) {
        $('#princess-buttons').append("<button type='button' onclick='searchGif(\"" + userInput + "\")' class='btn btn-primary' value=' " + userInput + "'> " + userInput + " </button>");
    }

    function newFunction() {
        event.preventDefault();
    }
}

function searchGif(gifName) {
    $.ajax({
            url: 'https://api.giphy.com/v1/gifs/search?q= ' + gifName + ' &api_key=F28W5xTKJkRFqexqoP0E7NQPzH2C8l6w&limit=10',
            type: 'GET',
        })
        .done(function(response) {
            displayGif(response);
        })
}

function displayGif(response) {
    $('#princesses').empty();
    for (var i = 0; i < response.data.length; i++) {
        var rating = "<div class='ratings'> Rating:  " + (response.data[i].rating) + " </div>";
        var image = rating + '<img src= " ' + response.data[i].images.fixed_height_still.url +
            '" data-still=" ' + response.data[i].images.fixed_height_still.url +
            ' " data-animate=" ' + response.data[i].images.fixed_height.url + '" data-state="still" class="movImage" style= "width:250px; height:250px">';

        image = '<div class="col-md-4">' + image + "</div>";
        $('#princesses').append(image);

    }

    $('.movImage').on('click', function() {
        var state = $(this).attr('data-state');
        if (state == 'still') {
            $(this).attr('src', $(this).attr("data-animate"));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).attr("data-still"));
            $(this).attr('data-state', 'still');
        }

    });
}

