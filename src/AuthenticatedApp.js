import './App.css';
import Airlines from './components/Airlines';
import Flights from './components/Flights';
import Signup from './components/Signup';
import Layout from "./components/Layout";

import { Switch, Route, useHistory} from "react-router-dom";

function AuthenticatedApp() {
  // const history = useHistory();

  // const handleLogout = () => {
  //   fetch(`/logout`, {
  //     method: "DELETE",
  //     credentials: "include",
  //   }).then((res) => {
  //     if (res.ok) {
  //       setCurrentUser(null);
  //       history.push('/')
  //     }
  //   });
  // };
  return (
      <div>
        <Layout >
        <Switch>
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
        <Signup/>
        </Route>
        </Switch>
        </Layout>
        
    </div>
  );
}

export default AuthenticatedApp;
