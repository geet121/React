import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Layout from './hoc/Layout/Layout';

function App() {
  const pages = [
    {
      pageLink: '/',
      view: Layout,
      displayName: 'Home',
      animationDelayForNavbar: 0.2,
      showInNavbar: true,
    },
  ];
  return (
    <div className="App">
      {pages.map((page, i) => {
        return <Route path={page.pageLink} component={page.view} key={i} />;
      })}
    </div>
  );
}

export default App;
