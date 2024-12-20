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

window.addEventListener("keydown", handleKey); 
// Add an event listener to handle keydown events

// Prevent arrow keys from scrolling the page
window.addEventListener("keydown", function(e) { 
    // Add another event listener to handle keydown events
    if (["ArrowUp", "ArrowDown"].indexOf(e.key) > -1) { 
        // Check if the key pressed is the up or down arrow
        e.preventDefault(); 
        // Prevent the default action (scrolling) for the arrow keys
    }
}, false);


// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it

document.addEventListener('DOMContentLoaded', (event) => {
    // Wait until the DOM is fully loaded

    // Get references to the tab links and tab contents
    const tab1Link = document.getElementById('tab1Link'); 
    // Get the link element for Tab 1
    const tab2Link = document.getElementById('tab2Link'); 
    // Get the link element for Tab 2
    const tab3Link = document.getElementById('tab3Link'); 
    // Get the link element for Tab 3

    const tab1Content = document.getElementById('tab1'); 
    // Get the content element for Tab 1
    const tab2Content = document.getElementById('tab2'); 
    // Get the content element for Tab 2
    const tab3Content = document.getElementById('tab3'); 
    // Get the content element for Tab 3

    // Function to hide all tab contents
    function hideAllTabs() {
        tab1Content.style.display = 'none'; 
        // Hide Tab 1 content
        tab2Content.style.display = 'none'; 
        // Hide Tab 2 content
        tab3Content.style.display = 'none'; 
        // Hide Tab 3 content
    }

    // Function to remove active class from all tab links
    function removeActiveClass() {
        tab1Link.classList.remove('active'); 
        // Remove active class from Tab 1 link
        tab2Link.classList.remove('active'); 
        // Remove active class from Tab 2 link
        tab3Link.classList.remove('active'); 
        // Remove active class from Tab 3 link
    }

    // Add event listeners to the tab links
    tab1Link.addEventListener('click', (e) => {
        e.preventDefault(); 
        // Prevent the default link behavior
        hideAllTabs(); 
        // Hide all tab contents
        removeActiveClass(); 
        // Remove active class from all tab links
        tab1Content.style.display = 'block'; 
        // Show Tab 1 content
        tab1Link.classList.add('active'); 
        // Add active class to Tab 1 link
    });

    tab2Link.addEventListener('click', (e) => {
        e.preventDefault(); 
        // Prevent the default link behavior
        hideAllTabs(); 
        // Hide all tab contents
        removeActiveClass(); 
        // Remove active class from all tab links
        tab2Content.style.display = 'block'; 
        // Show Tab 2 content
        tab2Link.classList.add('active'); 
        // Add active class to Tab 2 link
    });

    tab3Link.addEventListener('click', (e) => {
        e.preventDefault(); 
        // Prevent the default link behavior
        hideAllTabs(); 
        // Hide all tab contents
        removeActiveClass(); 
        // Remove active class from all tab links
        tab3Content.style.display = 'block'; 
        // Show Tab 3 content
        tab3Link.classList.add('active'); 
        // Add active class to Tab 3 link
    });


    // Initialize: show the first tab and set it as active
    hideAllTabs(); 
    // Hide all tab contents initially
    tab1Content.style.display = 'block'; 
    // Show Tab 1 content by default
    tab1Link.classList.add('active'); 
    // Add active class to Tab 1 link by default
});
