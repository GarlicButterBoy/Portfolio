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
                DisplayHome();
                document.getElementById("home").className = "nav-link active";
               // $("button").on("click", () => {
               //     location.href = "projects.html";
              //  });
                break;
            case "about":
                DisplayAbout();
                break;
            case "projects":
                DisplayProjects();
                break;
            case "services":
                DisplayServices();
                break;
            case "contact":
                DisplayContact()
                break;
            default:
                console.error("Page Not Found");
                break;
        }

        $("#"+pageName).addClass("active"); //makes the active page link highlighted
    }

    function DisplayHome()
    {

    }

    function DisplayAbout()
    {
        
    }

    function DisplayProjects()
    {
        
    }

    function DisplayServices()
    {
        
    }

    function DisplayContact()
    {
        
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
