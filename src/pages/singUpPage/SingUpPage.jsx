import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import '../singUpPage/singUp.css'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {

    const navigate = useNavigate();

    function goToLogin() {
        navigate('/login');
    }

    // State to store form inputs
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            // Make the POST request with Axios
            const response = await axios.post('https:', {
                username: formData.username,
                email: formData.email,
                password: formData.password
            });

            console.log('Form Submitted:', response.data);
            // Handle successful response (e.g., navigate to login page or dashboard)
            navigate('/login');
        } catch (error) {
            // Handle errors here (e.g., show an error message)
            console.error('Error signing up:', error);
            setError('Failed to sign up. Please try again.');
        }
    };


    return (
        <div className='singUp-main-div'>
            <Container maxWidth="xs" sx={{ backgroundColor: 'white', width: "100%" }}>
                <Box sx={{ mt: 8 }}>
                    <Typography variant="h4" gutterBottom>
                        Sign Up
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Box sx={{ mb: 2 }}>
                            <TextField
                                id="username"
                                label="Username"
                                variant="outlined"
                                fullWidth
                                required
                                value={formData.username}
                                onChange={handleInputChange}
                            />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <TextField
                                id="email"
                                label="Email"
                                variant="outlined"
                                type="email"
                                fullWidth
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <TextField
                                id="password"
                                label="Password"
                                variant="outlined"
                                type="password"
                                fullWidth
                                required
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <TextField
                                id="confirmPassword"
                                label="Confirm Password"
                                variant="outlined"
                                type="password"
                                fullWidth
                                required
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                            />
                        </Box>
                    </form>
                    <Button type="submit" variant="contained" color="primary" fullWidth>Sign Up</Button>
                    <br /><br />
                    <Button type="submit" variant="contained" color="primary" fullWidth onClick={goToLogin}>LogIn</Button>
                </Box>
            </Container>
        </div>
    );
}
