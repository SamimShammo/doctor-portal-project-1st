import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import appointmentimg from '../../../images/appointment-bg.png'
import doctor from '../../../images/doctor.png'
import Button from '@mui/material/Button';
import useStyle from '../../Shared/useStyle/useStyle';

const AppointmentBanner = () => {
    const { btnCustom } = useStyle()
    const appointmentBg = {
        backgroundImage: `url(${appointmentimg})`,
        backgroundBlendMode: "overlay",
        backgroundColor: "#20232b",
        color: 'white'

    }


    return (
        <Box sx={{ flexGrow: 1, mt: 5, mb: 5 }} style={appointmentBg} >
            <Container>
                <Grid container spacing={2} style={{ alignItems: 'center', marginTop: '150px' }} >
                    <Grid xll={6} xl={6} lg={5} md={6} xs={12} >
                        <img style={{ width: "500px", marginTop: "-120px" }} src={doctor} alt="" />
                    </Grid>
                    <Grid xll={6} xl={6} lg={7} md={6} xs={12}>
                        <Box >
                            <Typography variant="h6" sx={{}}>
                                Appointment
                            </Typography>
                            <Typography variant="h3" sx={{ mt: 4, mb: 4 }}>
                                Make an Appointment Today
                            </Typography>
                            <Typography variant="h5" sx={{ mb: 5 }}>
                                It is long establish fact that a reader will be distractedby the readable content of a page when looking at its.
                            </Typography>
                            <Button variant="contained" style={btnCustom}>Appointment</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentBanner;