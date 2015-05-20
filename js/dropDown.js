jQuery(document).ready(function ($) {

var open = false;
    

    $(".optieKnop").click(function () {  
    if(open ==false){
    $(".orden").slideDown();
    $(".klik").show();    
    open = true;
    }
        
    else if(open ==true){
    $(".orden").slideUp();
    $(".klik").hide();     
    open = false;
    }    
        
        
    })
    
    
    $(".klik").click(function () {
    if(open==true){
    $(".orden").slideUp();
    }
    })
    

       
       
       
        });