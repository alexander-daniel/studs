import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Header from './views/header';
import CoolView from './views/cool-view';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Header />

          <Route path="/cool" component={CoolView}/>
          <Route path="/foo" component={CoolView}/>
          <Route path="/biz" component={CoolView}/>
        </div>
      </Router>
    );
  }
}

export default App;
