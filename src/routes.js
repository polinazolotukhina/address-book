import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import AddContact from './components/AddContact';
import ModifyContact from './components/ModifyContact';
import Home from './containers/Home';
import NotFoundPage from './components/NotFoundPage';




export default (

    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/addcontact" component={AddContact}/>
      <Route path="/modify" component={ModifyContact}/>
      <Route path="*" component={NotFoundPage}/>
  </Route>


);
