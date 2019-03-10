$(document).ready(function (){
    var wins = 0;
    var losses =0;
    var playerScore = 0;

    
    // generates a random number integer inclusively at min and max.
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    // create a for loop to create a value for each image and every numberOption.
    $('.crystal-img').each( function (){
        //var dataValue = crystalValues[Math.floor(Math.random() * crystalValues.length)];
        var dataValue = getRandomInt(1,12);
        console.log('Crystal value ' , dataValue);
        // sends value to the html
        $(this).attr('data-crystal-value', dataValue);
        
    });

    // gets and sends a randomly generated number to html
    var randomNumber = getRandomInt(19,120);
    $('#randomnumber-text').text(randomNumber);
    console.log('Number to Match :', randomNumber);

    // hides instructions and displays game on click of button
    $('.btn').on('click', function() {
        $('.game' ).toggleClass( 'd-none');
        $('.jumbotron-fluid').toggleClass('d-none');
    });
    

    // gets data value of crystal on click
    $(".crystal-img").on('click', function() {
        var getCrystalValue = ($(this).attr('data-crystal-value'));
        getCrystalValue = parseInt(getCrystalValue);
        console.log('The Crystals vale when clicked: ', getCrystalValue);
        playerScore += getCrystalValue;
        console.log('This is the current score: ', playerScore);
        $('playertotal-text').text(playerScore);

        // determin if the player wins or loses
        if (playerScore === randomNumber) {
            // increment wins counter
            wins++;
            $('wins-text').text(wins);
        } else if (playerScore >= randomNumber) {
            // increment losses counter
            losses++;
            $('losses-text').text(losses);
            $('.modal').trigger('focus');

        }
    });
    
    


});