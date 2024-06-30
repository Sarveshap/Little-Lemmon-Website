// Accessing the form and adding a submit event listener
const form = document.getElementById('bookingForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const date = formData.get('date');
    const guests = formData.get('guests');

    // Perform form validation (example)
    if (name && email && date && guests) {
        // Simulate booking or send data to a server
        alert(`Booking confirmed for ${name} on ${date} with ${guests} guests.`);
        form.reset(); // Reset the form after submission
    } else {
        alert('Please fill out all fields.');
    }
});
