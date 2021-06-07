//IIFE - Immediately Invoked Function Expression
// OR - Anonymous Self Executing Function
(function()
{



    function Start()
    {
        console.log("%cApp Started", "color:blue; font-size:20px;");

        let contentArea = document.getElementById("contentArea");

        

        Main();
    }

    function Main()
    {
        console.log("%c|", "color:green; font-size:16px;");
        console.log("%cv", "color:green; font-size:16px;");
        console.log("%cMain Portfolio Started", "color:green; font-size:16px;");

    }

    window.addEventListener("load", Start);
})();
