$(document).ready(function() {
    $('.home').on('click', function() {
        $('#loadingOverlay').fadeIn();
        setTimeout(function() {
            window.location.href = '../index.html';}, 2000); 
    });
});