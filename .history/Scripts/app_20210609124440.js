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

        PageSwitcher();

        Main();
    }

    function PageSwitcher()
    {
        let name = window.location.pathname; //returns full .html page name
        let pageName = name.substring(1, name.length - 5); //returns page name without the first / and the final .html


        switch(pageName)
        {
            case "index":
                document.getElementById("home").className = "nav-link active";
                $("button").click(() => {
                    location.href = "projects";
                });
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
                console.error("Page Not Found");
                break;
        }

        $("#"+pageName).addClass("active"); //makes the active page link highlighted
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
