import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./App.css";
import Home from "./page/Home";
import Member from "./page/Product";

function App() {
  return (
    <div >
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/member" component={Member}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
