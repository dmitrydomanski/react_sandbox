import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        adress: {
            city: '',
            street: ''
        }
    }

    render() {

        return (
            <div className={classes.ContactData}>
                <h4> Enter your contact Data</h4>
                <form>
                    <input type='text' name="name" placeholder="Your name" />
                    <input type='email' name="email" placeholder="Your email" />
                    <input type='text' name="city" placeholder="Your city" />
                    <input type='text' name="street" placeholder="Your street" />
                    <Button btnType="Success"> ORDER </Button>
                </form>
            </div>
        )
    }
}

export default ContactData;