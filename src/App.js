import Form from './components/Form'
import ThankYou from './components/ThankYou'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {useState} from "react"
import './fonts/index.css'

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
