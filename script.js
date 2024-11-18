// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.
// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.


let balloon = document.getElementById("balloon"); // Get the balloon element by its ID
let size = 100; // Initial size of the balloon in percentage

function handleKey(event) { 
    // Define the function handleKey, which takes an event parameter
    if (balloon.innerHTML !== "💥") { 
        // Check if the balloon has not exploded
        if (event.key === "ArrowUp") { 
            // Check if the up arrow key is pressed
            size *= 1.1; 
            // Increase the balloon size by 10%
        } else if (event.key === "ArrowDown") { 
            // Check if the down arrow key is pressed
            size *= 0.9; 
            // Decrease the balloon size by 10%
        }
        if (size > 600) { 
            // Check if the balloon size exceeds 600%
            balloon.innerHTML = "💥"; 
            // Replace the balloon emoji with an explosion emoji
            window.removeEventListener("keydown", handleKey); 
            // Remove the event listener to stop further size changes
        } else {
            balloon.style.fontSize = size + "%"; 
            // Update the balloon's font size to the new size
        }
    }
}




// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it
