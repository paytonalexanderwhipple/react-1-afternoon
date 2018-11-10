import React, { Component } from "react";

class EvenAndOdd extends Component {
    constructor() {
        super()

        this.state = {
            evenArray: "",
            oddArray: "",
            userInput: "",
        }
    }

    updateInput(event) {
        this.setState({userInput: event.target.value})
    }

    updateArrays() {
        const numsToSort = this.state.userInput.split(",")
        let evenArray = [];
        let oddArray = [];
        for (let i = 0; i < numsToSort.length; i++) {
            let num = Number(numsToSort[i]);
            num % 2 === 0 ? evenArray.push(num) : oddArray.push(num)
        }
        evenArray = evenArray.join(",")
        oddArray = oddArray.join(",")
        this.setState({evenArray, oddArray})
    }

    render() {
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input type="text" className="inputLine" 
                    value={this.state.userInput} 
                    onChange={(event) => {this.updateInput(event)}}/>
                <button className="confirmationButton"
                    onClick={() => {this.updateArrays()}}>
                    Split
                </button>
                <span className="resultsBox">
                Evens: [{this.state.evenArray}]
                </span>
                <span className="resultsBox">
                Odds: [{this.state.oddArray}]
                </span>
            </div>

        )
    }
}

export default EvenAndOdd;