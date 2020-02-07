document.addEventListener('DOMContentLoaded', function() {
    const $container = $('.projects');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.filterBox a').click(function(){
        $('.filterBox .current').removeClass('current');
        $(this).addClass('current');
 
        const selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });
});