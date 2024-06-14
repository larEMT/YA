function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
}

var scrollTop = 0;
$(document).ready(function() {
    $("header").css('background-color', 'rgba(99, 97, 97, 0)');
    var Height = $('.content').outerHeight(true);
    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop();
        if (scrollPosition > Height-10) {
            $("header").css('background-color', 'rgba(99, 97, 97, 1)');
        } else {
            $("header").css('background-color', 'rgba(99, 97, 97, 0)');
        }
    });

    $('.home').on('click', function() {
        $('#loadingOverlay').fadeIn();
        setTimeout(function() {
            window.location.href = 'index.html';}, 2000);
    });

    $(".more-info").click(function() {
        var chose = $(this).find('p').text().trim();
        console.log(chose);
        if(chose == "興趣&愛好"){
            window.location.href = 'page/interest.html';}
        else if(chose == "專長"){
            window.location.href = 'page/specialty.html';}
        else if(chose == "技能"){
            window.location.href = 'page/skill.html';}
        else if(chose == "推薦"){
            window.location.href = 'page/nice.html';}
    });

    $('.more-info').hover(
        function() {
            $(this).css('box-shadow', '0 4px 8px rgba(0, 0, 0, 0.2)');
            $(this).css('background', 'linear-gradient(45deg, #e74c3c, #3498db)');
        },
        function() {
            $(this).css('box-shadow', 'none');
            $(this).css('background', 'rgb(229, 229, 229)');
        }
    );
});