$('#zoomBtn').click(function () {
    $('.zoom-btn-sm').toggleClass('scale-out');
    if (!$('.zoom-card').hasClass('scale-out')) {
        $('.zoom-card').toggleClass('scale-out');
    }
});

$('.zoom-btn-sm').click(function () {
    var btn = $(this);
    var card = $('.zoom-card');
    if ($('.zoom-card').hasClass('scale-out')) {
        $('.zoom-card').toggleClass('scale-out');
    }
});