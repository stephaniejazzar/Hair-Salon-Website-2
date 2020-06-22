// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://flaviocopes.com/javascript-regular-expressions/
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    var filter = /^\(?(\d{3})\)[-](\d{3})[-](\d{4})$/; ///inspirer de https://stackoverflow.com/questions/19840301/jquery-to-validate-phone-number
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateDebit(txtDebit) {
    var a = document.getElementById(txtDebit).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter =  /^([0-9]{4}[ ]([0-9]){4}[ ]([0-9]){4}[ ]([0-9]{4})?)$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}


// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["06/29/2020","07/01/2020","07/10/2020"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0)
        return [false];
    //Closed on Monday
    if (date.getDay() == 1)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) == -1 ]
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Phone number is in the wrong format");
            $("#phone").val("(xxx)-xxx-xxxx");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });

    //Credit card validation
    $("#debit").on("change", function(){
        if (!validateDebit("debit")){
            alert("Credit card is in the wrong format");
            $("#debit").val("xxxx xxxx xxxx xxxx");
            $("#debit").addClass("error");
        }
        else {
            $("#debit").removeClass("error");
        }
    });
    //hairdresser restrictions
    //Sebastien doesn't work on Wednesdays
    $("#Sebastien").on("click", function(){

         unavailableDates=  ["06/24/2020","07/01/2020","07/08/2020","07/15/2020","07/22/2020","07/29/2020","08/05/2020","08/12/2020","08/19/2020","08/26/2020"];

    });
    //Janette doesn't work on Fridays
    $("#Janette").on("click", function(){

        unavailableDates = ["06/26/2020","07/03/2020","07/10/2020","07/17/2020","07/24/2020","07/31/2020","08/07/2020","08/14/2020","08/21/2020","08/28/2020"];

    });


    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 20th 2020
            minDate: new Date('06/20/2020'),
            maxDate: '+3M',
            // used to disable some dates

            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );

    //Date
    $("#dateInput").on("mouseenter", function(){
        $("#dateInput").addClass("showInput");
    });

    $("#dateInput").on("mouseleave", function(){
        $("#dateInput").removeClass("showInput");
    });

    //firstName
    $("#firstName").on("mouseenter", function(){
        $("#firstName").addClass("showInput");
    });

    $("#firstName").on("mouseleave", function(){
        $("#firstName").removeClass("showInput");
    });


    //lastName
    $("#lastName").on("mouseenter", function(){
        $("#lastName").addClass("showInput");
    });

    $("#lastName").on("mouseleave", function(){
        $("#lastName").removeClass("showInput");
    });
    //phone
    $("#phone").on("mouseenter", function(){
        $("#phone").addClass("showInput");
    });

    $("#phone").on("mouseleave", function(){
        $("#phone").removeClass("showInput");
    });

    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put

    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });


    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

    $("#phone").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

    $("#submitButton").click(function(){
       alert("Your appointment has been submitted successfully.");
    });


});
