$(function(){
    
    $.mobile.loading().hide();
    
    var isTouchMoving = false;
    
    var $vacature = $('#list li');
<<<<<<< HEAD
    var $vacatureLink = $('#list li .sliderUnder');
    
    $vacatureLink.on('tap',function(e){
        console.log('vacature link geklikt');
        console.log(isTouchMoving);
        if(isTouchMoving){
            isTouchMoving = false;
            return false;
=======
    var $vacatureLink = $('#list li .linkToDetail');
    var $listItemIcons = $('.vacature .sliderOnTop .iconList');
    
    $vacature.find('.vacature').css({right:'0'});
    
    $vacatureLink.on('tap', function(e){
        
        e.preventDefault();
        
        var link = $(this).attr('href');
        
        if(link != "#"){
            
            //console.log('CHANGE PAGE TO: ' + link );
            
            window.location.href = link;
            
        }
        else{
            console.log('Link disabled');
>>>>>>> origin/master
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
            isTouchMoving = false;
            return false;
        }
        else{
            // RESET ALL ORIGINAL POSITIONS
            $vacature.animate({right:'0'},200,'easeInOutQuad');
            $listItemIcons.animate({opacity:'0'},100,'linear');

            // MOVE SWIPED ITEM
            $listItemIcons.animate({opacity:'1'},100,'linear');
            $(this).animate({right:'+=12em'},200,'easeInOutQuad',function(){
                isTouchMoving = false;
                return false;
            });
        }
        return false;
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
        isTouchMoving = false;
        return false;
    });
    
    
});
