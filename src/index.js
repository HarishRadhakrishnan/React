import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './login.css';
import {Router,Route,browserHistory,IndexRoute} from 'react-router';
import Login from './components/login-component';
import Nav from './components/nav-component';
import Add from './components/add-component';
import Customer from './components/customer-component';
import {Provider} from 'react-redux';
import store from './store/store';

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Login} />
			<Route path="/nav" component={Nav}>
				<IndexRoute component={Add}/>
			</Route>
			<Route path="/customer" component={Customer} />
		</Router>
	</Provider>
,document.getElementById("root"));
