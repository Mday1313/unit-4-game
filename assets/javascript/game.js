




// Function to wrap all 

$(document).ready(function() {




// Declare global variables targetNumber (will display at top for user to match), empty crystal array [will hold randomly generated crystal values], counter

var targetNumber = 0;
var randomValue = 0;
var crystalValue = 0;
// counter store and adds user clicks 
var counter = 0;    
var isTargetReached = false;
var wins = 0;
var losses = 0;

// Update Display
// function to update display
        // picks new numbers targetNumber and guess array
        // $("".count-text").empty();
        function updateDisplay() {
            $(".target-number").empty();
            
            
          }

// function to reset the game, calls on all the function necessary to begin
    // clear numbers in arrays
    // update display
    // pick numbers

          function reset() {
            updateDisplay();
            randNumber();
            createCrystalPicker();
          }
// function that picks numbers 
    function randNumber() {

// randomly pick number to match (TARGET NUMBER) limit 19-120
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        $(".target-number").text(targetNumber);
        // for each crystal,
                // randomly pick different number for each crystal, value between 1-12
        
       

        for (var i = 0; i < 4; i++) {
            randomValue = Math.floor(Math.random() * 12) + 1;
            var imageCrystal = $("<img>");
            imageCrystal.addClass("crystal-image");
            // give each crystal data attribute called 
            imageCrystal.attr("data-crystalvalue", randomValue[i]);
            $("#crystal").append(imageCrystal);

            console.log(imageCrystal);
            console.log(randomValue);
            } 
        }
            
           
            


// function for click event
        // lines 63 on in 12.html activity simple crystal game
function createCrystalPicker() {







}
    // if 



        // counter += crystalValue;

    // if (counter === targetNumber) {
        // write "U win"
        // wins++
        // reset()
    // }
        // else if (counter >= targetNumber) {
            // write "U lose"
            // losses--
            // reset()
        // } 
        // else {
//              write "Make another choice"
        // }
    
    
    
    });