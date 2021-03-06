$(function(){
    
    $.mobile.loading().hide();
    
    swipeBerichten();
    
});


function swipeBerichten(){

    var $berichten = $('.bericht');
    var $slideUnder = $('.bericht .sliderUnder');
    var $listItemsSwiped = $('.bericht .sliderTop');
    //var $listItemsText = $('#list .sliderUnder .text');
    var $listItemIcons = $('.bericht .sliderTop .iconList');
    
    
    // SWIPE LEFT
    $berichten.on("swipeleft", function(e){
        
        var alreadyOpenTest = $(this).css('right');
        alreadyOpenTest = alreadyOpenTest.substring(0,alreadyOpenTest.length-2);
        console.log(alreadyOpenTest);
        
        if(alreadyOpenTest>0){
            $(this).animate({right:'+=1em'},100,'linear',function(){
                $(this).animate({right:'-=1em'},500,'easeOutElastic');
            });
        }
        else{
            // RESET ALL ORIGINAL POSITIONS
            $berichten.animate({right:'0'},200,'easeInOutQuad');
            $listItemIcons.animate({opacity:'0'},100,'linear');

            // MOVE SWIPED ITEM
            $listItemIcons.animate({opacity:'1'},100,'linear');
            $(this).animate({right:'+=8em'},200,'easeInOutQuad');
        }
        
    });
    
    //SWIPE RIGHT
    $berichten.on("swiperight", function(e){
        var alreadyOpenTest = $(this).css('right');
        alreadyOpenTest = alreadyOpenTest.substring(0,alreadyOpenTest.length-2);
        
        if(alreadyOpenTest>0){
            $berichten.animate({right:'0'},100,'easeInOutQuad');
            $listItemIcons.animate({opacity:'0'},100,'linear');
        }
        else{
            $(this).animate({right:'-=1em'},100,'linear',function(){
                $(this).animate({right:'0'},500,'easeOutElastic',function(){
                    //animationDone = true;
                });
            });
        }
    });
    
    $('.delete').click(function(){
        
        var deleteVacature = $(this).parent().parent().parent().parent();
        deleteVacature.fadeOut(500,function(){
            deleteVacature.css({"visibility":"hidden",display:'block'}).slideUp();
        });
        setTimeout(function(){
            deleteVacature.remove();
        }, 800);
        
    });

};