import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes great!</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingridients={props.ingridients} />
            </div>
            <Button btnType="Danger"
                    clicked={props.onCheckoutCancelled}>Cancel</Button>
            <Button btnType="Success"
                    clicked = {props.CheckoutContinued}>Continue</Button>
            
        </div>
    )
}

export default checkoutSummary;