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
            url: "crosscall.php", //link van server
            data: sendData,
            type: 'POST',
            dataType: 'JSON',
            success: successHandler,
            error: onError
        });
    
    }
    function successHandler(data) {
        console.dir(data);
        var htmlvacaturesWG = "";
        for(var i = 0; i < data.length; i++){
            var description = data[i].description;
            
            var index = description.indexOf("</h1>") + 5;
            var result = description.substring(index, description.length);
            var result2 = $(result).text();
            htmlvacaturesWG += "<li><article id='" + data[i].id + "' class='vacature'><a href='vacaturedetail.html' class='linkToDetail'>";
            htmlvacaturesWG += "<div class='sliderUnder'><section class='text'><h2>" + data[i].title + "</h2>";
            htmlvacaturesWG += "<p class='beschrijving'>" + result2 + "</p>";
            console.log(result2);
            htmlvacaturesWG += "<p class='datum'>Verloopt " + data[i].to_date + "</p>";
            htmlvacaturesWG += "<a href='berichtenWG.html' class='messages'><p>0</p></a></div></a><div class='sliderOnTop'><ul class='iconList'><li class='edit'><img alt='edit icon' src='img/Edit.png'></li>";
            htmlvacaturesWG += "<li class='delete'><img alt='delete icon' src='img/Kruisje.png'></li></ul></div></article></li>";

        }
        $("#list").append(htmlvacaturesWG);
        
    }
                                

    function onError(err) {
        console.dir(err);
    }
    /*<li>
                    <article class="vacature">
                        <a href="vacaturedetail.html" class="linkToDetail">
                            <div class="sliderUnder">
                                <section class="text">
                                    <h2>Verkoper</h2>
                                    <p class="beschrijving">Voor een bedrijf in Mechelen zoeken we studenten die een bijverdienste zoeken tijdens het jaar in de week. (Dit is geen weekendwerk). Werkuren zijn gelegen tussen maandag en vrijdag tussen 17u en ...</p>
                                    <p class="datum">verloopt 30/06/15</p>
                                </section>
                                <a href="berichtenWG.html" class="messages">
                                    <p>0</p>
                                </a>
                            </div>
                        </a>
                        <div class="sliderOnTop">
                            <ul class="iconList">
                                <li class="edit"><img alt="edit icon" src="img/Edit.png"></li>
                                <li class="delete"><img alt="delete icon" src="img/Kruisje.png"></li>
                            </ul>
                        </div>
                    </article>
                </li>*/




