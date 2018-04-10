//Contact Tip
$(document).ready(function () {
    $('.tooltip').tooltipster();
});

/*
$('#circle1').circleProgress({
    value: 0.90,
    size: 80,
    fill: {
        gradient: ['red', 'orange']
    }
});

$('#circle2').circleProgress({
    value: 0.85,
    size: 80,
    fill: {
        gradient: ['red', 'orange']
    }
});

$('#circle3').circleProgress({
    value: 0.85,
    size: 80,
    fill: {
        gradient: ['red', 'orange']
    }
});
$('#circle4').circleProgress({
    value: 0.85,
    size: 80,
    fill: {
        gradient: ['orange', 'yellow']
    }
});
*/

$('#demoprogressbar1').LineProgressbar({
    percentage: 85,
    fillBackgroundColor: '#9b59b6',
    height: '25px',
    radius: '15px'
});
