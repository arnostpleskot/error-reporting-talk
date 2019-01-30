import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import './01-naive';
// import './02-ga';
// import './03-sentry';
// import ErrorBoundary from './04-react';
// import ErrorComponent from './04-react/Error'
// import './05-redux';
// import './06-redux-saga'

class App extends Component {
  componentDidMount() {
    // setTimeout(() => {
    //   throw Error('Some custom error');
    // }, 2000)
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {/*<ErrorBoundary>*/}
            {/*<ErrorComponent/>*/}
          {/*</ErrorBoundary>*/}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
