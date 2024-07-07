import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route, Redirect, Switch} from 'react-router-dom/cjs/react-router-dom.min';
import User from './user/pages/user';
import Places from './places/pages/places';
//first component rendered so routing is set up here
function App() {
  return (
<Router>
  <Switch>
  {/* //Route can be used only inside router */}
<Route path ="/" exact> 
<User/>
</Route>


<Route path ="/places/new" exact> 
<Places/>
</Route>

<Redirect to="/"></Redirect>
</Switch>
</Router>


  );
}

export default App;
