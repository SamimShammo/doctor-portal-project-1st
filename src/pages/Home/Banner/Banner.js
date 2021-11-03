import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import bannerbg from '../../../images/bg.png'
import chair from '../../../images/chair.png'

const Banner = () => {
    const banner = {
        backgroundImage: `url(${bannerbg})`,
        padding: '14% 0',
        backgroundAttachment: "fixed",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundBlendMode: "overlay",
        backgroundColor: "rgb(42 104 225)",
        color: 'white'

    }
    return (
        <Box sx={{ flexGrow: 1, }} style={banner}>
            <Container>
                <Grid container spacing={2} style={{ alignItems: 'center' }} >
                    <Grid item xll={7} xl={7} lg={7} md={7} xs={12}>
                        <Box >
                            <Typography variant="h6" sx={{}}>
                                Appointment
                            </Typography>
                            <Typography variant="h3" sx={{ mt: 4, mb: 4 }}>
                                Make an Appointment Today
                            </Typography>
                            <Typography variant="h5" sx={{}}>
                                It is long establish fact that a reader will be distractedby the readable content of a page when looking at its.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xll={5} xl={5} lg={5} md={6} xs={12} >
                        <img src={chair} style={{ width: '500px' }} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;