function lightbulbclick() {
    $('.js-lightbulb').click(function (event) {
        $('.js-lightbulb').removeClass('bulb-on');
        $(event.currentTarget).addClass('bulb-on');
    });
}



$(function () {
    lightbulbclick();
})
