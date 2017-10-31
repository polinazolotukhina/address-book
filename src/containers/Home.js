import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import { compose, bindActionCreators } from 'redux';
import { firebaseConnect, dataToJS } from 'react-redux-firebase';
import ContactItem from '../components/ContactItem';
import _ from 'lodash';
import ReactAutoHeaderList from 'react-auto-header-list';
import * as actions from '../actions/actions';


class Home extends React.Component {
    constructor(props){
     super(props);
    }

    getSectionHeaderTitle(item) {
		return item.lastName.charAt(0);
	}

	renderHeader(headerKey, key ) {
		return (
			<div key={key} style={{ backgroundColor: '#C5E1A5', color: 'black', padding: '10px 30px', fontSize: '30px' }}>
				{headerKey.toUpperCase()}
			</div>
		);
	}

	renderItem(item, key) {
		return (
			<ContactItem key={key} contactInfo={item} />
		);
	}


    render() {
        const { contacts } = this.props;
        let results = [];
        contacts&&Object.keys(contacts).forEach(key => {
          contacts[key]['id'] = key;
          results.push(contacts[key]);
          results =  _.sortBy(results, 'lastName');

        });
        return (
            <div>
                <div style={{ textAlign: 'right', padding:'10px 0 0 0' }}>
                    <RaisedButton label="Add New Contact" onClick={()=>{browserHistory.push('/addcontact');}} />
                </div>
                <h1>Address Book</h1>
                <ReactAutoHeaderList
					items={results}
                    totalItemCount={results.length}
					isFetching={true}
                    onLoadMore={this.onLoadMoreClicked}
					getSectionHeaderTitle={this.getSectionHeaderTitle}
					renderItem={this.renderItem}
					renderHeader={this.renderHeader}
				/>
            </div>
        );
    }
}

Home.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default compose(
  firebaseConnect([
    { path: 'contacts', queryParams: [ 'orderByValue' ] }
  ]),
  connect(
    (state) => ({
      contacts: dataToJS(state.firebase, 'contacts'),
    }),
    mapDispatchToProps
  )
)(Home)
