import React from 'react';
import { Dialog, FlatButton } from 'material-ui';
import { getFirebase } from 'react-redux-firebase';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions/actions';


 const  mydata = {firstName: "abcsdfsdfdf", lastName: "b", email:"y"}

class Modify extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        open: false
      };
    }

   render() {
       const {  contactInfo, handleSubmit } = this.props;
       const firebase = getFirebase();
       const actions = [
         <FlatButton
           label="Cancel"
           primary={true}
           onClick={() => this.setState({open: false})}
         />,
         <FlatButton
           label="lalal"
           secondary={true}
           onClick={() => firebase.remove('contacts/' + id)}
         />,
       ];
        return (
            <div>
            <div className="remove" >
                <RaisedButton default={true} label="Modify"  onClick={() => this.setState({open: true}) }/>
                <Dialog
                  actions={actions}
                  modal={false}
                  open={this.state.open}
                  onRequestClose={() => this.setState({open: false})}
                >
                <form onSubmit={ handleSubmit }>
                  <div>
                    <label htmlFor="firstName">First Name{contactInfo.firstName}</label>
                    <Field name="firstName" component="input" type="text" />
                  </div>
                  <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" component="input" type="text" />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="email" />
                  </div>
                  <button type="submit">Submit</button>
                </form>
                </Dialog>

            </div>
            </div>
        );
    }
}
Modify = reduxForm({
  form: 'modifycontact' // a unique identifier for this form
})(Modify)

function mapStateToProps(state) {
    const { contact } = state;
    return {
        contact,
        initialValues: contact
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

Modify.propTypes = {
    actions: PropTypes.object.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modify);
