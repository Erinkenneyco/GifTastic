//javascript, jQuery
// F28W5xTKJkRFqexqoP0E7NQPzH2C8l6w API key for reference. 


var topicsArray=["princess tiana","princess belle", "princess jasmine","snow white","cinderella","ariel","rapunzel","pocahontas","sleeping beauty","mulan"];

$(document).ready(function() {
    for (var i = 0; i < topicsArray.length; i++) {
        $("#princess-buttons").append("<button type='button' onclick='searchGif(\"" + topicsArray[i] + "\")' class='btn btn-primary' value=' " + topicsArray[i] + "'> " + topicsArray[i] + " </button>");
    }
});

function princessButtonClicked() {
    var userInput = $('#princess-input').val();
    searchGif(userInput);
}
