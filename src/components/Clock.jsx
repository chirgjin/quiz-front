import React, { Component } from 'react';
import './../css/clock.css';
class Countdown extends Component {
        constructor(props){
                super(props);
                this.state = {

                }
        }
        render(){
                return(
                        <div>
                                <div className="clock">
                                        <div className="hours">
                                        <div className="first">
                                        <div className="number">0</div>
                                        </div>
                                        <div className="second">
                                        <div className="number">0</div>
                                        </div>
                                        </div>
                                        <div className="tick">:</div>
                                        <div className="minutes">
                                        <div className="first">
                                        <div className="number">0</div>
                                        </div>
                                        <div className="second">
                                        <div className="number">0</div>
                                        </div>
                                        </div>
                                        <div className="tick">:</div>
                                        <div className="seconds">
                                        <div className="first">
                                        <div className="number">0</div>
                                        </div>
                                        <div className="second infinite">
                                        <div className="number">0</div>
                                        </div>
                                        </div>
                                </div>
                        </div>
                )
        }
}

export default Countdown;