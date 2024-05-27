const form = document.getElementById('birthday-form');

form.addEventListener('submit', async (event) => {
    // Prevent the default form submission
    event.preventDefault();

    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        birthdate: formData.get('birthdate'),
        optional_info: formData.get('info') || null,
    };

    // Send data to the backend using Axios
    try {
        const response = await axios.post('http://127.0.0.1:8000/bday/new', JSON.stringify(data));
        // Display success message
        alert(response.data.message);
    } catch (error) {
        if (error.response){
        // Display error message
        alert('Error submitting data: ' + error.response.data.detail);
    } else {
        alert('Error submitting data: ' + error.message)
    }}
});

