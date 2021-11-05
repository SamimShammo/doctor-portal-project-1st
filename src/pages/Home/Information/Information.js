import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Information = () => {

    return (
        <Container>
            <Box container style={{ alignItems: 'center', marginTop: "-100px" }} >
                <Grid container spacing={2}>
                    <Grid item xl={4} md={4} xs={6} >
                        <Paper elevation={3} sx={{ p: 4, backgroundColor: "#1CC7C1" }}>
                            <Grid container style={{ alignItems: 'center', }}>

                                <Grid item xl={4} lg={4} md={4} xs={4}>
                                    <i className="far fa-clock " style={{ fontSize: '50px', color: 'white' }}></i>
                                </Grid>
                                <Grid item xl={8} lg={8} md={8} xs={8}>
                                    <Typography sx={{ color: 'white' }} variant="h5">Opening House</Typography>
                                    <Typography sx={{ color: 'white', fontSize: '13px' }} variant="h6">08.00 AM - 10.00 PM</Typography>

                                </Grid>

                            </Grid>

                        </Paper>
                    </Grid>
                    <Grid item xl={4} md={4} xs={6} >
                        <Paper elevation={3} sx={{ p: 4, backgroundColor: "#3A4256" }}>
                            <Grid container style={{ alignItems: 'center' }}>

                                <Grid item xl={4} lg={4} md={4} xs={4}>
                                    <i className="fas fa-map-marker-alt " style={{ fontSize: '50px', color: 'white' }}></i>
                                </Grid>
                                <Grid item xl={8} lg={8} md={8} xs={8}>
                                    <Typography sx={{ color: 'white' }} variant="h5">Visit Our Location</Typography>
                                    <Typography sx={{ fontSize: '13px', color: 'white' }} variant="h6">Brooklyn, NY 10036, United States</Typography>

                                </Grid>

                            </Grid>

                        </Paper>
                    </Grid>
                    <Grid item xl={4} md={4} xs={6} >
                        <Paper elevation={3} sx={{ p: 4, backgroundColor: "#1CC7C1" }}>
                            <Grid container style={{ alignItems: 'center' }}>

                                <Grid item xl={4} lg={4} md={4} xs={4}>
                                    <i class="fas fa-phone-volume" style={{ fontSize: '50px', color: 'white' }}></i>
                                </Grid>
                                <Grid item xl={8} lg={8} md={8} xs={8}>
                                    <Typography sx={{ color: 'white' }} variant="h5">Contact us Now</Typography>
                                    <Typography sx={{ fontSize: '13px', color: 'white' }} variant="h6">+000 123 456789</Typography>

                                </Grid>

                            </Grid>

                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Information;