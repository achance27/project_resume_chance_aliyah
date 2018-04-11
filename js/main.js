// Contact Tip
$(document).ready(function () {
    $('.tooltip').tooltipster();
});

// Typer
$('h1').typeTo('Aliyah Chance\'s Resume');

// Highlight
$('li, h3').mouseover(function () {
    $(this).addClass('highlight');
});
$('li, h3').mouseout(function () {
    $(this).removeClass('highlight');
});

// 3D pop
$('h2').mouseover(function () {
    $(this).addClass('pop');
});
$('h2').mouseout(function () {
    $(this).removeClass('pop');
});
