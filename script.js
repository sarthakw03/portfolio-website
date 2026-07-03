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
});