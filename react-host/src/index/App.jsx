import React from 'react';
import ReactDOM from 'react-dom';
import './App/index.css';

const launchHeader = () => {
  import('home/mountHeader').then((mountHeader) => {
    mountHeader.default('#header');
  });
};

const App = () => (
  <div>
    Importing the header from the home folder
    <div>
      <button onClick={launchHeader}>Launch Header</button>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
