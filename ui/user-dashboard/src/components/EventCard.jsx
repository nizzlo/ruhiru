import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RoomIcon from '@material-ui/icons/Room';

const EventList = ({ events }) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 345,
            margin: 5,
          },
          media: {
            height: 140,
          },
    }));
      
    const classes = useStyles();

    return (
        <Fragment>
        { events.map((event, key) => (
            <Card className={classes.root} key={key}>
            
            <CardMedia
                className={classes.media}
                image={"https://source.unsplash.com/345x140/?baby?sig="+key}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">{event.name}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">{event.description}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <RoomIcon /> {event.location}
                </Typography>
            </CardContent>


            <Button size="small" color="primary">Share</Button>
            <Button size="small" color="primary">Learn More</Button>
            
            </Card>
        ))}

        </Fragment>
    );

};

export default EventList;