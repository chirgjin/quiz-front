import React, { Component } from 'react';

class Countdown extends Component {
        constructor(props){
                super(props);
                this.state = {
                        response: { end_time : null },
                        min:0,
			sec:0,
                        time_text : '',
                        loadingWidth: 1,
                        time_difference : 0,
                }
                import("./../css/clock.css");
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
                console.log(this.state.response.end_time);

                if(this.state.time_difference)
                        current_time -= this.state.time_difference;
                
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
                        let current_time = Math.floor( (new Date()).getTime() / 1000 );

                        this.state.time_difference = current_time - json.current_time;
		})
		.catch(err => console.log(err))
		setInterval(() =>this.componentWillMount() , 1000)
                }
                
                timer(end, start){
                        let time =  end - start -1;
                        
                        if(time < 0) {
                                window.location.href = "/result";
                                return ;
                        }
                        let hours = Math.floor( time / 3600 );
                        
                        time -= hours*3600;
                        
                        let min = Math.floor(time / 60);
                        let sec = Math.floor(time%60);

                        
                        //console.log("min",min,"sec",sec);
                        let time_text = '';
                        
                        
                        //this.setState({min, sec,time_text,});

                        if (time < 0) {
                                time_text = "Time Over";
                        }
                        else {
                                if(hours > 0) {
                                        time_text = hours + ":" + min + ":" + sec;
                                }
                                else
                                        time_text = min + ":" + sec;
                        }
                        
                        this.setState({min, sec,time_text,});
                }
	
        render(){
                return(
                        <div>
                                <div className="container">
                                        <div className="jumbotron">
                                        <div className="centered">
                                                <h1 align="center" >Result Declaration!</h1>
                                                <div className='container'>
                                                        <h2 className="countdown">{this.state.time_text}</h2></div>
                                                </div>
                                        <br/>
                                        </div>
                                </div>
                        </div>
                );
        }
}

export default Countdown;