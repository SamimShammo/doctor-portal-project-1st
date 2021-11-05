import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import bannerbg from '../../../images/bg.png'
import chair from '../../../images/chair.png'
import Button from '@mui/material/Button';
import useStyle from '../../Shared/useStyle/useStyle';

const Banner = () => {
    const { btnCustom } = useStyle()
    const banner = {
        backgroundImage: `url(${bannerbg})`,
        padding: '14% 0',
        backgroundAttachment: "fixed",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundBlendMode: "overlay",

        color: 'black'

    }
    return (
        <Box sx={{ flexGrow: 1, }} style={banner}>
            <Container>
                <Grid container spacing={2} style={{ alignItems: 'center' }} >
                    <Grid item xll={7} xl={7} lg={7} md={7} sm={12} xs={12}>
                        <Box >

                            <Typography variant="h3" sx={{ mb: 4 }} style={{ fontWeight: 700 }}>
                                Your New Smile <br /> Starts Here
                            </Typography>
                            <Typography variant="h5" sx={{ mb: 5 }}>
                                It is long establish fact that a reader will be distractedby the readable content of a page when looking at its.
                            </Typography>
                            <Button variant="contained" sx={{ mb: 2 }} style={btnCustom}>Appointment</Button>

                        </Box>
                    </Grid>
                    <Grid xll={5} xl={5} lg={5} md={5} sm={12} xs={12} >
                        <img src={chair} style={{ width: '100%' }} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;