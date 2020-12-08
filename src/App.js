import './App.css';
import { Switch, Route } from 'react-router-dom';
import Auth from './containers/auth/auth';
import Home from './containers/home/home';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
