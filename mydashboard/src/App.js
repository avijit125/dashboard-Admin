import Home from "./Home";
import Navbar from './Navbar'
import Userinfo from './Userinfo'
import {Route} from 'react-router-dom';
import Posts from "./Posts";
import Userposts from "./Userposts";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route path='/' component={Home} exact/>
      <Route path="/info/:id" component={Userinfo} exact/>
      <Route path='/posts' component={Posts} exact/>
      <Route path='/userpost/:id' component={Userposts} exact/>
     
    </div>
  );
}

export default App;
