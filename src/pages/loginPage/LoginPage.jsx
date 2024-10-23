import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../loginPage/loginPage.css'
import axios from 'axios';

function LoginPage() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function goToRegister() {
        navigate('/signup');
    }

    function goToDrawer() {
        navigate('/drawer')
    }

    function loginAction() {
        axios.post('https://student-api.acpt.lk//api/login', {
            email: email,
            password: password,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div className='login-main-div'>
            <Container maxWidth="xs" sx={{ backgroundColor: 'white', width: "100%" }}>
                <Box sx={{ mt: 8 }}>
                    <Typography variant="h4" gutterBottom>
                        Sign Up
                    </Typography>
                    <form>
                        <Box sx={{ mb: 2 }}>
                            <TextField
                                id="email"
                                label="Email"
                                variant="outlined"
                                type="email"
                                fullWidth
                                required
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
                            />
                        </Box>

                    </form>
                    <Button type="submit" variant="contained" color="primary" fullWidth onClick={loginAction}>LogIn</Button>
                    <br /><br />
                    <Button type="submit" variant="contained" color="primary" fullWidth onClick={goToRegister}>Sing Up</Button>
                </Box>
            </Container>
        </div>
    )
}

export default LoginPage