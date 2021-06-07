//IIFE - Immediately Invoked Function Expression
// OR - Anonymous Self Executing Function
(function()
{



    function Start()
    {
        console.log("%cApp Started", "color:blue; font-size:20px;");
        Main();
    }

    function Main()
    {
        console.log("%cMain App Started", "color:blue; font-size:20px;");

    }

    window.addEventListener("load", Start);
})();
