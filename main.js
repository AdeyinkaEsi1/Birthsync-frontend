const form = document.getElementById('birthday-form');

form.addEventListener('submit', async (event) => {
    // Prevent the default form submission
    event.preventDefault();

    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        birth_date: formData.get('birth_date'),
        extra_info: formData.get('extra_info') || null,
    };


    console.log('Form Data:', data); // Log the data object

    const new_data = JSON.stringify(data);
    console.log('JSON Data:', new_data);
    // Send data to the backend using Axios
    try {
        const response = await axios.post('http://127.0.0.1:8000/bday/new', new_data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // Display success message
        console.log(response);
        alert(response.data.message);
    } catch (error) {
        alert('Error submitting data: ' + (error.response?.data?.message || error.message));
    }
});

// Error submitting data1: Cannot read properties of undefined (reading 'message')