import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bgContact from '../../../images/chair.png'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import useStyle from '../../Shared/useStyle/useStyle';

const Contact = () => {

    const bgCon = {
        backgroundImage: `url(${bgContact})`,
        padding: "14% 0",
        backgroundAttachment: "fixed",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundBlendMode: "overlay",
        backgroundColor: "rgb(1 1 1 / 74%)"
    }
    const { btnCustom } = useStyle()

    const handleSubmitnew = e => {
        alert('Successfully')
        // collect data from server 
        e.preventDefault()

    }


    return (
        <Box style={bgCon} >
            <Container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                    <Box sx={{ textAlign: "center" }}>
                        <Typography sx={{ fontSize: '17px', color: "#1CC7C1" }}>
                            CONTACT US
                        </Typography>
                        <Typography variant="h3" sx={{ color: "white" }}>
                            Always Contact With us
                        </Typography>
                    </Box>
                    <Box sx={{ mt: 5 }}>
                        <Grid item xl={8} lg={8} md={8} sm={8} xs={12} sx={{ m: 'auto' }}>
                            <form onSubmit={handleSubmitnew}>
                                <TextField

                                    sx={{ width: '100%', mb: 2, }}
                                    style={{ border: '1px solid white', textColor: "white", backgroundColor: "white" }}
                                    id="outlined-size-small"
                                    placeholder="Your Name"
                                    size="small"
                                />
                                <TextField

                                    sx={{ width: '100%', mb: 2, }}
                                    style={{ border: '1px solid white', textColor: "white", backgroundColor: "white" }}
                                    id="outlined-size-small"
                                    placeholder="Your Email"
                                    size="small"
                                />
                                <TextareaAutosize
                                    minRows={4}

                                    style={{ width: "100%", border: '1px solid white', textColor: "white", backgroundColor: "white" }}
                                    aria-label="empty textarea"
                                    placeholder="Your Message"

                                    size="small"
                                />
                                <TextField

                                    sx={{ width: '100%', mb: 2, mt: 2 }}
                                    style={{ border: '1px solid white', textColor: "white", backgroundColor: "white" }}
                                    id="outlined-size-small"
                                    placeholder="Your Phone Number"
                                    size="small"
                                />
                                <Button sx={{ textAlign: 'center' }} style={btnCustom} variant="contained" type="submit">Submit</Button>
                            </form>
                        </Grid>
                    </Box>
                </Grid>
            </Container>
        </Box >
    );
}

export default Contact;