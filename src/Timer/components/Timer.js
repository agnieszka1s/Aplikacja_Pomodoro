import React, {Component} from 'react';
import Header from "./Header";
import ButtonPomodoro from "./ButtonPomodoro"



class Timer extends Component{
    constructor(props) {
        super(props);
    }



    render () {
        return (
            <div className="container-fluid">
                <Header />
                <ButtonPomodoro />

            </div>

        )
    }
}

export default Timer;