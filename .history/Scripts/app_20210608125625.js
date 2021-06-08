"use strict";

//IIFE - Immediately Invoked Function Expression
// OR - Anonymous Self Executing Function
(function()
{
    //declare function variables here...
    console.log("%cDeclaring Variables", "color:blue");

    /**
     * Variable Initialization in this function
     */
    function Start()
    {
        console.log("%cInitializing Variables", "color:green");

        let name = window.location.pathname;

        switch(name.substring(1, name.length - 5))
        {
            case "index":
                break;
            case "about":
                break;
            case "projects":
                break;
            case "services":
                break;
            case "contact":
                break;
            default:
                break;
        }

        Main();
    }

    /**
     * Main program Entry point is here
     */
    function Main()
    {
        console.log("%cMain Program Starting", "color:orange");

    }

    window.addEventListener("load", Start);
})();
