// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Select the contact form
    const contactForm = document.querySelector('.contact-form');

    // Add an event listener to handle the 'submit' action
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the default page redirection
            event.preventDefault();

            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = "Sending...";
            submitBtn.disabled = true;

            const formData = new FormData(this);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let jsonResponse = await response.json();
                if (response.status == 200) {
                    alert(`Thank you, ${object.name}! Your message has been sent successfully. I will get back to you soon.`);
                    contactForm.reset();
                } else {
                    console.log(response);
                    alert(jsonResponse.message ? jsonResponse.message : "Something went wrong. Please try again.");
                }
            })
            .catch((error) => {
                console.log(error);
                alert("Something went wrong. Please check your internet connection and try again.");
            })
            .finally(() => {
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            });
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