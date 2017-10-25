import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { getFirebase } from 'react-redux-firebase';
import { browserHistory } from 'react-router';
import CircularProgress from 'material-ui/CircularProgress';
import { compose } from 'redux';
import { firebaseConnect, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase';
import ContactItem from '../components/ContactItem';
import _ from 'lodash';



class Home extends React.Component {
    constructor(props){
     super(props);
    }

    render() {
        const { contacts } = this.props;

        const contactsList = !isLoaded(contacts)
      ? 'Loading'
      : isEmpty(contacts)
        ? 'Contact list is empty'
        : Object.keys(contacts).map(
            (key, id) => (
              <ContactItem key={key} idkey={key} contactInfo={contacts[key]}/>
            )
          )

        return (
            <div>
                CONTACTS
                <div>
                    <RaisedButton label="Add New Contact" onClick={()=>{browserHistory.push('/addcontact')}} />
                </div>
                <div>
                        <ul>
                          {contactsList}
                        </ul>


                      </div>



            </div>
        );
    }
}

export default compose(
  firebaseConnect([
    { path: 'contacts', queryParams: [ 'orderByValue' ] }
  ]),
  connect(
    (state) => ({
      contacts: dataToJS(state.firebase, 'contacts'),

    })
  )
)(Home)
