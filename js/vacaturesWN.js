$(document).ready(function () { 
    
    $(".stagevacatures").hide();

    $(".jobs").click(function(){
            $(".jobs").addClass("active");
            $(".stages").removeClass("active");
            $(".jobvacatures").fadeIn();
            $(".stagevacatures").hide();
    });  

    $(".stages").click(function(){
         $(".stages").addClass("active");
         $(".jobs").removeClass("active");
         $(".jobvacatures").hide();
         $(".stagevacatures").fadeIn();
    }); 
    
    $(".ster").click(function(){
        var source = $(this).attr("src");
        if(source == "img/sterleeg.png"){
            $(this).attr("src", "img/ster.png");
        } else {
            $(this).attr("src", "img/sterleeg.png");
        }
    });
});