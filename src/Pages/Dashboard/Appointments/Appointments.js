
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Appointments = ({ date }) => {
    const { user, token } = useAuth();
    const [appointments, setAppointments] = useState([]);
    // Website er bookingmodal theke data server e send korara por server theke data website dekhar jonno
    useEffect(() => {
        const url = `https://stormy-fjord-68080.herokuapp.com/appointments?email=${user.email}&date=${date.toLocaleDateString()}`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setAppointments(data));
    }, [date, user.email, token])

    return (
        <div>
            <h2>Appointments:{appointments.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right">{row.serviceName}</TableCell>
                                <TableCell align="right">{row.action}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;



// ?email=${user.email}


















// import React, { useEffect, useState } from 'react';
// import useAuth from '../../../hooks/useAuth';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';


// const Appointments = ({ date }) => {
//     //user ta ke useAuth theke call kobo
//     const { user } = useAuth();
//     // state call korlam and onek gula value thakbe tai empty array dilam
//     const [appointments, setAppointments] = useState([]);

//     useEffect(() => {
//         const url = `https://stormy-fjord-68080.herokuapp.com/appointments?email=${user.email}&date=${date}`
//         fetch(url)
//             .then(res => res.json())
//             .then(data => setAppointments(data));
//     }, [date])

//     // ei khane [date] date holo dependancy date change hole abar call korbe

//     return (
//         <div>
//             <h2>appointments: {appointments.length}</h2>
//             <TableContainer component={Paper}>
//                 <Table sx={{}} aria-label="Appointments table">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Name</TableCell>
//                             <TableCell align="right">Time</TableCell>
//                             <TableCell align="right">Service</TableCell>
//                             <TableCell align="right">Action</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {appointments.map((row) => (
//                             <TableRow
//                                 key={row._id}
//                                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                             >
//                                 <TableCell component="th" scope="row">
//                                     {row.patientName}
//                                 </TableCell>
//                                 <TableCell align="right">{row.time}</TableCell>
//                                 <TableCell align="right">{row.serviceName}</TableCell>
//                                 <TableCell align="right">{row.action}</TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </div>
//     );
// };

// export default Appointments;

// // https://stormy-fjord-68080.herokuapp.com/appointments?email=${user.email}
// // {appointments.length}


// // #### Use Basic structure #######
// // useEffect(() => {
// //     const url = ``
// //     fetch('')
// //     .then(res => res.json())
// //     .then(data => setAppointments(data));
// // }, [])