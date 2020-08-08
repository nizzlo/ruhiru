import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import EventPage from '../Pages/EventPage'; 

const NavBar = props => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Fragment>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} >
                    <Tab label="Home" />
                    <Tab label="Profile"  />
                    <Tab label="Events"  />
                    <Tab label="Register" />
                    <Tab label="Login" />
                </Tabs>
            </AppBar>
            { value === 0 && <HomePage /> }
            { value === 1 && <HomePage /> }
            { value === 2 && <EventPage /> }
            { value === 3 && <HomePage /> }
            { value === 4 && <LoginPage /> }
      </Fragment>
    );
}

export default NavBar;