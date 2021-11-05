import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Typography from '@mui/material/Typography';
const services = [
    {
        name: 'Fluoride Treatment',
        description: " What is a Doctor? Do you thrive in situations where you can interact with and help people? Are you interested in maintaining and",
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: "Want to consider a career as a doctor where you can interact with and help people? Are you interested in maintaining and",
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: " Restoring people's health through where you can interact with and help people? Are you interested in maintaining and",
        img: whitening
    }
]

const Services = () => {

    return (
        <Box sx={{ flexGrow: 1, mt: 5, textAlign: 'center' }} >
            <Container>
                <Typography sx={{ fontWeight: 500, color: "#1CC7C1" }} variant="h6" component="div" >
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, color: 'primary', mb: 2 }} variant="h4" component="div">
                    Service We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12, xl: 12 }}>

                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }

                </Grid>
            </Container>
        </Box>
    );
};

export default Services;