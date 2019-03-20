# unit-4-game
week 4 homework


How to play the Game. 

Test your math and logic skills in this action packed game. Collect the same number of crystals without going over to win the round. Number of points for each crystal will change each round


Pseudocode

Create a function to wrap all functions


    // Declare global variables targetNumber (will display at top for user to match), empty crystal array [will hold randomly generated crystal values], counter

     counter store and adds user clicks 

     Update Display
    // function to update display
    // picks new numbers targetNumber and guess array
    // $(".count-text").empty();

    function to reset the game, calls on all the function necessary to begin
    // clear numbers in arrays
    // update display
    // pick numbers

     function that picks numbers 
         // randomly pick number to match (TARGET NUMBER) limit 19-120
          // for each crystal,
        // randomly pick different number for each crystal, value between 1-12

     // push each number to empty array
            // then join with individual id for each click event 


Create function for click event (one for each button) (make DRY if time permits)

    extract value for crystal assigned in last step using data tag
    
     //   Add picked values together


Function to check for win


    
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

    Call start functions