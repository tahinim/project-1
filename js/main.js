
var $btnExpand = $('.btn-collapse-expand');
var $panel = $('.panel');

$btnExpand.on ('click', function () {
    $panel.toggleClass('js-panel-collapse-expand');
});


var $btnExpand = $('.btn-collapsetwo-expand');
var $paneltwo = $('.paneltwo');

$btnExpand.on ('click', function () {
    $paneltwo.toggleClass('js-paneltwo-collapse-expand');
});


var $btnExpand = $('.btn-collapsethree-expand');
var $panelthree = $('.panelthree');

$btnExpand.on ('click', function () {
    $panelthree.toggleClass('js-panelthree-collapse-expand');
});
