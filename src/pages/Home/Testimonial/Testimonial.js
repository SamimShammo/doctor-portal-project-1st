import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import testim from "../../../images/testim.png";
import Testi from './Testi/Testi';



const Testimonial = () => {




    const Clients = [
        { desc: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsus's that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.", name: "Wilson Harry", location: "California", id: 1, img: "https://i.ibb.co/0j3X4LH/people-1.png" },
        { desc: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsus's that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.", name: "Sara Onamis", location: "New York", id: 2, img: "https://i.ibb.co/28SnC8T/people-2.png" },
        { desc: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsus's that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.", name: "Fairoz Fiona", location: "Washington", id: 3, img: "https://i.ibb.co/Ptzz0TC/people-3.png" },
    ]
    return (
        <Container>
            <Box sx={{ mt: 5, mb: 5 }}>
                <Grid container item spacing={2} sx={{ alignItems: "center", }}>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Typography variant="h6" sx={{ color: "#1CC7C1" }}>
                            TESTIMONIAL
                        </Typography>
                        <Typography variant="h3" sx={{ fontWeight: "600", mt: 4, mb: 4 }}>
                            What's Our Patients <br /> Says
                        </Typography>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{ textAlign: "right" }}>
                        <img src={testim} alt="" />
                    </Grid>
                </Grid>
                <Grid container item spacing={2}>
                    {
                        Clients.map(client => <Testi client={client} key={client.id}></Testi>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Testimonial;