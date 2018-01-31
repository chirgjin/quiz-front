import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
 class Terms extends Component{
        
        nextPage() {
                window.location.href = "/login";
        }
        render(){
                import("./../css/clock.css");
                import("./../css/jumbotron.css");
                return(
                        <div className="body">
                                    <div className="container">
                                        <div className="jumbotron">
                                                <h1>Terms & Condition</h1>
                                                <br/>
                                                <ul className="list-group">
                                                        <li className="list-group-item">There will be 20 multiple choice questions (MCQS) which has to be completed within 20
                                        minutes.</li>
                                                        <li className="list-group-item">The timer will start as soon as the quiz begins.</li>
                                                        <li className="list-group-item">There will be internet access but only jQuery library will be allowed to use, if any team found
                                        using any other public library that team will be immediately disqualified.</li>
                                                        <li className="list-group-item">Only the top 10 teams will be selected for the final round, the 2 nd round is the final round.</li>
                                                        <li className="list-group-item">There will be no prize for the 1<sup>st</sup> round.</li>
                                                        <li className="list-group-item">Teams caught guilty of adopting any unfair means shall be disqualified immediately.</li>
                                                </ul>
                                                <br/>
                                                <button id='sub' className="btn btn-success pull-right" onClick= {this.nextPage.bind(this)} >I Agree</button>
                                                <br/>
                                        </div>
                                </div>
                        </div>
                )
        }
 }

 export default Terms;
