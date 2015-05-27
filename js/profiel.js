/* jshint
devel: true,
browser: true,
jquery: true
*/

$(function(){
    var ID = localStorage.getItem("gebruikersID");
    var IDklant = parseInt(ID);
    var studentID = "";
    if (IDklant == 1){
        studentID = 0;
    }
    else if (IDklant == 2){
        studentID = 1;
    }
    else if (IDklant == 6){
        studentID = 4;
    }
    else if (IDklant == 9){
        studentID = 7;
    }
    else if (IDklant == 5){
        studentID = 3;
    }
    else{
        console.log("error");
    }
    console.log(studentID);
    
    ophalenprofiel();

    function ophalenprofiel(){
        var sendData = {
            url: 'http://www.rachouanrejeb.be/sosjobs/api/users'
        };
        $.ajax({
            url: "http://www.rachouanrejeb.be/sosjobs/api/users", //link van server
            //data: sendData,
            //type: 'POST',
            //dataType: 'JSON',
            success: successHandler,
            error: function(err){console.error(err);}
        });
    
    }
    
    function successHandler(data){
        
        var firstName = data[studentID].name;
        var lastName = data[studentID].last_name;
        var fullName = firstName + " " + lastName;
        var birthDate = data[studentID].birth_date;
        var about = data[studentID].about;
        var streetName = data[studentID].street;
        var streetNumber = data[studentID].number;
        var street = streetName + " " + streetNumber;
        var town = data[studentID].town;
        var zip = data[studentID].zip_code;
        var location = zip + " " + town;
        var country = data[studentID].country;
        var reg = data[studentID].reg_number;
        var study = data[studentID].field_of_study;
        var email = data[studentID].email;
        var image = data[studentID].picture;
        
        $('#name').html(fullName);
        $('#birthdate').html(birthDate);
        $('#location').html(town + ", " + country);
        $('#about').html(about);
        $('#street').html(street);
        $('#town').html(location);
        $('#country').html(country);
        $('#regNumber').html(reg);
        $('#study').html(study);
        $('#email').html(email);
        var url2 = "img/" + image;
        $('#profielimgstudent').attr("src", url2);
        var url = "url(../img/" + image;
        $('#blur').css("background-image", url);
        
    }
    
});