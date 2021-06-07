"use strict";

//IIFE - Immediately Invoked Function Expression
// OR - Anonymous Self Executing Function
(function()
{
    //declare function variables here...

    /**
     * Variable Initialization in this function
     */
    function Start()
    {
        console.log("%cInitializing Variable")

        Main();
    }

    /**
     * Main program Entry point is here
     */
    function Main()
    {
        
    }

    window.addEventListener("load", Start);
})();
