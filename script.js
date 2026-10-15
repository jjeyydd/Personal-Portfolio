// Wait until the HTML document has loaded.
document.addEventListener("DOMContentLoaded", function () {

    // Select all navigation links that point to a page section.
    const navigationLinks = document.querySelectorAll(
        '.nav-links a[href^="#"], .logo[href^="#"]'
    );

    // Add smooth scrolling to each navigation link.
    navigationLinks.forEach(function (link) {

        // Run this code every time the link is clicked.
        link.addEventListener("click", function (event) {

            // Find the section connected to the clicked link.
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            // Scroll to the section if it exists.
            if (targetSection) {
                // Stop the default instant jump.
                event.preventDefault();

                // Scroll smoothly to the section.
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});