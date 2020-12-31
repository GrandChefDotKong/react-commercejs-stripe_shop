import React from 'react'
import { Container, Button, Grid, Typography } from '@material-ui/core';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Cart = ({ cart, handleUpdateCartQty, handleDeleteFromCart, handleEmptyCart }) => {
    const classes = useStyles();
    const isEmpty = cart.total_items === 0;

    const EmptyCart = () => (
        <Typography variant="subtitle1">
            You have no items in your shopping cart :'(
            <Link to="/" className={classes.link}>Start adding some ;)</Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item}  onUpdateCartQty={handleUpdateCartQty} onDeleteFromCart={handleDeleteFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal : { cart.subtotal.formatted_with_symbol }</Typography>
                <div>
                    <Button size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart} className={classes.emptyButton}>Empty Cart</Button>
                    <Button component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary" className={classes.checkoutButton}>Checkout</Button>
                </div>
            </div>
        </>
    );


    if(!cart.line_items) return 'Loading ...';

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography variant="h3" className={classes.title} gutterBottom>Your Shopping Cart</Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart /> }
        </Container>
    )
}

export default Cart
