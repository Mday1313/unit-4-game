




// Function to wrap all 

$(document).ready(function () {




    // Declare global variables targetNumber (will display at top for user to match), empty crystal array [will hold randomly generated crystal values], counter

    var targetNumber = 0;



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

        var randomValue = [];
        for (var i = 0; i < 3; i++) {
            randomValue[i] = Math.floor(Math.random() * 12) + 1;
            randomValue.push(i);


            // $("#crystal-one").attr("value", randomValue[0]);

            // $("#crystal-one").data("value2", randomValue[0]);

            console.log(randomValue);

            // push each number to empyt array
            // then join with individual id for each click event 







        }


        // function for click event
        // 


        $("#crystal-one").on("click", function (event) {

            //     // extract value for crystal assigned in last step using data tag
            var crystalValue = randomValue[0];
            console.log(crystalValue);
            // console.log("____");
            //    console.log(event);

            //   Add picked values together
            counter += crystalValue;
            console.log(counter);
            $(".count-text").text(counter);
            //    
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
            //    
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
            //    
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
            //    
        });

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


    randNumber();

});