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
                DisplayContact();
                break;
            default:
                Display404();
                break;
        }

        $("#"+pageName).addClass("active"); //makes the active page link highlighted
    }

    function DisplayHome()
    {
        function notify() {
            console.log( "clicked" );
          }

        document.getElementById("home").className = "nav-link active";

         $("#projectsButton").on("click", notify, () => {
              location.href = "projects.html";
         });
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
        let emailAddress = $("#emailAddress")[0].value;
        let contactNumber = $("#contactNumber").val();
        let firstName = $("#firstName").val();
        let lastName = $("#lastName").val();
        let prefName = $("#prefName").val();
        let message = $("#message").val();

        $("#submitButton").on("click", (e) =>
        {
            e.preventDefault();
            console.log(`Email Address : ${emailAddress}`);
            console.log(`Contact Number: ${contactNumber}`);
            console.log(`Name          : ${prefName} (${lastName}, ${firstName});`);
            console.log(`Message       : ${message}`);
        });
    }

    function Display404()
    {
        console.log("Page Not Found");
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
