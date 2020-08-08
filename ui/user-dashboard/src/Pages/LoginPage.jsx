import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';


const Login = props => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const Login = async () => {
        const result = await fetch('http://localhost:4000/api/v1/user/login', {
            method: 'post',
            body: JSON.stringify({
                email:username,
                password:password
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await result.json();
        if (body.accessToken) {
            localStorage.setItem('accessToken', body.accessToken)
        }else{
            console.log("Login failed");
        }
    }
    

    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '30ch',
          },
        },

        card: {
            maxWidth: 345,
        }
      }));
      
      const classes = useStyles();

    return (
        <Grid
        container
        spacing={0}
        align="center"
        justify="center"
        direction="column"
        style={{ minHeight: '50vh' }}
    >
        <Grid item >
            <Card variant="outlined" className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">Login</Typography>
                    <form className={classes.root}>
                        <TextField  label="Username" value={username} onChange={(event) => {setUsername(event.target.value)}} /> 
                        <br />
                        <TextField  label="Password" type="password" value={password} onChange={(event) => {setPassword(event.target.value)}} />
                    </form>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" onClick={() => {Login()}}>Login</Button>
                </CardActions>
            </Card>
        </Grid>
    </Grid>
    );
}

export default Login;