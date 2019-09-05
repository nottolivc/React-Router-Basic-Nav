import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
        <Route exact path="/" component={Home} />
          <a href="">Home</a>
        </div>
        <div>
        <Route exact path="/" component={About} />
          <a href="">About</a>
        </div>
        <div>
        <Route exact path="/" component={Contact} />
          <a href="">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
