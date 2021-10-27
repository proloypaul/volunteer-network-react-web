
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Admin from './Component/Admin/Admin';
import Donation from './Component/Donation/Donation';
import Events from './Component/Events/Events';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Register from './Component/Register/Register';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/donation">
          <Donation></Donation>
        </Route>
        <Route path="/event">
          <Events></Events>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/admin">
          <Admin></Admin>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
