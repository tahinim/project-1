
var $btnExpand = $('.btn-collapse-expand');
var $panel = $('.panel');

$btnExpand.on ('click', function () {
    $panel.toggleClass('js-panel-collapse-expand');
});


var $btnExpandTwo = $('.btn-collapse-expandtwo');
var $paneltwo = $('.paneltwo');

$btnExpandTwo.on ('click', function () {
    $paneltwo.toggleClass('js-paneltwo-collapse-expand');
});


var $btnExpandThree = $('.btn-collapse-expandthree');
var $panelthree = $('.panelthree');

$btnExpandThree.on ('click', function () {
    $panelthree.toggleClass('js-panelthree-collapse-expand');
});
