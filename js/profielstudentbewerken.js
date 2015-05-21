/* jshint
devel: true,
browser: true,
jquery: true
*/

$(document).ready(function () {
    $(".bewerkinformatie").click(function () {
        $(this).parent().next(".beschrijving").children().replaceWith("<form><input class='invoerveld' type='text'></form>");
        $('input').focus();
        $(".invoerveld").blur(function(){
                  var waarde = $(".invoerveld").val();  
                    console.log(waarde);
        $(this).replaceWith("<p class='details'>" + waarde + "</p>");     
        });

});
        $(".bewerkinformatiedatum").click(function () {
        $(this).parent().next(".beschrijving").children().replaceWith("<form><input class='invoerveld' type='date'></form>");
        $('input').focus();
        $(".invoerveld").blur(function(){
                  var waarde = $(".invoerveld").val();  
                    console.log(waarde);
        $(this).replaceWith("<p class='details'>" + waarde + "</p>");     
        });

});
            $(".bewerkinformatieemail").click(function () {
        $(this).parent().next(".beschrijving").children().replaceWith("<form><input class='invoerveld' type='email'></form>");
        $('input').focus();
        $(".invoerveld").blur(function(){
                  var waarde = $(".invoerveld").val();  
                    console.log(waarde);
        $(this).replaceWith("<p class='details'>" + waarde + "</p>");     
        });

});
});