import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Title from './partials/Title';
import Submit from './pages/Submit';
import Score from './pages/Score';

/**
 * A counter button: tap the button to increase the count.
 */
class Layout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path ='/' component={Title}>
        <IndexRoute path='/' component={Submit} />
        <Route path='/score' component={Score} />
        </Route>
      </Router>
    )
  }
}
export default Layout;