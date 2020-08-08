import React, { Fragment, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import EventCard from '../components/EventCard';


const Event = props => {
    
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const eventResult = await fetch('http://localhost:4000/api/v1/event');
            const eventBody = await eventResult.json();
            setEvents(eventBody);

        } 
        fetchData();
    }, []);



    return (
        <Fragment>
            <h1>Events</h1>
            <Grid
                container
                spacing={0}
                align="center"
                justify="center"
                direction="column"
            >
                <Grid item >
                    <EventCard events={events}/>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default Event;