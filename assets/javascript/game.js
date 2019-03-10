$(document).ready(function (){
    var counter = 0;
    var crystalValues = [10,5,7,3,2,1,8,9];


    // Create a for loop to create a value for each image and every numberOption.
    $('.crystal-img').each( function (){
        var dataValue = crystalValues[Math.floor(Math.random() * crystalValues.length)];
        console.log(dataValue);
        $(this).attr('data-crystal-vaule', dataValue);
        
    });
    


});