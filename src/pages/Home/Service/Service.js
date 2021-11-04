import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


const Service = ({ service }) => {
    const { name, img, description } = service;
    return (
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
            <Card sx={{ minWidth: 275, boxShadow: 0, mt: 5 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '100px', margin: 'auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>

                    <Typography variant="body2" sx={{ fontSize: 16 }}>
                        {description}
                    </Typography>
                </CardContent>

            </Card>
        </Grid>
    );
};

export default Service;