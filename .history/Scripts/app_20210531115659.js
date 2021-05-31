//IIFE - Immediately Invoked Function Expression
// OR - Anonymous Self Executing Function
(function()
{



    function Start()
    {
        console.log("App Started");

        document.getElementById("heading1").textContent = "Nick Sturch-Flint Portfolio Home Page";
    }

    window.addEventListener("load", Start);
})();
