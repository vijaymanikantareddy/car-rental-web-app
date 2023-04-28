// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import LoginPage from './components/LoginPage';
// import SignupPage from './components/SignupPage';
// import ListCarPage from './components/ListCarPage';
// import ViewStatusPage from './components/ViewStatusPage';
// import ViewHistoryPage from './components/ViewHistoryPage';
// import PaymentPage from './components/PaymentPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components/Navbar';
import CarCard from './components/CarCard';
import ListCar from './components/ListCar';
import NavbarCom from './components/NavbarCom';
function App() {
  return (
    <div>
      {/* <Router>
        <Switch>

        </Switch>
      </Router> */}
    <NavbarCom/>
    </div>
    // <Router>
    //   <Switch>
    //     <Route path="/" exact component={LoginPage} />
    //     <Route path="/signup" component={SignupPage} />
    //     <Route path="/list-car" component={ListCarPage} />
    //     <Route path="/view-status" component={ViewStatusPage} />
    //     <Route path="/view-history" component={ViewHistoryPage} />
    //     <Route path="/payment" component={PaymentPage} />
    //   </Switch>
    // </Router>
  );
}

export default App;
