// This file contains the JavaScript code for the website, which may handle interactivity, form submissions, and dynamic content updates.

document.addEventListener('DOMContentLoaded', () => {
    const rsvpForm = document.getElementById('rsvp-form');
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(rsvpForm);
            const guestName = formData.get('name');
            const guestStatus = formData.get('status');

            // Here you can handle the RSVP submission, e.g., send it to a server or update the UI
            console.log(`Guest Name: ${guestName}, RSVP Status: ${guestStatus}`);
            alert(`Thank you for your response, ${guestName}!`);
        });
    }

    // Additional interactivity can be added here
});