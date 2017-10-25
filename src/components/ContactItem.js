import React, { Component } from 'react';
import { FlatButton } from 'material-ui';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions/actions';
import Remove from './Remove';
import Modify from './Modify';



 class  ContactItem extends Component {
 constructor(props){
      super(props);
     }
  render() {
      const {  contactInfo, idkey, actions } = this.props;
        return (
            <div>
                <h1>{contactInfo.lastName&&contactInfo.lastName.charAt(0)}</h1>
                <h5>{contactInfo.lastName}</h5>
                <h5>{contactInfo.firstName}</h5>
                <h5>{contactInfo.email}</h5>
                <RaisedButton  label="Modify" onClick={()=>{actions.ModifyContact(contactInfo, idkey).then(() => {
                  browserHistory.push('/modify')})
                }}/>
                <Remove id={idkey} contactInfo ={contactInfo}/>
                <Modify contactInfo={contactInfo} />
                <hr/>
            </div>
      )
  }
}

ContactItem.propTypes = {
    actions: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    const { contact } = state;
    return {
        contact,
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
)(ContactItem);
