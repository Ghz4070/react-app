import React from 'react';
import { Provider } from 'react-redux'
import { store } from '../redux';
import Chat from './Chat';
import SettingsContainer from './../containers/SettingsContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './../assets/style/App.css';
// import { socket } from './../services/websocket'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Settings">Settings</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> regarde à travers ses enfants <Route> et
          rend le premier qui correspond à l'URL courante. */}
        <Switch>
          <Route path="/Settings">
            <SettingsContainer />
          </Route>
          <Route path="/chat">
            <Provider store={store}><Chat /></Provider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;