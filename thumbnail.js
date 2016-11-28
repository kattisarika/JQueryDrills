function handleThumbNailclicks() {
    console.log("Am i coming here");
    $('.thumbnail').click(function (event) {
        var imgSrc = $(event.currentTarget).find('img').attr('src');
        $('.hero img').attr('src', imgSrc);
    })
}

$(function () {
    handleThumbNailclicks();
});


$('.js-lightbulb').click(function (event) {

})
