document.addEventListener("DOMContentLoaded", function () {
    // Get all navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Remove 'active-section' class from all sections
            document.querySelectorAll("section").forEach(section => {
                section.classList.remove("active-section");
            });

            // Add 'active-section' class to the clicked section
            const targetId = this.getAttribute("href").substring(1); // Remove the #
            document.getElementById(targetId).classList.add("active-section");

            // Scroll to the section smoothly
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
