$(document).ready(function () {

var open = false;
    

    $(".optieKnop").click(function () {  
    if(open ==false){
        $(".orden").stop().slideDown();
        $(".klik").show();    
        open = true;
    }
        
    else if(open == true){
        $(".orden").stop().slideUp();
        $(".klik").hide();     
        open = false;
    }    
        
        
    });

    
    $(".klik").click(function () {
    if(open==true){
        $(".orden").stop().slideUp();
        $(".klik").hide();
    }
    }); 
       
        });