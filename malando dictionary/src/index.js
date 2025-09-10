import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';

const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
