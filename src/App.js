import React, { Component } from "react";
import Header from "./components/layout/Header";
import Challenge from "./components/Challenge";

import "./App.css";

class App extends Component {
  state = {
    character: ""
  };

  /**
   * @desc validates if input is a character of length 1
   * @param character a char
   * @return char.toLowerCase or else an empty string
   */
  validateChar = character => {
    // returns true only if a letter
    // https://stackoverflow.com/questions/9862761/how-to-check-if-character-is-a-letter-in-javascript/55831795
    if (
      character.length === 1 &&
      character.toUpperCase() !== character.toLowerCase()
    ) {
      return character.toLowerCase();
    } else {
      // I was setting to null here for a null check later, but React didn't like that!
      return "";
    }
  };

  /**
   * @desc add character to state
   * @param character a char
   * @return none
   */
  addChar = character => {
    this.setState({ character: this.validateChar(character) });
  };

  /**
   * @desc converts an int to string. relies on numberToWords helper method
   * @param none.  numberToWords takes a Number, n
   * @return numToString - a concatenated string from one to 123 inclusive
   */
  compute = () => {
    // generic number to words
    // https://stackoverflow.com/questions/5529934/javascript-numbers-to-words

    let digits = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen"
    ];

    let ties = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety"
    ];

    let illions = ["", "thousand", "million", "billion", "trillion"].reverse();

    // modified these lines taking out space and dash
    let join = (a, s) => a.filter(v => v).join(s || ""); // changed " " to ""
    let tens = s => digits[s] || join([ties[s[0]], digits[s[1]]], ""); // 21 -> twenty-one  // I removed this dash

    let hundreds = s =>
      join(
        (s[0] !== "0" ? [digits[s[0]], "hundred"] : []).concat(
          tens(s.substr(1, 2))
        )
      );

    let re = "^" + "(\\d{3})".repeat(illions.length) + "$";

    let numberToWords = n =>
      // to filter non number or '', null, undefined, false, NaN
      isNaN(Number(n)) || (!n && n !== 0)
        ? "not a number"
        : Number(n) === 0
        ? "zero"
        : Number(n) >= 10 ** (illions.length * 3)
        ? "too big"
        : String(n)
            .padStart(illions.length * 3, "0")
            .match(new RegExp(re))
            .slice(1, illions.length + 1)
            .reduce(
              (a, v, i) =>
                v === "000" ? a : join([a, hundreds(v), illions[i]]),
              ""
            );

    let numToString = "";
    // start at 1 -- all ints between 1 and 123 (assuming Calvin means inclusive)
    for (let i = 1; i <= 123; i++) {
      numToString += numberToWords(i);
    }
    return numToString;
  };

  render() {
    return (
      <div className="flex-container">
        <div className="App">
          <div className="container">
            <Header />
            <Challenge
              addChar={this.addChar}
              character={this.state.character}
              compute={this.compute}
              validateChar={this.validateChar}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
