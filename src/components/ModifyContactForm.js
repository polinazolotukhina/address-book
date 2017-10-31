import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';

const capitalize = value => value.charAt(0).toUpperCase() + value.substring(1);


let ModifyContactForm = props => {
  const { handleSubmit } = props;
    return (
        <div>
            <h2>Modify Contact</h2>
            <hr/>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" component="input" type="text"  normalize={capitalize}  />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" component="input" type="text"  normalize={capitalize} />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email"  />
              </div>
              <button type="submit">Submit</button>
              <button onClick={()=>{browserHistory.push('/');}} >Cancel</button>
            </form>
        </div>
    );
};

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
ModifyContactForm = reduxForm({
  form: 'modifycontactform' // a unique identifier for this form
})(ModifyContactForm)

export default ModifyContactForm;
