Q1
import React from "react";

class HelloWithoutJSX extends React.Component {
  render() {
    return React.createElement("h1", null, "Hello, React!");
  }
}

export default HelloWithoutJSX;


ii)
import React from "react";

const HelloWithJSX = () => {
  return <h1>Hello, React!</h1>;
};

export default HelloWithJSX;

iii)
import React from "react";

const HelloWithVariable = () => {
  const message = "Welcome to React!";
  return <h1>{message}</h1>;
};

export default HelloWithVariable;




Q2
import React from "react";

const FruitList = () => {
  const fruits = ["Apple", "Banana", "Cherry"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
};

export default FruitList;

Q3
import React from "react";

const StyledMessage = () => {
  const messageStyle = {
    color: "blue",
    fontSize: "20px",
    fontWeight: "bold",
  };

  return <p style={messageStyle}>This is a styled message!</p>;
};

export default StyledMessage;

Q4
import React from "react";

const SumOfSquares = ({ num1, num2 }) => {
  const sum = num1 ** 2 + num2 ** 2;
  return <p>The sum of squares of {num1} and {num2} is {sum}.</p>;
};

export default SumOfSquares;

import React from "react";
import SumOfSquares from "./sos";

const App = () => {
  return (
    <div>
      <h1>React Sum of Squares</h1>
      <SumOfSquares num1={3} num2={4} />  {/* Pass any numbers here */}
    </div>
  );
};

export default App;




Q5
import React from "react";
import GoodMorningEvening from "./sos";

const App = () => {
  const isMorning = new Date().getHours() < 12; // Check if it's before noon

  return (
    <div>
      <h1>React Greeting</h1>
      <GoodMorningEvening isMorning={isMorning} />
    </div>
  );
};

export default App;

import React from "react";

const GoodMorningEvening = ({ isMorning }) => {
  return <h1>{isMorning ? "Good Morning" : "Good Evening"}</h1>;
};

export default GoodMorningEvening;



Q6
import React from "react";

const CurrentDay = () => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay(); // Get the current day index (0-6)

  return <h1>Today is {days[today]}</h1>;
};

export default CurrentDay;

import React from "react";
import CurrentDay from "./CurrentDay";

const App = () => {
  return (
    <div>
      <h1>React Current Day</h1>
      <CurrentDay />
    </div>
  );
};

export default App;

Q7
import React from "react";
import PrimeChecker from "./script";

const App = () => {
  return (
    <div>
      <h1>Prime Number Checker</h1>
      <PrimeChecker number={17} />  {/* Change this number to test */}
    </div>
  );
};

export default App;

import React from "react";

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const PrimeChecker = ({ number }) => {
  return (
    <h1>
      {number} is {isPrime(number) ? "a Prime Number" : "not a Prime Number"}
    </h1>
  );
};

export default PrimeChecker;




Q8
import React, { Component } from "react";

class TemperatureConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: "",
      fahrenheit: "",
    };
  }

  convertCelsiusToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  convertFahrenheitToCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  handleCelsiusChange = (event) => {
    const celsius = event.target.value;
    this.setState({
      celsius,
      fahrenheit: celsius ? this.convertCelsiusToFahrenheit(celsius) : "",
    });
  };

  handleFahrenheitChange = (event) => {
    const fahrenheit = event.target.value;
    this.setState({
      fahrenheit,
      celsius: fahrenheit ? this.convertFahrenheitToCelsius(fahrenheit) : "",
    });
  };

  render() {
    return (
      <div>
        <h2>Temperature Converter</h2>
        <label>
          Celsius:
          <input
            type="number"
            value={this.state.celsius}
            onChange={this.handleCelsiusChange}
          />
        </label>
        <br />
        <label>
          Fahrenheit:
          <input
            type="number"
            value={this.state.fahrenheit}
            onChange={this.handleFahrenheitChange}
          />
        </label>
      </div>
    );
  }
}

export default TemperatureConverter;

import React from "react";
import TemperatureConverter from "./TemperatureConverter";

const App = () => {
  return (
    <div>
      <h1>Temperature Converter</h1>
      <TemperatureConverter />
    </div>
  );
};

export default App;


Q9
import React from "react";

const ReverseString = ({ text }) => {
  const reversedText = text.split("").reverse().join(""); // Reverse the string
  const isPalindrome = text.toLowerCase() === reversedText.toLowerCase(); // Check palindrome (case insensitive)

  return (
    <div>
      <h2>Original Text: {text}</h2>
      <h2>Reversed Text: {reversedText}</h2>
      <h2>{isPalindrome ? "✅ It's a Palindrome!" : "❌ Not a Palindrome"}</h2>
    </div>
  );
};

export default ReverseString;

import React from "react";
import ReverseString from "./ReverseString";

const App = () => {
  return (
    <div>
      <h1>String Reverser & Palindrome Checker</h1>
      <ReverseString text="React" />
      <ReverseString text="madam" />
    </div>
  );
};

export default App;

Q10
import React, { useState } from "react";

const RandomNumber = () => {
  const [number, setNumber] = useState(null);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
  };

  return (
    <div>
      <h2>Random Number Generator</h2>
      <button onClick={generateRandomNumber}>Generate Number</button>
      {number !== null && <h3>Generated Number: {number}</h3>}
    </div>
  );
};

export default RandomNumber;

import React from "react";
import RandomNumber from "./RandomNumber";

const App = () => {
  return (
    <div>
      <h1>Random Number Generator</h1>
      <RandomNumber />
    </div>
  );
};

export default App;

Q11
import React from "react";

const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

const LeapYearChecker = ({ year }) => {
  return (
    <h2>
      {year} {isLeapYear(year) ? "✅ is a Leap Year!" : "❌ is NOT a Leap Year!"}
    </h2>
  );
};

export default LeapYearChecker;

import React from "react";
import LeapYearChecker from "./LeapYearChecker";

const App = () => {
  return (
    <div>
      <h1>Leap Year Checker</h1>
      <LeapYearChecker year={2024} />
      <LeapYearChecker year={2023} />
    </div>
  );
};

export default App;

Q12
import React, { Component } from "react";

class UserGreeting extends Component {
  render() {
    return <h2>Hello, {this.props.firstName} {this.props.lastName}!</h2>;
  }
}

export default UserGreeting;

import React from "react";
import UserGreeting from "./UserGreeting";

const App = () => {
  return (
    <div>
      <h1>User Greeting</h1>
      <UserGreeting firstName="John" lastName="Doe" />
      <UserGreeting firstName="Jane" lastName="Smith" />
    </div>
  );
};

export default App;
