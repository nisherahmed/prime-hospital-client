import { Alert, Button, Container, Grid, Typography, CircularProgress, } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png';
import TextField from '@mui/material/TextField';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    // location and history use for private route
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }
    // Module 71-2: ei video te browser e id & pass auto save korte pari nai

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    // for google sign in

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 10 }} xs={12} md={6}>
                    <Typography variant='body1' gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }} id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }} id="standard-basic"
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <Button sx={{ width: "75%", m: 1 }} type="submit" variant='contained'>Login</Button>
                        {/* Toggle Button */}
                        <NavLink style={{ textDecoration: 'none' }} to="/register"><Button variant="text">New User? Please Register </Button></NavLink>

                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity='success'>User Login Successfully</Alert>}
                        {authError && <Alert severity='error'>{authError}</Alert>}

                    </form>
                    <p>---------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Step-1:&&&&&&&&&&&& at first basic login component create korbo then structure design korbo and login e  handler set korbo and form e onSubmit e  handleLoginSubmit handeler add korbo then   e.preventDefault(); add korbo oterwise by default load hoe jabe///

// const Login = () => {


//     const handleLoginSubmit = e => {
//         alert('hello')
//         e.preventDefault();
//     }

//     return (
//         <Container>
//             <Grid container spacing={2}>
//                 <Grid item sx={{ mt: 10 }} xs={12} md={6}>
//                     <Typography variant='body1' gutterBottom>
//                         Login
//                     </Typography>
//                     <form onSubmit={handleLoginSubmit}>
//                         <TextField
//                             sx={{ width: "75%", m: 1 }} id="standard-basic"
//                             label="Your Email"

//                             variant="standard" />
//                         <TextField
//                             sx={{ width: "75%", m: 1 }} id="standard-basic"
//                             label="Password"

//                             type="password"
//                             variant="standard" />
//                         <Button sx={{ width: "75%", m: 1 }} type="submit" variant='contained'>Login</Button>
//                         {/* Toggle Button */}
//                         <NavLink style={{ textDecoration: 'none' }} to="/register"><Button variant="text">New User? Please Register </Button></NavLink>

//                         {/* {isLoading && <CircularProgress />}
//                         {user?.email && <Alert severity='success'>User Created Successfully</Alert>}
//                         {authError && <Alert severity='error'>{authError}</Alert>} */}
//                     </form>
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <img style={{ width: '100%' }} src={login} alt="" />
//                 </Grid>
//             </Grid>
//         </Container>
//     );
// };

// export default Login;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Step-2:&&&&&&&&&&&& then handleOnChange set korbo eikhane field r value ke change korbo


// const Login = () => {
//     const handleLoginSubmit = e => {
//         alert('hello')
//         e.preventDefault();
//     }

// STEP-2 ##############################################
// const handleOnChange = e => {
//     const field = e.target.name;
//     const value = e.target.value;
// STEP-2 ##############################################
// }
//     return (
//         <Container>
//             <Grid container spacing={2}>
//                 <Grid item sx={{ mt: 10 }} xs={12} md={6}>
//                     <Typography variant='body1' gutterBottom>
//                         Login
//                     </Typography>
//                     <form onSubmit={handleLoginSubmit}>
//                         <TextField
//                             sx={{ width: "75%", m: 1 }} id="standard-basic"
//                             label="Your Email"
// STEP-2 ##############################################
//                              name="email"
//                              onChange={handleOnChange}
// STEP-2 ##############################################
//                             variant="standard" />
//                         <TextField
//                             sx={{ width: "75%", m: 1 }} id="standard-basic"
//                             label="Password"
//                             type="password"
// STEP-2 ##############################################
//                             name = "password"
//                             onChange = { handleOnChange }
// STEP-2 ##############################################
//                             variant="standard" />
//                         <Button sx={{ width: "75%", m: 1 }} type="submit" variant='contained'>Login</Button>
//                         {/* Toggle Button */}
//                         <NavLink style={{ textDecoration: 'none' }} to="/register"><Button variant="text">New User? Please Register </Button></NavLink>

//                         {/* {isLoading && <CircularProgress />}
//                         {user?.email && <Alert severity='success'>User Created Successfully</Alert>}
//                         {authError && <Alert severity='error'>{authError}</Alert>} */}
//                     </form>
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <img style={{ width: '100%' }} src={login} alt="" />
//                 </Grid>
//             </Grid>
//         </Container>
//     );
// };

// export default Login;


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Step-3:&&&&&&&&&&&& Then ekta state declare korbo loginData, setLoginData
// then ekta variable declare kore tar vitor all data copy kore rakhbo then
// setLoginData(newLoginData);  er vitor newLoginData er data pathabo
// const Login = () => {
//    STEP-3 -part-1 ##############################################
//     const [loginData, setLoginData] = useState({});
//    STEP-3 -part-1 ##############################################
//     // const { user, loginUser, isLoading, authError } = useAuth();
//     const handleOnChange = e => {
//         const field = e.target.name;
//         const value = e.target.value;
//    STEP-3 -part-2 ##############################################
//          const newLoginData = { ...loginData };
//          newLoginData[field] = value;
//          setLoginData(newLoginData);
//    STEP-3 -part-2 ##############################################
//     }

//     const handleLoginSubmit = e => {
//         // loginUser(loginData.email, loginData.password);
//         alert('hello')
//         e.preventDefault();
//     }
//     return (
//         <Container>
//             <Grid container spacing={2}>
//                 <Grid item sx={{ mt: 10 }} xs={12} md={6}>
//                     <Typography variant='body1' gutterBottom>
//                         Login
//                     </Typography>
//                     <form onSubmit={handleLoginSubmit}>
//                         <TextField
//                             sx={{ width: "75%", m: 1 }} id="standard-basic"
//                             label="Your Email"
//                             name="email"
//                             onChange={handleOnChange}
//                             variant="standard" />
//                         <TextField
//                             sx={{ width: "75%", m: 1 }} id="standard-basic"
//                             label="Password"
//                             name="password"
//                             onChange={handleOnChange}
//                             type="password"
//                             variant="standard" />
//                         <Button sx={{ width: "75%", m: 1 }} type="submit" variant='contained'>Login</Button>
//                         {/* Toggle Button */}
//                         <NavLink style={{ textDecoration: 'none' }} to="/register"><Button variant="text">New User? Please Register </Button></NavLink>

//                         {/* {isLoading && <CircularProgress />}
//                         {user?.email && <Alert severity='success'>User Created Successfully</Alert>}
//                         {authError && <Alert severity='error'>{authError}</Alert>} */}
//                     </form>
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <img style={{ width: '100%' }} src={login} alt="" />
//                 </Grid>
//             </Grid>
//         </Container>
//     );
// };

// export default Login;