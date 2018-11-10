import React, { Component } from "react";

class Sum extends Component {
    constructor() {
        super()

        this.state = {
            num1: 0,
            num2: 0,
            sum: null,
        }
    }

    updateInput1(event) {
        this.setState({num1: event.target.value})
    }

    updateInput2(event) {
        this.setState({num2: event.target.value})
    }

    sum() {
        this.setState({sum: Number(this.state.num1) + Number(this.state.num2)})
    }

    render() {
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input type="text" className="inputLine" 
                onChange={(event) => {this.updateInput1(event)}}/>
                <input type="text" className="inputLine" 
                onChange={(event) => {this.updateInput2(event)}}/>
                <button className="confirmationButton" 
                onClick={() => {this.sum()}}>Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;