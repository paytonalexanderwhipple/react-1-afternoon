import React, { Component } from "react";

class FilterObject extends Component {
    constructor() {
        super()

        this.state = {
            defaultArray: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],
        
            userInput: "",
            filteredArray: [],
        }
    }

    updateUserInput(event) {
        this.setState({userInput: event.target.value})
    }

    displaySolution() {
        const defaultArray = this.state.defaultArray;
        const filteredArray = [];
        for (let i = 0; i < defaultArray.length; i++) {
            let isIn = false;
            for (let key in defaultArray[i]) {
                if (key === this.state.userInput) {
                    isIn = true;
                }
            }
            if (isIn) {
                filteredArray.push(defaultArray[i])
            }
        }

        this.setState({filteredArray})
    }

    render() {
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">
                    Original: {JSON.stringify(this.state.defaultArray)}
                </span>
                <input type="text" className="inputLine" onChange={(event) =>   {this.updateUserInput(event)}}/>
                <button className="confirmationButton" 
                onClick={() => {this.displaySolution()}}>
                    Filter
                </button>
                <span className="resultsBox filterObjectRB">
                    Filtered: {JSON.stringify(this.state.filteredArray)}
                </span>
            </div>
        )
    }
}

export default FilterObject;