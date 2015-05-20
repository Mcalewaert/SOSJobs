$(function(){
    
    $.mobile.loading().hide();
    
    var $listItems = $('#list .sliderUnder');
    var $listItemsSwiped = $('#list .sliderOnTop');
    var $listItemsText = $('#list .sliderUnder .text');
    
    $listItems.on("swipeleft", function(e){
        console.log('swipeleft');
        
        // RESET ALL ORIGINAL POSITIONS
        $listItemsText.animate({margin:'0 0 0 5%'},200,'easeInOutQuad');
        $listItemsSwiped.animate({width:'0'},200,'easeInOutQuad');
        
        //MOVE SWIPED ITEM
        $(this).parent().find('.sliderUnder .text').animate({margin:'0 0 0 -15%'},400,'easeOutBounce');
        $(this).parent().find('.sliderOnTop').animate({width: '40%'},400,'easeOutBounce');
    });
    $listItems.on("swiperight", function(e){
        $listItemsText.animate({margin:'0 0 0 5%'},200,'easeInOutQuad');
        $listItemsSwiped.animate({width:'0'},200,'easeInOutQuad');
        
    });
    
});