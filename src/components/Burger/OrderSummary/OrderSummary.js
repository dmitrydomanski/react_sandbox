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
            <div style={{width: '100%', display: 'inline-flex', justifyContent: 'space-between'}}> 
                <h3> Your order </h3>
            <p><strong>Total Price: {props.price}</strong></p>
            </div>
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