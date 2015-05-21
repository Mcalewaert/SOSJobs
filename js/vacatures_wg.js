$(function(){
    
    $.mobile.loading().hide();
    
    var isTouchMoving = false;
    
    
    
    var $vacature = $('#list li');
    
    $vacature.on('click',function(e){
        if(isTouchMoving){
            isTouchMoving = false;
            return false;
        }
        
        window.location.href = "vacaturedetail.html";
        
    });
    
    var $listItemIcons = $('.vacature .sliderOnTop .iconList');
    
    
    // SWIPE LEFT
    $vacature.on("swipeleft", function(e){
        isTouchMoving = true;
        
        var alreadyOpenTest = $(this).find('.vacature').css('right');
        alreadyOpenTest = alreadyOpenTest.substring(0,alreadyOpenTest.length-2);
        
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
        isTouchMoving = true;
        var alreadyOpenTest = $(this).css('right');
        alreadyOpenTest = alreadyOpenTest.substring(0,alreadyOpenTest.length-2);
        
        if(alreadyOpenTest!=0){
            $vacature.animate({right:'0'},100,'easeInOutQuad');
            $listItemIcons.animate({opacity:'0'},100,'linear');
        }
    });
    
});
