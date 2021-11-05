import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import dental from "../../../images/dental.png";
import useStyle from '../../Shared/useStyle/useStyle';
const DentalCare = () => {
    const { btnCustom } = useStyle()
    return (
        <Container>
            <Box container style={{ alignItems: 'center' }} >
                <Grid container spacing={2} sx={{ alignItems: 'center', mt: 5, mb: 5 }}>

                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{ textAlign: "center" }}>
                        <img src={dental} style={{ width: "70%", textAlign: "center" }} alt="" />
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Typography variant="h3" sx={{ fontWeight: "700", mb: 4 }}>
                            Exceptional Dental Care, on Your Terms


                        </Typography>
                        <Typography sx={{ fontSize: "15px", color: 'gray' }}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                        </Typography>
                        <Button variant="contained" sx={{ mt: 2 }} style={btnCustom}>Treatment</Button>

                    </Grid>

                </Grid>
            </Box>
        </Container>

    );
};

export default DentalCare;