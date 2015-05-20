jQuery(document).ready(function ($) {

var open = false;
    

    $(".optieKnop").click(function () {  
    if(open ==false){
    $(".orden").slideDown();
    open = true;
    }
        
    else if(open ==true){
    $(".orden").slideUp();
    open = false;
    }    
        
        
    })
    
    
    $(".klik").click(function () {
    if(open==true){
    $(".orden").slideUp();
    }
    })
    

       
       
       
        });