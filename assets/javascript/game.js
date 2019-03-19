




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

    // Update Display
    // function to update display
    // picks new numbers targetNumber and guess array
    // $("".count-text").empty();

    function updateDisplay() {
        
        $(".count-text").empty();
        randomValue = [];
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);

    }

    // function to reset the game, calls on all the function necessary to begin
    // clear numbers in arrays
    // update display
    // pick numbers

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

        
        for (var i = 0; i < 3; i++) {
            randomValue[i] = Math.floor(Math.random() * 12) + 1;
            randomValue.push(i);

            console.log(randomValue);

            // push each number to empty array
            // then join with individual id for each click event 

        }

    
        // function for click event
        // 
   

    

        $("#crystal-one").on("click", function (event) {

            //     // extract value for crystal assigned in last step using data tag
            var crystalValue = randomValue[0];
            console.log(crystalValue);
          

            //   Add picked values together
            counter += crystalValue;
           
            $(".count-text").text(counter);
            checkWin();
             
            
        });

        $("#crystal-two").on("click", function (event) {

            //     // extract value for crystal assigned in last step using data tag
            var crystalValue = randomValue[1];
            console.log(crystalValue);
            // 
            //   Add picked values together
            counter += crystalValue;
            console.log(counter);
            $(".count-text").text(counter);
            checkWin();
            
        });

        $("#crystal-three").on("click", function (event) {

            //     // extract value for crystal assigned in last step using data tag
            var crystalValue = randomValue[2];
            console.log(crystalValue);
            // console.log("____");
            //    console.log(event);

            //   Add picked values together
            counter += crystalValue;
            console.log(counter);
            $(".count-text").text(counter);
            checkWin();
            
        });

        $("#crystal-four").on("click", function (event) {

            //     // extract value for crystal assigned in last step using data tag
            var crystalValue = randomValue[3];
            console.log(crystalValue);
            // console.log("____");
            //    console.log(event);

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
            //              write "Make another choice"
            $(".progress").text("Make another selection.");
            // }

        }

   


    }
      

    reset();

    
});
