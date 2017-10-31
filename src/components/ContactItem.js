import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import RaisedButton from 'material-ui/RaisedButton';
import Remove from './Remove';

 class  ContactItem extends Component {
     constructor(props){
         super(props);
     }
  render() {
      const {  contactInfo, actions } = this.props;
        return (
            <div style={{ padding: '30px' }}>
                { contactInfo &&
                    <div>
                        <h5>{contactInfo.lastName}</h5>
                        <h5>{contactInfo.firstName}</h5>
                        <h5>{contactInfo.email}</h5>
                        <RaisedButton className="left"  label="Modify Contact" onClick={()=>{actions.modifycontactinfo(contactInfo).then(() => {
                  browserHistory.push('/modify');})
                }}/>
                        <Remove id={contactInfo.id} contactInfo ={contactInfo}/>
                        <hr/>
                    </div>
                }
            </div>
      );
  }
}
ContactItem.propTypes = {
    actions: PropTypes.object.isRequired,
    contactInfo: PropTypes.object.isRequired
};


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(null,
    mapDispatchToProps
)(ContactItem);
