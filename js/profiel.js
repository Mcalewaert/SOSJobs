/* jshint
devel: true,
browser: true,
jquery: true
*/

$(function(){
    
    var studentID = 1;
    
    ophalenprofiel();

    function ophalenprofiel(){
        var sendData = {
            url: 'http://www.rachouanrejeb.be/sosjobs/api/users'
        };
        $.ajax({
            url: "crosscall.php", //link van server
            data: sendData,
            type: 'POST',
            dataType: 'JSON',
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
        
    }
    
});