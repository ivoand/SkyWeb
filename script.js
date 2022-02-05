$(".btn-1").click(function() {
    $('.det-expl-1').toggle(500);
    $('.arrow-down-1').toggle()
    $('.arrow-up-1').toggle()
    $('.det1').toggleClass('details-line')
})
$(".btn-2").click(function() {
    $('.det-expl-2').toggle(500)
    $('.arrow-down-2').toggle()
    $('.arrow-up-2').toggle()
    $('.det2').toggleClass('details-line')

})
$(".btn-3").click(function() {
    $('.det-expl-3').toggle(500);
    $('.arrow-down-3').toggle()
    $('.arrow-up-3').toggle()
    $('.det3').toggleClass('details-line')
})
$(".btn-4").click(function() {
    $('.det-expl-4').toggle(500);
    $('.arrow-down-4').toggle()
    $('.arrow-up-4').toggle()
    $('.det4').toggleClass('details-line')
})
$(".menu-icon").click(function() {
    $('.menu-icon-on').toggle()
    $('.menu-icon-off').toggle()
    $('#menu').toggle(500)
})