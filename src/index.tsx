import React from 'react';
import ReactDOM from 'react-dom';
import RepositoriesList from './components/RepositoriesList';

const App = () => {
  return (
    <div>
      <RepositoriesList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
