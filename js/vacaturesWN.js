$(function () { 
    
    ophalenvacatures();
    
    $(".stagevacatures").hide();

    $(".jobs").click(function(){
            $(".jobs").addClass("active");
            $(".stages").removeClass("active");
            $(".jobvacatures").fadeIn();
            $(".stagevacatures").hide();
    });  

    $(".stages").click(function(){
         $(".stages").addClass("active");
         $(".jobs").removeClass("active");
         $(".jobvacatures").hide();
         $(".stagevacatures").fadeIn();
    }); 
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
    });
}

function successHandler(data) {
    var htmlvacatures = "";
    for(var i = 0; i < data.length; i++){
        var description = data[i].description;
        var index = description.indexOf("</h1>") + 5;
        var result = description.substring(index, description.length);
        var result2 = $(result).text();
        
        htmlvacatures += "<div class='vacature' id='" + data[i].id + "'><img class='ster' src='img/sterleeg.png' alt='star'>";
        htmlvacatures += "<h3>" + data[i].title + "</h3>";
        htmlvacatures += "<p>" + result2 + "</p>";
        htmlvacatures += "<p class='datum'>Verloopt " + data[i].to_date + "</p>";
        htmlvacatures += "</div>";
    }
    $(".jobvacatures #5km").append(htmlvacatures);
    
    extraFuncties();
}

function onError(err) {
    console.error(err);
}

function extraFuncties(){
    $(".ster").click(function(){
        var source = $(this).attr("src");
        if(source == "img/sterleeg.png"){
            $(this).attr("src", "img/ster.png");
        } else {
            $(this).attr("src", "img/sterleeg.png");
        }
    });
}

/*
<div class="vacature">
<img class="ster" src="img/sterleeg.png" alt="star">
<h3>Sales Associate</h3> 
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium cumque expedita et eligendi facilis dolor molestiae, velit nisi iure. Corporis unde ad consequuntur cupiditate nobis, aliquam quos eveniet dolor ut.</p> 
<p class="datum">Verloopt 29/05/2015</p>
</div>
*/