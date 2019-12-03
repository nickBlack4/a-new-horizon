import React, { Component } from "react";
import ChallengeOutput from "./ChallengeOutput";

class Challenge extends Component {
  state = {
    character: "",
    numToString: "",
    numToStringLength: 0,
    errorMessage: "",
    probability: 0,
    numOfChars: 0
  };

  // e.target.value gives us what we type in
  onChange = e =>
    this.setState({
      character: this.props.validateChar(e.target.value)
    });

  onSubmit = e => {
    e.preventDefault();

    // reset errorMessage state
    if (this.state.errorMessage !== "") {
      this.setState({
        errorMessage: ""
      });
    }

    // call addChar passed as prop from App.js
    this.props.addChar(this.state.character);

    // get numbers one through 123 inclusive as a long string
    const numToString = this.props.compute();

    this.setState({
      numToStringLength: numToString.length
    });

    this.setState({
      numToString: numToString
    });

    let char = this.state.character !== "" ? this.state.character : "gross";

    let numOfChars = 0;

    // make sure char isn't "gross" which we have used in our input validation checks instead of null because React didn't like null
    if (char !== "gross") {
      const iterable = numToString;

      for (const value of iterable) {
        if (value === char) {
          numOfChars++;
        }
      }

      // number of chars present in long string
      this.setState({
        numOfChars: numOfChars
      });

      // P(char) as a percentage
      let num = (numOfChars / numToString.length) * 100;

      this.setState({
        probability: num.toFixed(3)
      });
    } else {
      this.setState({
        errorMessage: "*Please enter a valid char*"
      });
    }
  }; // onSubmit

  render() {
    return (
      <div style={challengeStyle}>
        <form onSubmit={this.onSubmit} className="challenge-form">
          <input
            type="text"
            name="character"
            placeholder="enter char"
            value={this.state.character}
            onChange={this.onChange}
          />

          <input type="submit" value="submit" />
        </form>
        <div>
          <ChallengeOutput
            character={this.props.character}
            numToString={this.state.numToString}
            numToStringLength={this.state.numToStringLength}
            errorMessage={this.state.errorMessage}
            probability={this.state.probability}
            numOfChars={this.state.numOfChars}
          />{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Challenge;

const challengeStyle = {
  padding: "2em"
};
