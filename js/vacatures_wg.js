$(function(){
    
    $.mobile.loading().hide();
    
    var $listItems = $('#list .sliderUnder');
    var $listItemsSwiped = $('#list .sliderOnTop');
    
    $listItems.on("swipeleft", function(e){
        console.log('swipeleft');
        $listItemsSwiped.animate({
            width: '0'
        },200,'linear');
        $(this).parent().find('.sliderOnTop').animate({
            width: '40%'
        },200,'linear');
    });
    $listItems.on("swiperight", function(e){
        $listItemsSwiped.animate({
            width: '0'
        },200,'linear');
    });
    
    
    
    
});