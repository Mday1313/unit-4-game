// Function to wrap all 
$(document).ready(function () {
    // Declare global variables targetNumber (will display at top for user to match), empty crystal array [will hold randomly generated crystal values], counter
    // counter store and adds user clicks 
    var counter = 0;
    var isTargetReached = false;
    var wins = 0;
    var losses = 0;
    var randomValue = [];
    // randomly pick number to match (TARGET NUMBER) limit 19-120
    var targetNumber;

    function updateDisplay() {
        $(".count-text").empty();
        randomValue = [];
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19); 
    }

    function reset() {
        updateDisplay();
        randNumber();
    }

    // function that picks numbers 
    function randNumber() {
        counter = 0;
        $(".target-number").text(targetNumber);
        // for each crystal,
        // randomly pick different number for each crystal, value between 1-12
        for (var i = 0; i < 4; i++) {
            randomValue[i] = Math.floor(Math.random() * 12) + 1;
            console.log(randomValue);
        }
        // function for click event
        $("#crystal-one").unbind().on("click", function (event) {
            // extract value for crystal assigned in last step using data tag
            var crystalValue = randomValue[0];
            console.log(crystalValue);
            //   Add picked values together
            counter += crystalValue;
           
            $(".count-text").text(counter);
            checkWin();
        });

        $("#crystal-two").unbind().on("click", function (event) {
            // extract value for crystal assigned in last step using data tag
            var crystalValue = randomValue[1];
            console.log(crystalValue);
            //   Add picked values together
            counter += crystalValue;
            console.log(counter);
            $(".count-text").text(counter);
            checkWin();
        });

        $("#crystal-three").unbind().on("click", function (event) {
            // extract value for crystal assigned in last step using data tag
            var crystalValue = randomValue[2];
            console.log(crystalValue);
            //   Add picked values together
            counter += crystalValue;
            console.log(counter);
            $(".count-text").text(counter);
            checkWin();
        });

        $("#crystal-four").unbind().on("click", function (event) {
            // extract value for crystal assigned in last step using data tag
            var crystalValue = randomValue[3];
            console.log(crystalValue);
            //   Add picked values together
            counter += crystalValue;
            console.log(counter);
            $(".count-text").text(counter);
            //call function to check for win
            checkWin();
        });
    } 
    
    function checkWin() {
        console.log("count: " + counter);
        console.log("target " + targetNumber);

        if (targetNumber === counter) {
            // write "U win"
            $(".progress").text("You Win!");
            // wins++
            wins++;
            $(".wins").text(wins);
            reset();
        }
        else if (counter >= targetNumber) {
            // write "U lose"
            $(".progress").text("You Lose!");
            // losses--
            losses++;
            $(".losses").text(losses);
            reset()
        } else {
            //  write "Make another choice"
            $(".progress").text("Journey On");
        }
    }
      
    reset();
});
