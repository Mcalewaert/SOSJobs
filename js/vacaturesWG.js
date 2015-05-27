/* jshint
devel: true,
browser: true,
jquery: true
*/

$(document).ready(function () {

    ophalenvacatures();
    
});

    function ophalenvacatures(){
        var sendData = {
            url: 'http://www.rachouanrejeb.be/sosjobs/api/vacancies'
        };
        $.ajax({
            url: "http://www.rachouanrejeb.be/sosjobs/api/vacancies", //link van server
            //data: sendData,
            //type: 'POST',
            //dataType: 'JSON',
            success: successHandler,
            error: onError
        }).done(function(){
            $(".spinner").slideUp();
        });
    
    }
    function successHandler(data) {
        //console.dir(data);
        var htmlvacaturesWG = "";
        for(var i = 0; i < data.length; i++){
            var description = data[i].description;
            
            var index = description.indexOf("</h1>") + 5;
            var result = description.substring(index, description.length);
            var result2 = $(result).text();
            htmlvacaturesWG += "<li><article vacid='" + data[i].id + "' class='vacature'>";
            htmlvacaturesWG += "<div class='sliderUnder'><a href='vacaturedetail.html' class='linkToDetail'><section class='text'><h2>" + data[i].title + "</h2>";
            htmlvacaturesWG += "<p class='beschrijving'>" + result2 + "</p>";
            htmlvacaturesWG += "<p class='datum'>Verloopt " + data[i].to_date + "</p></section></a>";
            htmlvacaturesWG += "<a href='berichtenWG.html' class='messages'><p>0</p></a></div><div class='sliderOnTop'><ul class='iconList'><li class='edit'><img alt='edit icon' src='img/Edit.png'></li>";
            htmlvacaturesWG += "<li class='delete'><img alt='delete icon' src='img/Kruisje.png'></li></ul></div></article></li>";

        }
        $("#list").append(htmlvacaturesWG);
        
        swipe();
    }
                                

    function onError(err) {
        console.dir(err);
    }


