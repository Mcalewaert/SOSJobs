/* jshint
devel: true,
browser: true,
jquery: true
*/

var id = "";
$(document).ready(function () {
    var getvacid = localStorage.getItem("vacid");
    console.log(getvacid);
    id = parseInt(getvacid);
    
    getvacancy(id);


});

function getvacancy(id){
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
        var vacaturedetails = "";
        console.dir(data);
        id = data.length - id;
        var description = data[id].description;
            
        var index = description.indexOf("</h1>") + 5;
        var result = description.substring(index, description.length);
        vacaturedetails += "<h2 class='jobvacature'>" + data[id].title + "</h2>";
        vacaturedetails += "<img id='vacatureimg' src='http://lorempixel.com/1000/600/business/' alt='Foto Vacature'>";
        vacaturedetails += "<div class='item'><div class='title'>";
        vacaturedetails += "<img src='img/Location-Marker-128.png' alt='Location'><h2>Locatie</h2>";
        vacaturedetails += "</div><p>" + data[id].location + "</p></div>";
        vacaturedetails += "<div class='item'><div class='title'><img src='img/Calendar-Date-01-128.png' alt='Calendar'><h2>Wanneer</h2>";
        vacaturedetails += "</div><p>Van " + data[id].from_date + " tot " + data[id].to_date + "</p></div>";
        vacaturedetails += "<div class='item'><div class='title'><img src='img/Date-128.png' alt='Deadline'><h2>Deadline</h2></div>";
        vacaturedetails += "<div class='onoffswitch2'><input type='checkbox' name='onoffswitch2' class='onoffswitch-checkbox2' id='myonoffswitch2'><label class='onoffswitch-label2' for='myonoffswitch2'>";
        vacaturedetails += "<span class='onoffswitch-inner2'></span><span class='onoffswitch-switch2'></span></label></div>";
        vacaturedetails += "<h3>Actief</h3><p class='deadline'>Deze Jobaanbieding eindigt op " + data[id].from_date + "</p>";
        vacaturedetails += "</div><div class='item'><div class='title'><img src='img/Clock-01-128.png' alt='Workhours'>";
        vacaturedetails += "<h2>Werkuren</h2></div><p>To be announced!!!</p></div><div class='item'><div class='title'><img src='img/Money-128.png' alt='Salary'>";
        vacaturedetails += "<h2>Salaris</h2></div><p>To be announced!!!</p></div><div class='item'><div class='title'><img src='img/Note-Memo-128.png' alt='Job Description'>";
        vacaturedetails += "<h2>Jobomschrijving</h2></div>" + result + "</div><div class='item noborderline'><div class='title'><img src='img/Newspaper-128.png' alt='Qualifications'>";
        vacaturedetails += "<h2>Vereisten</h2></div><p>Niet van toepassing</p></div>";
        $("#content").append(vacaturedetails);
    }
    function onError(err) {
        console.dir(err);
    }

    