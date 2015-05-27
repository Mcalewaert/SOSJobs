$(function(){
    
    $.mobile.loading().hide();
    swipe();
});



function swipe(){
    
    var animationDone = true;
    
    var oldLink = "";
    var $vacature = $('#list li');
    var $vacatureLink = $('#list li .linkToDetail');
    var $listItemIcons = $('.vacature .sliderOnTop .iconList');
    
    $vacature.find('.vacature').css({right:'0'});
    
    $vacatureLink.on('tap', function(e){
        
        e.preventDefault();
        
        console.log("tapped");
        
        var link = $(this).attr('href');
        
        if(link != "#"){
            
            //console.log('CHANGE PAGE TO: ' + link );
            
            var vacid = $(this).parent().parent().attr('vacid');
            
            localStorage.setItem("vacid",vacid);
            
            window.location.href = link;
            
        }
        else{
            console.log('Link disabled');
        }
        
    });
    
    // SWIPE
    //  left
    $vacature.on('swipeleft', function(e){
        
        // haal oude link op uit html
        oldLink = $(this).find('.linkToDetail[href]').attr('href');
        
        //plaats oude link in nieuwe attribuut
        $(this).find('.linkToDetail[href]').attr('hrefold',oldLink);
        
        // maak link in html leeg, disable
        $(this).find('.linkToDetail[href]').attr('href', "#");
        
        console.log('SWIPED LEFT');
        
        
        
        var alreadyOpenTest = $(this).css('right');
        alreadyOpenTest = alreadyOpenTest.substring(0,alreadyOpenTest.length-2);
        
        
        // TEST IF VAC IS ALREADY SWIPED OPEN
        if(alreadyOpenTest>0){
            $(this).animate({right:'+=1em'},100,'linear',function(){
                $(this).animate({right:'-=1em'},500,'easeOutElastic',function(){
                    
                    
                    
                });
            });
            return false;
        }
        
        // RESET ORIGINAL POSITIONS
        $vacature.animate({right:'0'},200,'easeInOutQuad');
        $listItemIcons.animate({opacity:'0'},100,'linear');
        
        // MOVE SWIPED ITEMS
        $listItemIcons.animate({opacity:'1'},100,'linear');
        $(this).animate({right:'+=12em'},200,'easeInOutQuad');
        
        return false;
        
    });
    //  right
    $vacature.on('swiperight', function(e){
        
        var alreadyOpenTest = $(this).css('right');
        alreadyOpenTest = alreadyOpenTest.substring(0,alreadyOpenTest.length-2);
        
        if(alreadyOpenTest>0){
            $(this).animate({right:'0'},100,'easeInOutQuad');
            $(this).find('.vacature .sliderOnTop .iconList').animate({opacity:'0'},100,'linear');
            
            oldLink = $(this).find('.linkToDetail[href]').attr('hrefold');
            $(this).find('.linkToDetail[href="#"]').attr('href',oldLink);
            console.log("SWIPED RIGHT");
            return false;
        }
        else{
            
            //if(animationDone){
                
                $(this).animate({right:'-=1em'},100,'linear',function(){
                    $(this).animate({right:'0'},500,'easeOutElastic',function(){
                        //animationDone = true;
                    });
                });
            //}
        }
        
        return false;
        
    });
    
    $('.delete').click(function(){
        
        var deleteVacature = $(this).parent().parent().parent().parent();
        deleteVacature.fadeOut(500,function(){
            deleteVacature.css({"visibility":"hidden",display:'block'}).slideUp();
        });
        setTimeout(function(){
            deleteVacature.remove();
        }, 800);
        //deleteVacature.remove();
        
    });
    
   
    
}