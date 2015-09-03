var button_last;
$(document).ready(function(){
    var time_last = $(event.timeStamp)[0];
    var time_spent = 1000;
    $("#phone").find("button").mouseup(function(event){
        var button_pressed = $(event.currentTarget).data("value");
        $("#result").val(t9($("#result").val(),button_pressed,time_last,button_last));
        time_last = $(event.timeStamp)[0];
    })
});
function time_span(time_last){
    time_spent = $(event.timeStamp)[0] - time_last;
    return time_spent;
}
function t9(text,button_pressed,time_last,button_last){
    time_spent = time_span(time_last);
    if( button_pressed !="*" && button_pressed != "#" && button_pressed != "0" && window.button_last == button_pressed && time_spent < 800 ){
        var initial = text.substr(0,text.length-1);
        var last = text.substr(text.length-1);
        last = change_last(last);
        text = initial + last;
        window.button_last = button_pressed;
        return text;
    }
    else{
        text = text + button_pressed;
        window.button_last = button_pressed;
        return text;
    }
}
function change_last(last){
    switch(last){
        case "1":
            return ".";
            break;
        case ".":
            return ",";
            break;
        case ",":
            return "!";
            break;
        case "!":
            return "1";
            break;


        case "2":
            return "a";
            break;
        case "a":
            return "b";
            break;
        case "b":
            return "c";
            break;
        case "c":
            return "2";
            break;


        case "3":
            return "d";
            break;
        case "d":
            return "e";
            break;
        case "e":
            return "f";
            break;
        case "f":
            return "3";
            break;


        case "4":
            return "g";
            break;
        case "g":
            return "h";
            break;
        case "h":
            return "i";
            break;
        case "i":
            return "4";
            break;

        case "5":
            return "j";
            break;
        case "j":
            return "k";
            break;
        case "k":
            return "l";
            break;
        case "l":
            return "5";
            break;

        case "6":
            return "m";
            break;
        case "m":
            return "n";
            break;
        case "n":
            return "o";
            break;
        case "o":
            return "6";
            break;

        case "7":
            return "p";
            break;
        case "p":
            return "q";
            break;
        case "q":
            return "r";
            break;
        case "r":
            return "s";
            break;
        case "s":
            return "7";
            break;

        case "8":
            return "t";
            break;
        case "t":
            return "u";
            break;
        case "u":
            return "v";
            break;
        case "v":
            return "8";
            break;


        case "9":
            return "w";
            break;
        case "w":
            return "x";
            break;
        case "x":
            return "y";
            break;
        case "y":
            return "z";
            break;
        case "z":
            return "9";
            break;

    }
}