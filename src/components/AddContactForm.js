import React from 'react'
import { Field, reduxForm } from 'redux-form';

const capitalize = value => value.charAt(0).toUpperCase() + value.substring(1);
const lower = value => value && value.toLowerCase();


let AddContactForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" normalize={capitalize}  />
      </div>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" normalize={capitalize} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" normalize={lower}  />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

AddContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(AddContactForm)

export default AddContactForm;
