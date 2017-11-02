import React from 'react';
import { getFirebase } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import ModifyContactForm from './ModifyContactForm';

 class ModifyContact extends React.Component {
    submit(values) {
      const firebase = getFirebase();
      firebase
      .update('contacts/'+ values.id, values)
      .then(() => {
        browserHistory.push('/');
    });
    }

    render() {
        const { contact, initialValues } = this.props;
        return (
            <div className="container">
                <ModifyContactForm
                    onSubmit={this.submit}
                    contact={contact}
                    initialValues={initialValues}
                />
            </div>
      );
    }
}

ModifyContact.propTypes = {
    actions: PropTypes.object.isRequired,
    contact: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    const { contact } = state;
    return {
        contact,
        initialValues: contact.contact
        // initialValues: Object.assign({}, contact.contact[0], {id:contact.contact[1]}
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModifyContact);
