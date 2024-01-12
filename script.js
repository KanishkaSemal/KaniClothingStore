// Get the Shop Now button by its ID
const shopNowButton = document.getElementById('shopNowButton');

// Add an event listener to the button
shopNowButton.addEventListener('click', function() {
    // Redirect the user to the shop page when the button is clicked
    window.location.href = 'shop.html';
});


// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded before attaching the event listener
    var blogLink = document.getElementById("blogLink");

    if (blogLink) {
        blogLink.addEventListener("click", function(event) {
            // Prevent the default behavior of the link (preventing the page from reloading)
            event.preventDefault();
            
            // Navigate to the blog page
            window.location.href = "blog.html";
        });
    }
});



// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded before attaching the event listener
    var aboutLink = document.getElementById("aboutLink");

    if (aboutLink) {
        aboutLink.addEventListener("click", function(event) {
            // Prevent the default behavior of the link (preventing the page from reloading)
            event.preventDefault();
            
            // Navigate to the about page
            window.location.href = "about.html";
        });
    }
});


// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded before attaching the event listener
    var contactLink = document.getElementById("contactLink");

    if (contactLink) {
        contactLink.addEventListener("click", function(event) {
            // Prevent the default behavior of the link (preventing the page from reloading)
            event.preventDefault();
            
            // Navigate to the contact page
            window.location.href = "contact.html";
        });
    }
});
