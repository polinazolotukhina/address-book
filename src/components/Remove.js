import React from 'react';
import { Dialog, FlatButton } from 'material-ui';
import { getFirebase } from 'react-redux-firebase';
import RaisedButton from 'material-ui/RaisedButton';


class Remove extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        open: false
      };
    }

   render() {
       const { id, contactInfo } = this.props;
       const firebase = getFirebase();
       const actions = [
         <FlatButton
           label="Cancel"
            primary
            onClick={() => this.setState({ open: false })}
         />,
         <FlatButton
           label="Remove Contact"
           secondary
           onClick={() => firebase.remove('contacts/' + id)}
         />,
       ];
        return (
            <div className="remove" >
                <RaisedButton
                    default
                    label="Remove Contact"
                    onClick={() => this.setState({ open: true })}
                />
                <Dialog
                  actions={actions}
                  modal={false}
                  open={this.state.open}
                  onRequestClose={() => this.setState({ open: false })}
                >
                    Are you sure you want to delete contact <b>{contactInfo.firstName+ " " +contactInfo.lastName}</b>?
                </Dialog>
            </div>
        );
    }
}
export default Remove;
