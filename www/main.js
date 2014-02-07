/**
* FILE : main.js
* WRITER: Lev Kazakov leva 306688904
* EXERCISE : INTERNET TECHNOLOGIES ex2 2013-2014
*
* DESCRIPTION : the js engine of the project
* .
*/

$(document).ready(function() {
    $("#username").focus();
    // animation logic
    $("#send").click(
        function(){ 
                if ( $("#username").val() === "admin" &&  $("#password").val() === "admin") {
                    $("#ex1 section").hide("slow", function(){ 
                        $("#ex1 section").remove(); 
                    }); 
                    $("#ex1 footer").hide("slow", function(){ 
                        $("#ex1 footer").remove(); 
                    }); 
                    $("#ex2").show("slow");
                }
               return false; 
        }
    );
    
    $("#settings").click(function(){
        $(".popup").slideToggle("slow");
        $("#def").focus();
        return false;
    });
    
    // calc logic
    myCalc = new calc();

    function updateScreen(){
        $("#screen").text(myCalc.getCurrent());
    }
    
    function initIn(){
        $("#in").val(myCalc.getDefault());
    }
    
    function initDef(){
        $("#def").val(myCalc.getDefault());
    }
    
    // initialization
    updateScreen();
    initIn();
    initDef();
    
    // input validation
    digitOffset = 48;
    function validateInput(event){
        if (event.which < 0 + digitOffset || event.which > 9 + digitOffset) {
                alert("Only non-negative numbers allowed!");
                return false;
            }
    }
    $("#in").keypress(validateInput);
    
    // clear event
    function clear(event){
        myCalc.clear();
        updateScreen();
        $("#in").val("");
    }
    $("#clear").click(clear);
    
    
    function isEmpty(string){
        if (!string) {
            return true;
        }
        return false;
    }
    
    // updating default value event
    // the only invalid input can be an empty string
    function updateDef(event) {
        if (isEmpty($("#def").val())) {
            num = 0;
        } else if (/^-?\d+$/.test($("#def").val())) {
            num = parseInt($("#def").val(), 10);
        } else {
            alert("please input a numeric value!");
            return false;
        }
        myCalc.setDefault(num);
        $("#settings").trigger("click");
    }
    $("#OK").click(updateDef);
    
    // add event
    function add(event) {
        if (isEmpty($("#in").val())) {
            num = 0;
        } else {
            num = parseInt($("#in").val(), 10);
        }
        myCalc.add(num);
        updateScreen();
    }
    $("#add").click(add);
    
    // mult event
    function mult(event) {
        if (isEmpty($("#in").val())) {
            num = 0;
        } else {
            num = parseInt($("#in").val(), 10);
        }
        myCalc.mult(num);
        updateScreen();
    }
    $("#mult").click(mult);
});
