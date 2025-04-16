1.

src/components/Header.js
jsx
CopyEdit
import React from 'react';

function Header({ title }) {
  return <header><h1>{title}</h1></header>;
}

export default Header;
________________________________________
 src/components/Content.js
jsx
CopyEdit
import React, { useState } from 'react';

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "I told my computer I needed a break, and now it won’t stop sending me KitKat ads.",
  "Why do Java developers wear glasses? Because they don't C#!",
];

function Content() {
  const [joke, setJoke] = useState("");

  const getRandomJoke = () => {
    const random = jokes[Math.floor(Math.random() * jokes.length)];
    setJoke(random);
  };

  return (
    <main>
      <button onClick={getRandomJoke}>Get a Joke</button>
      {joke && <p>{joke}</p>}
    </main>
  );
}

export default Content;
________________________________________
 src/components/Footer.js
jsx
CopyEdit
import React from 'react';

function Footer() {
  return <footer><p>© 2025 My React App. All rights reserved.</p></footer>;
}

export default Footer;
________________________________________
src/App.js
jsx
CopyEdit
import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header title="Welcome to My Joke App!" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

public/index.html
Make sure it includes the root element:
html
CopyEdit
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>

2.
App.js
import React from 'react';
import StyledButton from './components/StyledButton';

function App() {
  return (
    <div>
      <h1>Styled Button Example</h1>
      <StyledButton />
    </div>
  );
}

export default App;

button.js
import React from 'react';
import StyledButton from './components/StyledButton';

function App() {
  return (
    <div>
      <h1>Styled Button Example</h1>
      <StyledButton />
    </div>
  );
}

export default App;

3.
import React from 'react';

function StyledButton() {
  return (
    <div>
      <style>
        {`
          .internal-button {
            background-color: #2196F3;
            color: white;
            padding: 12px 24px;
            font-size: 16px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
          }

          .internal-button:hover {
            background-color: #1976D2;
          }
        `}
      </style>
      
      <button className="internal-button">
        Click Me
      </button>
    </div>
  );
}

export default StyledButton;App.js

4.
import React from 'react';
import './styles.css'; // Import the external CSS file

function StyledButton() {
  return (
    <button className="external-button">
      Click Me
    </button>
  );
}

export default StyledButton;
.external-button {
    background-color: #e91e63;
    color: white;
    padding: 12px 24px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .external-button:hover {
    background-color: #ad1457;
  }
  


5.
import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('Constructor: Component is being created');
  }

  componentDidMount() {
    console.log('componentDidMount: Component has mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('componentDidUpdate: Component updated');
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to unmount');
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('Render: Component is rendering');
    return (
      <div style={{ border: '2px solid #444', padding: '20px', marginTop: '10px' }}>
        <h2>Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default LifecycleDemo;



app.js

import React, { useState } from 'react';
import LifecycleDemo from './components/LifecycleDemo';

function App() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div>
      <h1>React Lifecycle Demo</h1>
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? 'Unmount Component' : 'Mount Component'}
      </button>
      {showComponent && <LifecycleDemo />}
    </div>
  );
}

export default App;
6.
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>useState Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrease</button>
    </div>
  );
}

export default Counter;


import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>useReducer Counter</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'decrement' })} style={{ marginLeft: '10px' }}>Decrease</button>
    </div>
  );
}

export default CounterReducer;




7.
import React, { useState, useEffect } from 'react';

function JokeFetcher() {
  const [joke, setJoke] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((res) => res.json())
      .then((data) => {
        setJoke(data);
      })
      .catch((error) => {
        console.error('Error fetching joke:', error);
      });
  }, [refreshTrigger]); // runs on mount & when refreshTrigger changes

  const refreshJoke = () => {
    setRefreshTrigger(prev => prev + 1); // triggers useEffect
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Random Joke</h2>
      {joke ? (
        <>
          <p><strong>{joke.setup}</strong></p>
          <p>{joke.punchline}</p>
        </>
      ) : (
        <p>Loading joke...</p>
      )}
      <button onClick={refreshJoke} style={{ marginTop: '10px' }}>
        Get Another Joke
      </button>
    </div>
  );
}

