import { Alert, Button, CircularProgress, Container, Grid, Typography, } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png';
import TextField from '@mui/material/TextField';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    // for send data to home page
    const navigate = useNavigate();
    // eikhane user add korsi 
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        // console.log(newLoginData);
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password Not Matched');
            // condition match na korele form submit korbo na return kore dibo
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate);
        alert('user Created Sucessfully')
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 10 }} xs={12} md={6}>
                    <Typography variant='body1' gutterBottom>
                        Register
                    </Typography>
                    {!isLoading && < form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }} id="standard-basic"
                            label="Your Name"
                            type="text"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }} id="standard-basic"
                            label="Your Email"
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }} id="standard-basic"
                            label="Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }} id="standard-basic"
                            label="Re-Type Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <Button sx={{ width: "75%", m: 1 }} type="submit" variant='contained'>Register</Button>
                        {/* Toggle Button */}
                        <NavLink style={{ textDecoration: 'none' }} to="/login"><Button variant="text">All Ready Register? Please Login </Button></NavLink>
                    </form>}

                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity='success'>User Created Successfully</Alert>}
                    {authError && <Alert severity='error'>{authError}</Alert>}

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container >
    );
};

export default Register;