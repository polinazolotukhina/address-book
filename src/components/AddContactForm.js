import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';


const capitalize = value => value.charAt(0).toUpperCase() + value.substring(1);
const lower = value => value && value.toLowerCase();


const AddContactForm = props => {
    const { handleSubmit } = props;
    return (
      <div>
          <h1> Add New Contact</h1>
          <hr />
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" component="input" type="text" normalize={capitalize} />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" component="input" type="text" normalize={capitalize} />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" normalize={lower} />
              </div>
              <button type="submit">Submit</button>
              <button onClick={() => { browserHistory.push('/'); }} >Cancel</button>
            </form>
        </div>
    );
};

AddContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(AddContactForm)

export default AddContactForm;
