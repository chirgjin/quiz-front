import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../css/dashboard.css';

class Quiz extends Component {
	constructor(props){
		super(props);
		this.state = {
			questions : [],
			response: JSON.parse(localStorage.getItem('response')),
			credential1: localStorage.getItem('credential1'),
			credential2:localStorage.getItem('credential2'),
			min:0,
			sec:0,
			time_text : ''
		}
	}
	componentWillMount(){
		//this.state.response.ending_time = 1517307309.576;
		let current_time = (new Date()).getTime() / 1000;
		this.timer(this.state.response.ending_time,current_time)
		// this.setState({
		// 	response :	{
		// 		starting_time: starting_time-1,
		// 		ending_time: ending_time -1
		// 	}
		// })
	}
	componentDidMount(){
		let base_url = this.props.base_origin + 'get-questions.api.php'
		fetch(base_url,{
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			credentials: 'include'
		}).then(res => res.json())
		.then((json) => {
			if(!json.data)
				json.data = null;
			this.setState({questions : json.data});
		})
		.catch(err => console.log(err))
		setInterval(() =>this.componentWillMount() , 1000)
		}
		
	radio_submit(ques,e,value){
		let option = value;
		let base_url = this.props.base_origin + 'submit.api.php'
		let data = {
			ques_id: ques.id,
			answer: option
		}
		let i = 0 , questions = this.state.questions;
		ques.answer = option;

		for( i = 0 ; i < questions.length;i++) {
			let q = questions[i];
			if(q.id === ques.id) {
				q.answer = option;
				questions[i] = q;
			}
		}

		this.setState(questions);

		fetch(base_url,{
			method:'POST',
			headers: {
				'Accept': 'application/json',
			},
			credentials : 'include',
			body : JSON.stringify(data)			
		})		
		.then(res => res.json())
		.then(json => console.log(json))
		.catch(err => err)
	}

	timer(end, start){
		let time =  end - start -1;
		console.log(time);
		let min = Math.floor(time / 60);
		let sec = Math.floor(time%60)
		console.log("min",min,"sec",sec);
		let time_text = '';

		if (time < 0) {
			time_text = "Time Over";
			window.location.href = "/countdown";
		}
		else {
			time_text = this.state.min + ":" + this.state.sec;
		}
		
		this.setState({min, sec,time_text,});
	}
	submitQuessubmitQues
	logout(){
		let base_url = this.props.base_origin + 'logout.php'
		fetch(base_url,{
			method:'GET',
			headers: {
				'Accept': 'application/json',
			},
			credentials : 'include',			
		})
		window.location.href = "/login"
	}

	submitQues(){
		let base_url = this.props.base_origin + 'get-questions.api.php';
		let data = [];

		this.state.questions.map( (question) => (

			data.push({ques_id : question.id , answer : question.answer })
		));
		fetch(base_url,{
			method:'POST',
			headers: {
				'Accept': 'application/json',
			},
			credentials : 'include',
			body : JSON.stringify(data)			
		})		
		.then(res => res.json())
		.then(json => {
			if(json.success){
				//this.logout();
				window.location.href = "/countdown";
			}
			else
				alert(json.message);
		})
		.catch(err => err)
	}

	render() {
		/*
		console.log(this.state.credential1);
		console.log(this.state.credential2);
		console.log(this.state.response);
		console.log(this.state.questions);*/
		if(this.state.questions=== null){
			return (
				<div classNameName="notFoundWrap">
					<div classNameName="horizontalCenter">
						<div classNameName="centered">
							<span><i classNameName="fa fa-exclamation-triangle" aria-hidden="true"></i>Looks like you didn't loggedin.</span>
						</div>
					</div>
				</div>
			)
		}else{

		return (
			<div>
				<div classNameName="components-wrap row">
					<div classNameName="col-2 question_selector">
						<div classNameName="logo-wrapper">
							<img classNameName="logo" src={require('../img/quizapp.png')} alt=""/>
						</div>
						<div classNameName="question_slider">
							<strong>Welcome!</strong>
							<div classNameName='question'>{this.state.credential1}</div>
							<div classNameName='question'>{this.state.credential2}</div>
						</div>
						<div classNameName="count_down">
							<div classNameName='question'>{this.state.time_text}</div>
						</div>
					</div>
					<div classNameName="col-10 ">
						<div classNameName="questionForm container">
							<h2 classNameName="start_quiz">START QUIZ <span onClick={this.logout.bind(this)} classNameName='leftAlign'><i classNameName="fa fa-power-off" aria-hidden="true"></i></span></h2>
							
							<div classNameName="row" >
								{
									this.state.questions.map((ques)=>{
										return(
											<div classNameName="col-md-12 question-box" key={ques.id}>
												<div classNameName="cards" >
													<form>
														
														<strong classNameName="letter-space">{ques.question}</strong><br/>
															<div classNameName="center_text" ><label><span><input type="radio" onChange={(e)=>this.radio_submit(ques,e,1)} classNameName='radio' name="optradio"/></span><span classNameName="letter-space" >{ques.options[0]}</span></label>
															<label><span><input type="radio" onChange={(e)=>this.radio_submit(ques,e,2)} classNameName='radio' name="optradio"/></span><span classNameName="letter-space" >{ques.options[1]}</span></label></div>
															<div classNameName="center_text" ><label><span><input type="radio" onChange={(e)=>this.radio_submit(ques,e,3)} classNameName='radio' name="optradio"/></span><span classNameName="letter-space" >{ques.options[2]}</span></label>
															<label><span><input type="radio" onChange={(e)=>this.radio_submit(ques,e,4)} classNameName='radio' name="optradio"/></span><span classNameName="letter-space" >{ques.options[3]}</span></label></div>											
														
													</form>
												</div>
											</div>
										)
									})
								}
								<div classNameName='col-md-4 center_h'>
									<button onClick={this.submitQues.bind(this)} classNameName="Submit">SUBMIT ALL</button>
									<br/>
								</div>
							</div>
						</div>						
					</div>
				</div>
			</div>
		);
		}
	}
}

export default Quiz;