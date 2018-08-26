import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingridientsSummary = Object.keys(props.ingridients)
        .map(igKey => {
            return (<li key={igKey}>< span style={{ textTransform: 'capitalize' }}>{igKey} </span>
                : {props.ingridients[igKey]}</li>)
        });
    return (
        <Aux>
            <h3> Your order </h3>
            <p> burger you've ordered contains: </p>
            <ul>
                {ingridientsSummary}
            </ul>
            <p> Continue to Checkout?</p>
           <Button btnType='Danger' clicked={props.purchaseCancelled} >CANCEL</Button>
           <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )

};

export default orderSummary;