/* jshint
devel: true,
browser: true,
jquery: true
*/
var link = "";
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
    $("#login").click(function(e){
        console.log("geklikt");
        e.preventDefault();
        var gebruiker = $("#gebruiker option:selected").text();
        console.log(gebruiker);
        if(gebruiker == "Siemen Gijbels"){
            console.log("id6");
            localStorage.setItem("gebruikersID", 6);
            link = "vacatures_wg.html";
        }
        else if(gebruiker == "Rachouan Rejeb"){
            console.log("id1");
            localStorage.setItem("gebruikersID", 1);
            link = "vacatures_wg.html";
        }
        else if(gebruiker == "Jef Vastenavondt"){
            console.log("id2");
            localStorage.setItem("gebruikersID", 2);
            link = "vacatures_wg.html";
        }
        else if(gebruiker == "Mathias De Coster"){
            console.log("id9");
            localStorage.setItem("gebruikersID", 9);
            link = "vacaturesWN.html";
        }
        else if(gebruiker == "Jonas Pardon"){
            console.log("id5");
            localStorage.setItem("gebruikersID", 5);
            link = "vacaturesWN.html";
        }
        else{
            console.log("error");
        }
        window.location.href = link;
    
    });
});