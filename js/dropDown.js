
$( document ).ready(function() {
console.log("ok");
    $(".optieKnop").click(function () {
         console.log("ok");   
        $(".orden").animate({display:"block"},400);

        },
        function () {
        console.log("ok");
            $(".orden").hide();
    })
});

