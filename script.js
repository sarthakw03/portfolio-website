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

    // Scroll Reveal Animation Logic
    const revealElements = document.querySelectorAll('.reveal');

    const revealCallback = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Unobserve after revealing if you only want it to animate once
                // observer.unobserve(entry.target);
            }
        });
    };

    const revealOptions = {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before it hits the very bottom
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Certifications Accordion Logic
    const certHeaders = document.querySelectorAll('.cert-header');
    
    certHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const certItem = header.parentElement;
            
            // Toggle active class on the clicked item
            certItem.classList.toggle('active');
            
            // Optional: Close other open certificate items (Accordion style)
            // document.querySelectorAll('.cert-item').forEach(item => {
            //     if (item !== certItem) {
            //         item.classList.remove('active');
            //     }
            // });
        });
    });

});