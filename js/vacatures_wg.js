$(function(){
    
    $.mobile.loading().hide();
    
    var $listItems = $('#list .sliderUnder');
    var $listItemsSwiped = $('#list .sliderOnTop');
    
    $listItems.on("swipeleft", function(e){
        console.log('swipeleft');
        $listItemsSwiped.animate({
            width: '0'
        },200,'easeInOutQuad');
        $(this).parent().find('.sliderOnTop').animate({
            width: '40%'
        },600,'easeOutBounce');
    });
    $listItems.on("swiperight", function(e){
        $listItemsSwiped.animate({
            width: '0'
        },200,'easeInOutQuad');
    });
    
    
    
    
});