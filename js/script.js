$(document).ready(function () {
    $("#navbtn").click(function () {

        $("#navmenu").toggle().css({
            'width':'200px',
            'position':'absolute',
            'top':'50px',
            'left':'0',
            'z-index':'2'
        });
    });
    $("#popupinfoB1btn").click(function () {
        $("#popupinfoB1").toggle(0);
    });

    $("#refundreq").click(function () {
        $("#refundreqDropdown").slideToggle(100).css({'display':'flex'});

    });
});
