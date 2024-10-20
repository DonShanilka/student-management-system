import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../loginPage/loginPage.css'

function LoginPage() {

    const navigate = useNavigate();

    function goToRegister() {
        navigate('/signup');
    }

    function goToDrawer() {
        navigate('/drawer')
    }

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
        <div className='login-main-div'>
            <Container maxWidth="xs" sx={{ backgroundColor: 'white', width: "100%" }}>
                <Box sx={{ mt: 8 }}>
                    <Typography variant="h4" gutterBottom>
                        Sign Up
                    </Typography>
                    <form onSubmit={handleSubmit}>
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

                    </form>
                    <Button type="submit" variant="contained" color="primary" fullWidth onClick={goToDrawer}>LogIn</Button>
                    <br /><br />
                    <Button type="submit" variant="contained" color="primary" fullWidth onClick={goToRegister}>Sing Up</Button>
                </Box>
            </Container>
        </div>
    )
}

export default LoginPage