import React, { Component } from "react";

class Palindrome extends Component {
    constructor() {
        super()

        this.state = {
            userInput: "",
            palindrome: "",
        }
    }

    updateUserInput(event) {
        this.setState({userInput: event.target.value})
    }

    palindromeCheck() {
        let str = this.state.userInput.split("").reverse().join("");
        this.state.userInput === str ? 
        this.setState({palindrome: "true"}) : 
        this.setState({palindrome: "false"})   }

    render() {
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Palindrome</h4>
                <input type="text" className="inputLine" 
                onChange={(event) => {this.updateUserInput(event)}}/>
                <button className="confirmationButton" 
                onClick={() => {this.palindromeCheck()}}>Check</button>
                <span className="resultsBox">
                    Palindrome: {this.state.palindrome}
                </span>
            </div>
        )
    }
}

export default Palindrome;