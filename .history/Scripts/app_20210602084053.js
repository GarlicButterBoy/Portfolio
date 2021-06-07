"use strict";

//IIFE - Immediately Invoked Function Expression
// OR - Anonymous Self Executing Function
(function()
{

    let h2;
    //event handlers
    function MouseOver()
    {
        h2.style.color = "green";
    }

    function MouseOut()
    {
        h2.style.color = (h2.style.color == "blue" ) ? "black" : "blue";
    }

    function Start()
    {
        console.log("%cApp Started", "color:blue; font-size:20px;");
        //get a reference to the content area
        let contentArea = document.getElementById("contentArea");
        //create an h2 element
        h2 = document.createElement("h2");
        //add a class attribute
        h2.setAttribute("class", "display-6");
        h2.textContent = "This is a secondary header";
        //append the new node
        contentArea.appendChild(h2);

        //add event listener 
        h2.addEventListener("click", () => {
            h2.style.color = (h2.style.color == "blue" ) ? "black" : "blue";
        });

        h2.addEventListener("mouseover", MouseOver);

        h2.addEventListener("mouseout", MouseOut);

        let firstParagraph = document.createElement("p");
        firstParagraph.textContent = "A very short paragraph";

        let parentDiv = contentArea.parentNode;

        let h1 = document.getElementById

        parentDiv.insertBefore(firstParagraph, h2);

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
