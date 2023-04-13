
//Business Logic


function convertGToL(number1) {
    return number1 * 3.785;
}




function convertLToG(number2) {
    return number2 / 3.785;
}





function convertTbToMl(number3) {
    return number3 * 15;
}




function convertMlToTb(number4) {
    return number4 / 15;
}




function convertOuToMl(number5) {
    return number5 * 30;
}



function convertMlToOu(number6) {
    return number6 / 30;
}






// User Interface Logic
$(document).ready(function () {
    $("form#operationOne").submit(function (event) {
        const number1 = parseFloat($("#convert1").val());
        const result = convertGToL(number1) + " litres";
        $("#outputOne").text(result);


        event.preventDefault();
    });



    $("form#operationTwo").submit(function (event) {
        const number2 = parseFloat($("#convert2").val());
        const result1 = convertLToG(number2) + " Gallons";
        $("#outputTwo").text(result1);


        event.preventDefault();
    });


    $("form#operationThree").submit(function (event) {
        const number3 = parseFloat($("#convert3").val());
        const result2 = convertTbToMl(number3) + " Millilitres";
        $("#outputThree").text(result2);


        event.preventDefault();
    });


    $("form#operationFour").submit(function (event) {
        const number4 = parseFloat($("#convert4").val());
        const result3 = convertMlToTb(number4) + " Tablespoons";
        $("#outputFour").text(result3);


        event.preventDefault();
    });




    $("form#operationFive").submit(function (event) {
        const number5 = parseFloat($("#convert5").val());
        const result4 = convertOuToMl(number5) + " Millilitres";
        $("#outputFive").text(result4);


        event.preventDefault();
    });


    $("form#operationSix").submit(function (event) {
        const number6 = parseFloat($("#convert6").val());
        const result5 = convertMlToOu(number6) + " Ounces";
        $("#outputSix").text(result5);


        event.preventDefault();
    });

 
});