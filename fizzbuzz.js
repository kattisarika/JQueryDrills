var fizzString = 'fizz';
var buzzString = 'buzz';
var fizzBuzzString = 'fizzbuzz';


function handleFormSubmit() {
    console.log("Come into handleFormSubmit");
    $('#number-chooser').submit(function (event) {
        console.log("Come into handleFormSubmit submit");
        event.preventDefault();
        $(".js-results").empty();
        var choice = parseInt($(event.currentTarget).find('input[name="number-choice"]').val());
        console.log(choice);
        doFizzBuzz(choice);
    });
}

$(function () {

    handleFormSubmit();
});


function doFizzBuzz(num) {
    var fizzBuzzArray = makeFizzBuzzArray(num);
    fizzBuzzArray.forEach(function (item) {
        var newElem = $('<div class="fizz-buzz-item"><span>' + item + '</span></div>');
        if (item === fizzString || item === buzzString || item === fizzBuzzString) {
            newElem.addClass(item);
        }
        console.log("Inside the doFizzBuzz function");
        $(".js-results").append(newElem);
    })
}

function makeFizzBuzzArray(num) {
    var result = [];
    for (var i = 1; i <= num; i++) {

        result.push(getFizzBuzzValue(getFizzBuzzValue(i)));

    }
    console.log(result);
    return result;
}

function getFizzBuzzValue(value) {
    var output = value;

    if (value % 15 === 0) {
        output = "fizzbuzz";
    } else if (value % 3 === 0) {
        output = "fizz";
    } else if (value % 5 === 0) {
        output = "buzz";
    }

    return output;
}
