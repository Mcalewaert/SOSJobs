/* jshint
devel: true,
browser: true,
jquery: true
*/

$(document).ready(function(){
    $(".bewerkinformatie").click(function(){
    var text1 = " ";   
    text1 = window.prompt("please enter blabla")
        console.log(text1);
    $(this).parent().next(".beschrijving").children().text(text1);
    });




});