import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Testi = ({ client }) => {
    const { name, desc, img, location } = client;
    return (
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12} >
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography sx={{ fontSize: "16px" }}>
                    {desc}
                </Typography>
                <Box container sx={{ p: 4 }}>
                    <Grid container spacing={5} sx={{ alignItems: 'center' }}>
                        <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <img src={img} style={{ width: "100%" }} alt="" />
                        </Grid>
                        <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography sx={{ fontSize: '20px', color: "#1CC7C1" }}>
                                {name}
                            </Typography>
                            <Typography sx={{ fontSize: '15px' }}>
                                {location}
                            </Typography>
                        </Grid>
                    </Grid>

                </Box>
            </Paper>
        </Grid>
    );
};

export default Testi;