export default JokeFetcher;



import React from 'react';
import JokeFetcher from './components/JokeFetcher';

function App() {
  return (
    <div>
      <JokeFetcher />
    </div>
  );
}

export default App;
8.

import React, { useRef } from 'react';

function FocusInputForm() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>useRef Input Focus</h2>
      <input
        type="text"
        placeholder="Type something..."
        ref={inputRef}
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <br />
      <button onClick={handleFocus} style={{ marginTop: '10px', padding: '10px 20px' }}>
        Focus Input
      </button>
    </div>
  );
}

export default FocusInputForm;



import React from 'react';
import FocusInputForm from './components/FocusInputForm';

function App() {
  return (
    <div>
      <FocusInputForm />
    </div>
  );
}

export default App;

9.
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(prev => !prev);

  const themeStyles = {
    backgroundColor: darkMode ? '#222' : '#f2f2f2',
    color: darkMode ? '#fff' : '#000',
    minHeight: '100vh',
    padding: '20px',
    transition: 'all 0.3s ease',
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};


import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Header() {
  const { darkMode } = useContext(ThemeContext);
  return <h1>{darkMode ? 'Dark Mode' : 'Light Mode'} Enabled</h1>;
}

export default Header;

import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Content() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>This is a themed content area. Click the button to toggle theme.</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Content;

import React, { useContext } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import { ThemeProvider, ThemeContext } from './components/ThemeContext';

function ThemedContainer() {
  const { themeStyles } = useContext(ThemeContext);

  return (
    <div style={themeStyles}>
      <Header />
      <Content />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedContainer />
    </ThemeProvider>
  );
}

export default App;
10.
import React from 'react';

function Child({ message }) {
  return (
    <div style={{ border: '2px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>Child Component</h3>
      <p>Message from Parent: <strong>{message}</strong></p>
    </div>
  );
}

export default Child;
import React from 'react';
import Child from './Child';

function Parent() {
  const message = "Hello from the Parent component!";

  return (
    <div style={{ padding: '20px' }}>
      <h2>Parent Component</h2>
      <Child message={message} />
    </div>
  );
}

export default Parent;
import React from 'react';
import Parent from './components/Parent';

function App() {
  return (
    <div>
      <Parent />
    </div>
  );
}
11.
import React from 'react';
import PropTypes from 'prop-types';

function Child({ message }) {
  return (
    <div style={{ border: '2px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>Child Component</h3>
      <p>Message from Parent: <strong>{message}</strong></p>
    </div>
  );
}

// 🔒 Props Validation
Child.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Child;

12.
import React, { useRef, useState } from 'react';

function FormWithRef() {
  const nameRef = useRef();
  const emailRef = useRef();
  const [submittedData, setSubmittedData] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({
      name: nameRef.current.value,
      email: emailRef.current.value,
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Form with useRef</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter name" ref={nameRef} /><br /><br />
        <input type="email" placeholder="Enter email" ref={emailRef} /><br /><br />
        <button type="submit">Submit</button>
      </form>
      {submittedData.name && (
        <>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </>
      )}
    </div>
  );
}

export default FormWithRef;

import React, { useState } from 'react';

function FormWithState() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert(`Submitted!\nName: ${name}\nEmail: ${email}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Form with useState</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br /><br />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />
        <button type="submit">Submit</button>
      </form>
      <h3>Live Preview:</h3>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default FormWithState;


import React from 'react';
import FormWithState from './components/FormWithState';
import FormWithRef from './components/FormWithRef';

function App() {
  return (
    <div>
      <FormWithState />
      <hr />
      <FormWithRef />
    </div>
  );
}

export default App;
