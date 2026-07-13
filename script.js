// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Select the contact form
    const contactForm = document.querySelector('.contact-form');

    // Add an event listener to handle the 'submit' action
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the default page refresh
            event.preventDefault();

            // Get the values the user typed in
            const name = this.querySelector('input[type="text"]').value;
            
            // Show a professional success message
            alert(`Thank you, ${name}! Your message has been sent successfully. I will get back to you soon.`);
            
            // Clear the form fields
            this.reset();
        });
    }

    // Modal Logic
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("demoVideo");
    const closeBtn = document.querySelector(".close-modal");
    const demoBtns = document.querySelectorAll(".demo-btn");

    if (modal && video && closeBtn) {
        demoBtns.forEach(btn => {
            btn.addEventListener("click", function(e) {
                e.preventDefault();
                const videoSrc = this.getAttribute("data-video");
                if (videoSrc) {
                    video.src = videoSrc;
                    modal.style.display = "block";
                    video.play();
                }
            });
        });

        closeBtn.addEventListener("click", function() {
            modal.style.display = "none";
            video.pause();
            video.src = ""; // reset video
        });

        window.addEventListener("click", function(e) {
            if (e.target == modal) {
                modal.style.display = "none";
                video.pause();
                video.src = ""; // reset video
            }
        });
    }
});