import React from 'react';
import { AppBar, Toolbar, Badge, Menu, MenuItem, Typography, IconButton } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/commerce.png';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();
    return (
        <div>
            <AppBar position='fixed' color= "inherit" className={classes.appBar}>
                <Toolbar >
                    <Typography component={Link} to="/" variant="h6" color="inherit" className={classes.title}>
                        <img src={logo} alt="React-shop.js" height="25px" className={classes.image}/>
                        React-shop.js
                    </Typography>
                    <div className={classes.grow} />
                    { location.pathname === '/' &&
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>}
                </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default Navbar
