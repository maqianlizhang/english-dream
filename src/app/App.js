import React, { Component } from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import { Provider } from 'react-redux'
import store from '../store/store'
import {View as ComponentWrapper} from '../pages/common/'
import {View as Index} from '../pages/index/'
import {View as Detail} from '../pages/detail/'

import 'antd/dist/antd.css';
import './reset.css';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={ComponentWrapper}>
            <IndexRoute component={Index}></IndexRoute>
            <Route path="/detail/:id" component={Detail}></Route>
          </Route>
        </Router>
      </Provider>
    )
  }
}

export default App;
