import Form from './components/Form'
import ThankYou from './components/ThankYou'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {useState} from "react"

function App() {
  const [id, setId]= useState('open');
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Form}><Form setId={setId}></Form></Route>
          <Route exact path="/confirmation" component={ThankYou}><ThankYou id={id}></ThankYou></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
