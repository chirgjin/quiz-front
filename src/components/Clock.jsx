import React, { Component } from 'react';
import './../css/clock.css';
class Countdown extends Component {
        constructor(props){
                super(props);
                this.state = {
                        response: { end_time : null },
                        min:0,
			sec:0,
			time_text : ''
                }
        }
        componentWillMount(){
		//this.state.response.ending_time = 1517307309.576;
                let current_time = (new Date()).getTime() / 1000;
                
                if(this.state.response.end_time === null) {
                        this.setState({
                                time_text : "Loading.."
                        });
                        return ;
                }
		this.timer(this.state.response.end_time,current_time)
		// this.setState({
		// 	response :	{
		// 		starting_time: starting_time-1,
		// 		ending_time: ending_time -1
		// 	}
		// })
	}
	componentDidMount(){
		let base_url = this.props.base_origin + 'endtime.api.php'
		fetch(base_url,{
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			credentials: 'include'
		}).then(res => res.json())
		.then((json) => {
                        this.setState({response : json});
		})
		.catch(err => console.log(err))
		setInterval(() =>this.componentWillMount() , 1000)
                }
                
                timer(end, start){
                        let time =  end - start -1;
                        
                        let hours = Math.floor( time / 3600 );
                        
                        time -= hours*3600;
                        
                        let min = Math.floor(time / 60);
                        let sec = Math.floor(time%60);

                        
                        //console.log("min",min,"sec",sec);
                        let time_text = '';
                        
                        
                        if (time < 0) {
                                time_text = "Time Over";
                        }
                        else {
                                if(hours > 0) {
                                        time_text = hours + ":" + this.state.min + ":" + this.state.sec;
                                }
                                else
                                        time_text = this.state.min + ":" + this.state.sec;
                        }
                        
                        this.setState({min, sec,time_text,});
                }
	
        render(){
                return(
                        <center>
                                <div className="center-area">
                                        <div className="centered">
                                        <h1>Result Declaration!</h1>
                                        <div className='container'><h2 className="countdown">{this.state.time_text}</h2></div>
                                        </div>
                                </div>
                        </center>
                )
        }
}

export default Countdown;