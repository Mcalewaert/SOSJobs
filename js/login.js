/* jshint
devel: true,
browser: true,
jquery: true
*/

$(document).ready(function () {
    $(".empty").keypress(function(){
        console.log("hallo");
        $(this).css("border", "solid 1px #48CFAD");
        
    });
    $(".empty").keyup(function(){
        if($(this).val() === ""){
            console.log
        $(this).css("border", "solid 1px #555555");
        }
        });
});