import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from './components/Page/Page';

const App: React.FC = () => {
  return (
    <Router>
      <Page />
    </Router>
  );
};

export default App;