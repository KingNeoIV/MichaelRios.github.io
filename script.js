// Function that displays the welcome modal on the homepage
function greetUser()
{
    const modal = new bootstrap.Modal(document.getElementById('welcomeModal'));
    modal.show();
}

// Load screenshots dynamically when the CS50 Homepage modal is opened
document.getElementById('projectModal').addEventListener('shown.bs.modal', function ()
{
    const container = document.getElementById('cs50Screenshots');   // Where images will be inserted
    const loader = document.getElementById('cs50Loading');          // Loading spinner

    container.innerHTML = "";          // Clear previous images
    loader.style.display = "block";    // Show loading spinner

    // List of screenshot image paths
    const screenshots = ["images/homepageScreenshot.png",
                         "images/aboutMeScreenshot.png"];

    // Simulate loading delay for smoother UI
    setTimeout(() => {
        loader.style.display = "none"; // Hide spinner

        // Create and insert each screenshot image
        screenshots.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = "Screenshot of CS50 Homepage";   // Accessibility improvement
            img.className = "img-fluid rounded mb-3";
            container.appendChild(img);
        });
    }, 300);
});

// Load screenshots dynamically when the Space Cowboy modal is opened
document.getElementById('spaceCowboyModal').addEventListener('shown.bs.modal', function ()
{
    const container = document.getElementById('spaceCowboyScreenshots'); // Where images will be inserted
    const loader = document.getElementById('spaceCowboyLoading');        // Loading spinner

    container.innerHTML = "";          // Clear previous images
    loader.style.display = "block";    // Show loading spinner

    // List of screenshot image paths
    const screenshots = ["images/spacecowboy.png",
                         "images/spaceCowboyScreenshot.png"];

    // Simulate loading delay for smoother UI
    setTimeout(() => {
        loader.style.display = "none"; // Hide spinner

        // Create and insert each screenshot image
        screenshots.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = "Screenshot of Space Cowboy project";   // Accessibility improvement
            img.className = "img-fluid rounded mb-3";
            container.appendChild(img);
        });
    }, 300);
});
