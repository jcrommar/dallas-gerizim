import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './pages';
import SigninPage from './pages/youtube';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
          <Route path="/" component={Index} exact />
          <Route path="/youtube" component={SigninPage} exact />
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
