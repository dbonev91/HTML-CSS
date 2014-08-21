$(document).ready(function() {
    function keyboard() {
        var keyboard="";
        keyboard+="<table class='nesy' border='1'><tr>";
        for (var i = 1; i < 17; i++) {
            keyboard+="<td class='buttonHolder'>"
            keyboard+="<button id='button' class='button'>";
            if (i > 0 && i <= 3) {
                keyboard+=i;
            }
            else if (i == 4) {
                keyboard+="+";
            }
            else if (i > 4 && i <= 7) {
                keyboard+=i-1;
            }
            else if (i == 8) {
                keyboard+="-";
            }
            else if (i > 8 && i <= 11) {
                keyboard+=i-2;
            }
            else if (i == 12) {
                keyboard+="*";
            }
            else if (i == 13) {
                keyboard+="C";
            }
            else if (i == 14) {
                keyboard+=0;
            }
            else if (i == 15) {
                keyboard+="=";
            }
            else if (i == 16) {
                keyboard+="/";
            }
            keyboard+="</button>";
            keyboard+="</td>";
            if (i % 4 == 0 && i<16) {
                keyboard+="</tr><tr>";
            }
        }
        keyboard+="</tr></table>";
        return keyboard;
    }
    function clicker(event){
        var clicked=event.target.innerHTML;
        append(clicked);
    }
    function append(val){
        if(val=="+" || val=="-" || val=="*" || val=="/"){
            if($(".screenField").val()[$(".screenField").val().length-1]=="+"
                || $(".screenField").val()[$(".screenField").val().length-1]=="-"
                || $(".screenField").val()[$(".screenField").val().length-1]=="*"
                || $(".screenField").val()[$(".screenField").val().length-1]=="/"
                || $(".screenField").val().length==0) {
                   $(".screenField").val($(".screenField").val());
                return;
            }
        }
        if(val=="C"){
            $(".screenField").val("");
        }
        else if(val=="="){
            var result=eval($(".screenField").val());
            $(".screenField").val(result);
        }
        else {
            var currentVal=$(".screenField").val($(".screenField").val() + val);
        }
    }
    document.getElementById("keyBoardHolder").innerHTML = keyboard();
    $("button").on("click", clicker);
});