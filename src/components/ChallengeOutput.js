import React, { Component } from "react";

class ChallengeOutput extends Component {
  render() {
    return (
      <div className="challenge-output">
        <div className="listGroup">
          <span className="errorMessage"> {this.props.errorMessage} </span>{" "}
          <ul>
            <li> {`character - ${this.props.character}`} </li>{" "}
            <li>
              {" "}
              {`length of string - ${
                this.props.numToStringLength > 0
                  ? this.props.numToStringLength
                  : 0
              }`}{" "}
            </li>{" "}
            <li> {`probability - ${this.props.probability}%`} </li>{" "}
            <li> {`frequency - ${this.props.numOfChars}`} </li>{" "}
            {/* <li>{this.props.numToString}</li> */}{" "}
          </ul>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default ChallengeOutput;
