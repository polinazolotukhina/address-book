import React from 'react'
import { getFirebase } from 'react-redux-firebase';
import { browserHistory } from 'react-router';
import AddContactForm from './AddContactForm';



export default class AddContact extends React.Component {
    submit(values) {
      const firebase = getFirebase()
      firebase
      .push('contacts', values)
      .then(() => {
        browserHistory.push('/')
      })
    }

    render() {

      return (
            <div className="container">
                <AddContactForm onSubmit={this.submit} />
            </div>
      )
    }
}
