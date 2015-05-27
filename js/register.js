/* jshint
devel: true,
browser: true,
jquery: true
*/

var longitude = " ";
var lattitude = " ";
$(document).ready(function () {
        
    $("#registreerknop").click(function () {
        if($(".onoffswitch-checkbox").is(':checked')){
            registreerEmployer();
        }
        else{
            var inputvelden = document.getElementsByTagName("input");
            for (var i = 0; i < 11; i++) {
                if(inputvelden[i].value == ""){
                    inputvelden[i].style.borderColor = "red";
                }
                else{
                    inputvelden[i].style.borderColor = "#48CFAD";
                }
            
            }
            var selectvelden = document.getElementsByTagName("select");
            for (var i = 0; i < selectvelden.length; i++) {
                if(selectvelden[i].value == "Land" || selectvelden[i].value == "Geslacht"){
                    selectvelden[i].style.borderColor = "red";
                }
                else{
                    selectvelden[i].style.borderColor = "#48CFAD";
                }
            
            }
                
                
            getlocation();
        }
    });



    });
    function registreerEmployer(){
    }


    function registreerUser(lokatie) { //regnumber werkt niet en geboortedatum ook niet

        var data = {
            name: $('#voornaam').val(),
            last_name: $('#naam').val(),
            password: $('#paswoord').val(),
            email: $('#email'),
            reg_number: $('#rijksregisternummer').val(),
            gender: $('#geslacht option:selected').text(),
            birth_date: $('#geboortedatum').val(),
            confirmPassword: $("#paswoord2").val(),
            field_of_study: 'nvt',
            phone: 'nvt',
            street: $("#straat").val(),
            number: 'nvt',
            zip_code: $("#postcode").val(),
            town: $("#gemeente").val(),
            country: $("#land option:selected").text(),
            picture: 'nvt',
            about: 'nvt',
            about_extra: 'nvt',
            latitude: lokatie.lattitude,
            longitude: lokatie.longitude
        };
        var stringData = jsonToPost(data);
        var sendData = {
            url: 'http://dtprojecten.ehb.be/~sosjobs/api/index.php/insertUser',
            postData: stringData
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
    }

    function onError(err) {
        console.dir(err);
    }

    function jsonToPost(string) { //van object naar string via JSON naar POST-String met "replace" 
        string = JSON.stringify(string);
        string = string.replace(/\&/g, /\u0026/);
        string = string.replace(/\"/g, '');
        string = string.replace(/:/g, '=');
        string = string.replace('{', '');
        string = string.replace(/,/g, '\&');
        string = string.replace('}', '');
        return string;
    }

    function getlocation(){
        var adresstraat = $("#straat").val();
        var adresgemeente = $("#gemeente").val();
        var adresland = $("#land option:selected").text();
        var adres = adresstraat + ", " + adresgemeente + ", " + adresland;

        $.post('https://maps.googleapis.com/maps/api/geocode/json?address=' + adres + '&key=AIzaSyCWpvTcaULkVpMfT4rf_-0JXdXzxIYi4ng', function(data, status){
            longitude = (data.results[0].geometry.location.lng);
            lattitude = (data.results[0].geometry.location.lat);
            var obj = {lattitude: '' + lattitude, longitude: ''+ longitude};
            registreerUser(obj);
        });

    }