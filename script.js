document.addEventListener('DOMContentLoaded', () => {
    // Handle toggle functionality for card details
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const details = button.nextElementSibling;

            // Toggle the details visibility with animation
            if (details.style.maxHeight) {
                details.style.maxHeight = null;
                details.style.display = 'none';
            } else {
                details.style.display = 'block';
                details.style.maxHeight = details.scrollHeight + 'px';
            }
        });
    });

    // Handle form submission
    const form = document.getElementById('feedback-form');
    form.addEventListener('submit', event => {
        event.preventDefault(); // Prevent the default form submission

        // Extract form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Display a simple alert for demonstration purposes
        alert(`Thank you for your feedback, ${name}! We will get back to you at ${email}.`);

        // Optionally, you can send this data to a server or process it further here

        // Reset the form
        form.reset();
    });
});

