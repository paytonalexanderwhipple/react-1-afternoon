import React, { Component } from "react";

class FilterString extends Component {
    constructor() {
        super()

        this.state = {
            defaultArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: "",
            filteredArray: [],
        }
    }

    updateInput(event) {
        this.setState({userInput: event.target.value})
    }

    displaySolution() {
        let filteredArray = this.state.defaultArray.filter((val) => val.includes(this.state.userInput));
        filteredArray = filteredArray.join(" , ")
        this.setState({ filteredArray })
    }

    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText"></span>
                <input type="text" className="inputLine" 
                onChange={(event) => {this.updateInput(event)}}/>
                <button className="confirmationButton" 
                onClick={() => {this.displaySolution()}}>
                    Filter
                </button>
                <span className="resultsBox filterStringRB">
                Filtered:[{this.state.filteredArray}]</span>
            </div>
        )
    }
}

export default FilterString;