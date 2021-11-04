import React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import './Calendar.css'

const Calendar = ({ date, setDate }) => {

    return (
        <Container>
            <Grid container spacing={2} style={{ alignItems: 'center' }} >
                <Grid item xll={8} xl={8} lg={8} md={8} xs={12}>

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <StaticDatePicker
                            displayStaticWrapperAs="desktop"
                            sx={{ fontSize: '40px' }}
                            value={date}
                            openTo="day"
                            onChange={(newdate) => {
                                setDate(newdate);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Calendar;