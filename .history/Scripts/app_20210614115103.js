class Contact 
{
    constructor(emailAddress = "", contactNumber = "", contactName = "", contactMessage = "")
    {
        this.emailAddress = emailAddress;
        this.contactNumber = contactNumber;
        this.contactName = contactName;
        this.contactMessage = contactMessage;
    }
}

"use strict";

//IIFE - Immediately Invoked Function Expression
// OR - Anonymous Self Executing Function
(function()
{
    //declare function variables here...
    let contact = new Contact();
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
        
        function clearForm()
        {
            $("#contactForm")[0].reset();
            $("#errorMessage").hide();
        }

        $("#errorMessage").hide();

        $("#firstName").on("change", (e) => {
            if($("#firstName").val().length < 2)
            {
                $("#errorMessage")[0].textContent = "First name is too short";
                $("#errorMessage").show();
                $("#firstName").trigger("focus");
                $("#firstName").css("border", "1px solid red");
                console.log("First name too short")
            }
            else
            {
                $("#errorMessage").hide();
                $("#firstName").css("border", "1px solid #ced4da");
            }
        });

        $("#lastName").on("change", (e) => {
            if($("#lastName").val().length < 2)
            {
                $("#errorMessage")[0].textContent = "Last name is too short";
                $("#errorMessage").show();
                $("#lastName").trigger("focus");
                $("#firstName").css("border", "1px solid red");
                console.log("Last name too short")
            }
            else
            {
                $("#errorMessage").hide();
            }
        });

        $("#submitButton").on("click", (e) =>
        {
            e.preventDefault();

            let emailAddress = $("#emailAddress").val();
            let contactNumber = $("#contactNumber").val();
            let firstName = $("#firstName").val();
            let lastName = $("#lastName").val();
            let prefName = $("#prefName").val();
            let message = $("#message").val();

            console.log(`Email Address : ${emailAddress}`);
            console.log(`Contact Number: ${contactNumber}`);
            console.log(`Name          : ${prefName} (${lastName}, ${firstName});`);
            console.log(`Message       : ${message}`);

            contact.emailAddress = emailAddress;
            contact.contactNumber = contactNumber;
            contact.contactName = `${prefName} (${lastName}, ${firstName})`;
            contact.contactMessage = message;

            console.log(contact);
            clearForm();
        });

        $("#resetButton").on("click", (e) =>
        {
            e.preventDefault();

            if(confirm("Are you sure?"))
            {
                clearForm();
            }
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
