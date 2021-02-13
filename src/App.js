import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePrediction from './components/predictions.component';
import ListPredictions from './components/test';
import List from './pages/list.page';

function App() {
  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <BrowserRouter>
         <Switch>
          <Route exact path="/test"> <ListPredictions /> </Route>
          <Route path="/listpredictions"> <List /> </Route>
          <Route path="/" component={CreatePrediction} />
          {/* 
           */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
