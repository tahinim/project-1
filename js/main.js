var $btnShow = $('.btn-show-hide');
var $box = $('.box');

$btnShow.on ('click', function() {
    $box.toggleClass('js-box-show-hide');
});
