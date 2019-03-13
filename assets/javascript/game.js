
var wins = 0;
var losses = 0;
var playerScore = 0;
var youLose = 'You lost! Try again!';
var youWin = 'You won! Keep going!';
// gets and sends a randomly generated number to html
var randomNumber = getRandomInt(19, 120);
console.log('Number to Match :', randomNumber);
// function to generate a random number integer inclusively at min and max.
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// create a for loop to create a value for each image and every numberOption.
function assignCrystalValue() {
    $('.crystal-img').each(function () {
        //var dataValue = crystalValues[Math.floor(Math.random() * crystalValues.length)];
        var dataValue = getRandomInt(1, 12);
        console.log('Crystal value ', dataValue);
        // sends value to the html
        $(this).attr('data-crystal-value', dataValue);
    });
}
// set game values in html
function setGameValues() {
    $('#randomnumber-text').text(randomNumber);
    $('#playertotal-text').text(playerScore);
    $('#wins-text').text(wins);
    $('#losses-text').text(losses);
}
// displays the game status of when the player wins a round or loses 
function status(statusText) {
    $('.modal').modal({
        show: true,
        backdrop: "static"
    });
    $('#status-text').text(statusText);
};
// allow player to continue the game and resets player score and random number
function continueGame() {
    playerScore = 0;
    randomNumber = getRandomInt(19, 120);
    assignCrystalValue();
    $('#playertotal-text').text(0);
    $('#randomnumber-text').text(randomNumber);
    console.log("Player Score:", playerScore, "New Random number", randomNumber);
};
// Hard reset of the game with out refreshing the page
function restartGame() {
    wins = 0;
    losses = 0;
    playerScore = 0;
    randomNumber = getRandomInt(19, 120);
    assignCrystalValue();
    setGameValues();
    console.log("Player Score:", playerScore, "New Random number", randomNumber, "Wins ", wins, "Losses", losses);
};
$(document).ready(function () {
    // called functions to start the game
    assignCrystalValue();
    setGameValues();
    // gets data value of crystal on click
    $(".crystal-img").on('click', function () {
        var getCrystalValue = ($(this).attr('data-crystal-value'));
        // gets data from html and convert to integer
        getCrystalValue = parseInt(getCrystalValue);
        console.log('The Crystals value when clicked: ', getCrystalValue);
        // adds the clicked crystal value to the player's total score
        playerScore += getCrystalValue;
        console.log('This is the current score: ', playerScore);
        // updates html with the players current score
        $('#playertotal-text').text(playerScore);
        // determine if the player wins or loses
        if (playerScore === randomNumber) {
            // increment wins counter
            wins++;
            // sets the wins html to current value of wins variable
            $('#wins-text').text(wins);
            // launches status modal with winners text
            status(youWin);
        } else if (playerScore > randomNumber) {
            // increment losses counter
            losses++;
            // sets the losses html to current value of losses variable
            $('#losses-text').text(losses);
            // launches status modal with losers text
            status(youLose);
        }
    });
    // click events
    // hides instructions and displays game on click of button
    $('#start-game').on('click', function () {
        $('.game').toggleClass('d-none');
        $('.jumbotron-fluid').toggleClass('d-none');
    });
    // on click continues game
    $('#continue').click(function () {
        console.log('Continue clicked');
        continueGame();
    });
    // on click resets the entire game
    $('#reset').click(function () {
        console.log('reset clicked');
        restartGame();
    });

});