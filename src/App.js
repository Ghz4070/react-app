import React from 'react';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import Chat from './components/Chat';
import Login from './componentsLogin/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>            
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> regarde à travers ses enfants <Route> et
          rend le premier qui correspond à l'URL courante. */}
        <Switch>
          <Route path="/login">
            <Login />
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