import React, { useState } from 'react';
import { Alert, Container, Grid, Typography } from '@mui/material';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teath Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 7
    },
    {
        id: 3,
        name: 'Orthopedics',
        time: '09.00 AM - 10.00 AM',
        space: 6
    },
    {
        id: 4,
        name: 'Heart',
        time: '09.00 AM - 10.00 AM',
        space: 4
    },
    {
        id: 5,
        name: 'Dentist',
        time: '09.00 AM - 10.00 AM',
        space: 5
    },
    {
        id: 6,
        name: 'Diabetics',
        time: '11.00 AM - 12.00 AM',
        space: 9
    }
]

const AvailableAppointments = ({ date }) => {

    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h5" sx={{ color: 'info.main', fontWeight: 400, py: 3 }}>AvailableAppointments on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Booking Successfully</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    >
                    </Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;