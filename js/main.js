var $btnShow = $('.btn-show-hide');
var $box = $('.box');

$btnShow.on ('click', function() {
    $box.toggleClass('js-box-show-hide');
});

var $btnExpand = $('.btn-collapse-expand');
var $panel = $('.panel');

$btnExpand.on ('click', function () {
    $panel.toggleClass('js-panel-collapse-expand');
});


var $btnmove = $('.btn-move');
var $pink = $('.diamond');

$btnmove.on ('click',function () {
    $pink.toggleClass ('js-diamond-slide');
});
