$(window).load(function() {
    $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({ default_offset_pct: 0.5 });

});

$(document).ready(function() {
    $(".launchPopupFullscreen").click(function() {
        $('#popupOrdenar').fadeIn();
    });

    $(".closePopupFullscreen").click(function() {
        $('#popupOrdenar').fadeOut();
    });

    $(".launchPopupConfirmacion").click(function() {
        $('#popupConfirmacion').fadeIn();
    });

    $(".closePopupFullscreen").click(function() {
        $('#popupConfirmacion').fadeOut();
    });
});

$.mobile.loading('show', {
    theme: "a",
    text: 'Cargando...',
    textonly: false,
    textVisible: true
});
