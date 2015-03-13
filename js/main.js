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
