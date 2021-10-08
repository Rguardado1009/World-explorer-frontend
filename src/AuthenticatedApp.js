import './App.css';
import Airlines from './components/Airlines';
import Flights from './components/Flights';
import Signup from './components/Signup';
import Login from './components/Login';
import Layout from "./components/Layout";
import About from './components/About'

import { Switch, Route, useHistory} from "react-router-dom";

function AuthenticatedApp({ currentUser, setCurrentUser}) {
  const history = useHistory();

  const handleLogout = () => {

    fetch(`http://localhost:3000/logout`, {
      method: "DELETE"
    }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
        history.push('/')
      }
    });
  };

  return (
      <div>
        <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
        <Route path="/about">
        <About/>
        </Route>
        <Route path="/flights">
        <Flights />
        </Route>
        <Route path="/airlines">
        <Airlines />
        </Route>
        <Route path="/signup">
        <Signup currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/login">
        <Login/>
        </Route>
        <Route path="/">
        <Airlines/>
        </Route>
        </Switch>
        </Layout>
        
    </div>
  );
}

export default AuthenticatedApp;
