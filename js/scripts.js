



function convertGToL(number1) {
    return number1 * 3.785;
}
// const number3 = parseFloat(prompt("Enter A Number In Gallons:"));
// const result = convertGToL(number3);
// alert(result + "l");



function convertLToG(number2) {
    return number2 / 3.785;
}
// const number4 = parseFloat(prompt("Enter A Number In Liters:"));
// const result1 = convertLToG(number4);
// alert(result1);



function convertTbToMl(number3) {
    return number3 * 15;
}
// const number5 = parseFloat(prompt("Enter A Number In Tablespoon:"));
// const result2 = convertTbToMl(number5);
// alert(result2 + "ml");


function convertMlToTb(number4) {
    return number4 / 15;
}
// const number6 = parseFloat(prompt("Enter A Number In Milliliters:"));
// const result3 = convertMlToTb(number6);
// alert(result3);


function convertOuToMl(number5) {
    return number5 * 30;
}
// const number7 = parseFloat(prompt("Enter A Number In Ounces:"));
// const result4 = convertOuToMl(number7);
// alert(result4 + "ml");

function convertMlToOu(number6) {
    return number6 / 30;
}
// const number8 = parseFloat(prompt("Enter A Number In Milliliters:"));
// const result5 = convertMlToOu(number8);
// alert(result5);





// user logic
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