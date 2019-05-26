import React from 'react';
import './styles/styles.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/home';
import { About } from './components/about';
import { Contact } from './components/contact';
import { NoMatch } from './components/nomatch';
// import { Layout } from './components/layout';
import { Navbarmenu } from './components/navbarmenu';

function App() {
  return (
    <React.Fragment>
    <Navbarmenu />
      {/* <Layout> */}
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      {/* </Layout> */}
    </React.Fragment>
  );
}

export default App;
