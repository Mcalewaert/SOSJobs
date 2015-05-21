$(function(){
    
    $.mobile.loading().hide();
    
    var $vacature = $('#list li');
    //var $slideUnder = $('.vacature');
    //var $listItemsSwiped = $('.bericht .sliderTop');
    //var $listItemsText = $('#list .sliderUnder .text');
    var $listItemIcons = $('.vacature .sliderOnTop .iconList');
    
    
    // SWIPE LEFT
    $vacature.on("swipeleft", function(e){
        
        var alreadyOpenTest = $(this).find('.vacature').css('right');
        alreadyOpenTest = alreadyOpenTest.substring(0,alreadyOpenTest.length-2);
        console.log(alreadyOpenTest);
        
        if(alreadyOpenTest!=0){
            // do nothing
        }
        else{
            // RESET ALL ORIGINAL POSITIONS
            $vacature.animate({right:'0'},200,'easeInOutQuad');
            $listItemIcons.animate({opacity:'0'},100,'linear');

            // MOVE SWIPED ITEM
            $listItemIcons.animate({opacity:'1'},100,'linear');
            $(this).animate({right:'+=12em'},200,'easeInOutQuad');
        }
        
    });
    
    //SWIPE RIGHT
    $vacature.on("swiperight", function(e){
        var alreadyOpenTest = $(this).css('right');
        alreadyOpenTest = alreadyOpenTest.substring(0,alreadyOpenTest.length-2);
        console.log('right: ' + alreadyOpenTest);
        
        if(alreadyOpenTest!=0){
            $vacature.animate({right:'0'},100,'easeInOutQuad');
            $listItemIcons.animate({opacity:'0'},100,'linear');
        }
    });
    
});
