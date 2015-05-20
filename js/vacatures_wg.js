$(function(){
    
    $.mobile.loading().hide();
    
    var $listItems = $('#list .sliderUnder');
    var $listItemsSwiped = $('#list .sliderOnTop');
    var $listItemsText = $('#list .sliderUnder .text');
    var $listItemIcons = $('#list .sliderOnTop .iconList');
    
    
    // SWIPE LEFT
    $listItems.on("swipeleft", function(e){
        console.log('swipeleft');
        
        var alreadyOpenTest = $(this).parent().find('.sliderOnTop').css('width');
        alreadyOpenTest = alreadyOpenTest.substring(0,alreadyOpenTest.length-2);
        if(alreadyOpenTest>0){
            //nothing happens
        }
        else{
            // RESET ALL ORIGINAL POSITIONS
            $listItemsText.animate({margin:'0 0 0 5%'},200,'easeInOutQuad');
            $listItemsSwiped.animate({width:'0'},200,'easeInOutQuad');
            $listItemIcons.animate({opacity:'0'},100,'linear');

            // MOVE SWIPED ITEM
            $listItemIcons.animate({opacity:'1'},100,'linear');
            $(this).parent().find('.sliderUnder .text').animate({margin:'0 0 0 -15%'},400,'easeOutBounce');
            $(this).parent().find('.sliderOnTop').animate({width: '40%'},400,'easeOutBounce');
        }
        
    });
    
    //SWIPE RIGHT
    $listItems.on("swiperight", function(e){
        var alreadyOpenTest = $(this).parent().find('.sliderOnTop').css('width');
        alreadyOpenTest = alreadyOpenTest.substring(0,alreadyOpenTest.length-2);
        if(alreadyOpenTest>0){
            $listItemIcons.animate({opacity:'0'},100,'linear');
            $listItemsText.animate({margin:'0 0 0 5%'},200,'easeInOutQuad');
            $listItemsSwiped.animate({width:'0'},200,'easeInOutQuad');
        }
    });
    
});