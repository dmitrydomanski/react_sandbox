import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render() {

        const ingridientsSummary = Object.keys(this.props.ingridients)
            .map(igKey => {
                return (<li key={igKey}>< span style={{ textTransform: 'capitalize' }}>{igKey} </span>
                    : {this.props.ingridients[igKey]}</li>)
            });

        return (
            <Aux>
                <div style={{ width: '100%', display: 'inline-flex', justifyContent: 'space-between' }}>
                    <h3> Your order </h3>
                    <p><strong>Total Price: {this.props.price}</strong></p>
                </div>
                <p> the burger you've ordered contains: </p>
                <ul>
                    {ingridientsSummary}
                </ul>
                <p> Continue to Checkout?</p>
                <Button btnType='Danger' clicked={this.props.purchaseCancelled} >CANCEL</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
};

export default OrderSummary;