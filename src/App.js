import './App.css';
import Airlines from './components/Airlines';
import Flights from './components/Flights';
import Signup from './components/Signup';
import Login from './components/Login';
import Layout from "./components/Layout";
import About from './components/About'

import { Switch, Route, useHistory} from "react-router-dom";

function App() {
  return (
      <div>
        <Layout >
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
        <Signup/>
        </Route>
        <Route path="/login">
        <Login/>
        </Route>
        </Switch>
        </Layout>
        
    </div>
  );
}

export default App;
