import React from 'react'

function LoginPage() {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // Handle input change
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add form validation and submit logic here
        console.log('Form Submitted:', formData);
    };

    return (
        <div></div>
    )
}

export default LoginPage