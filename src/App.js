import './App.css';
import { Switch, Route } from 'react-router-dom';
import Register from './containers/Auth/Register/Register';
import Login from './containers/Auth/Login/Login';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Login} />
      </Switch>
    </div>
  );
}

export default App;