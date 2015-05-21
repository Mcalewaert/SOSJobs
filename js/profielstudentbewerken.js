/* jshint
devel: true,
browser: true,
jquery: true
*/

$(document).ready(function(){
    $(".bewerkinformatie").click(function(){
    $(this).parent().next(".beschrijving").children().replaceWith("<form><input class='invoerveld' type='text' autofocus placeholder='test'></form>")
    console.log(this);
$(".invoerveld").blur(function(){
    var waarde = $(".invoerveld").val();
    console.log(waarde);
    $(".invoerveld").replaceWith("<p class='details'>" + waarde + "</p>");
    
})
    });
    




});