// Contact Tip
$(document).ready(function () {
    $('.tooltip').tooltipster();
});

// Typer
$('h1').typeTo('Aliyah Chance\'s Resume');

// Highlight
$('li, h3, p').mouseover(function () {
    $(this).css('color', '#5d10d1');
});
$('li, h3, p').mouseout(function () {
    $(this).css('color', '#13243f');
});

// 3D pop
$('h2').mouseover(function () {
    $(this).addClass('pop');
});
$('h2').mouseout(function () {
    $(this).removeClass('pop');
});
