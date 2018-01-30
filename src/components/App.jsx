import React, { Component } from 'react';
import Login from './Login.jsx';
import Quiz from './quiz.jsx';
import Countdown from './Clock.jsx'
import {  BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			status : null,
			base_domain : `https://quizportal.cf/backend/`
		}
	}
	statusUpdate(obj){
		this.setState({
			status: obj
		});
	}
	check(){
		if(window.location.pathname === '/'){
			window.location.href = '/login'
		}
		Login.baseURL = this.state.base_domain;
	}
	render() {
			this.check();
		return (
			<BrowserRouter>
				<div>
					<Route path='/login' statusUpdate = {this.statusUpdate.bind(this)} render = {(props) => ( <Login base_origin = {this.state.base_domain} />)} />
					<Route path='/dashboard' render = {(props) => ( <Quiz base_origin = {this.state.base_domain} />)} />
					<Route path='/countdown' render = {(props) => ( <Countdown base_origin = {this.state.base_domain} />)} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
