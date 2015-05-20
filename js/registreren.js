/* jshint
devel: true,
browser: true,
jquery: true
*/

$(document).ready(function(){
    $(".onoffswitch-checkbox").change(function() {
        if(this.checked){
            $("#werkgever").css("color", "#48CFAD");
            $("#student").css("color", "black");
            $("#studentform").fadeOut(0);
            $("#werkgeverform").fadeIn(300);
            
        }
        else{
            $("#student").css("color", "#48CFAD");
            $("#werkgever").css("color", "black");
            $("#werkgeverform").fadeOut(0);
            $("#studentform").fadeIn(300);
            
        }
    });
            
        


});