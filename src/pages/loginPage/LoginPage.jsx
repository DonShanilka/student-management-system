import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../loginPage/loginPage.css'
import axios from 'axios';
import instance from '../../service/AxiosOrder';


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
        instance.post('/api/login', {
            email: email,
            password: password,
        })
            .then(function (response) {
                console.log(response.data.token);
                localStorage.setItem('token', response.data.token)
                window.location.reload()
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
                                onChange={(val) => setEmail(val.target.value)}
                            />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <TextField
                                id="password"
                                label="Password"
                                variant="outlined"
                                type="password"
                                fullWidth
                                onChange={(val) => setPassword(val.target.value)}
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