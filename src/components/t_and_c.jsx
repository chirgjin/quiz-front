import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/clock.css';
 class Terms extends Component{
        render(){
                return(
                        <div className="body">
                                    <div className="container">
                                        <div className="jumbotron">
                                                <h1>Terms & Condition</h1>
                                                <br/>
                                                <ul className="list-group">
                                                        <li className="list-group-item">There will be 20 multiple choice questions (MCQS) which has to be completed within 20
                                        minutes.<input type="checkbox" className="checkbox pull-right" required/></li>
                                                        <li className="list-group-item">The timer will start as soon as the quiz begins.<input type="checkbox" className="checkbox pull-right" required/></li>
                                                        <li className="list-group-item">There will be internet access but only jQuery library will be allowed to use, if any team found
                                        using any other public library that team will be immediately disqualified.<input type="checkbox" className="checkbox pull-right" required/></li>
                                                        <li className="list-group-item">Only the top 10 teams will be selected for the final round, the 2 nd round is the final round.<input type="checkbox" className="checkbox pull-right" required/></li>
                                                        <li className="list-group-item">There will be no prize for the 1<sup>st</sup> round.<input type="checkbox" className="checkbox pull-right" required/></li>
                                                        <li className="list-group-item">Teams caught guilty of adopting any unfair means shall be disqualified immediately.<input type="checkbox" className="checkbox pull-right" required/></li>
                                                </ul>
                                                <button id='sub' className="btn btn-success btn-lg pull-right">I Agree</button>
                                                <br/>
                                        </div>
                                </div>
                        </div>
                )
        }
 }

 export default Terms;
