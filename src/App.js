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
// import LoginComPro from './components/LoginComPro';
// import SignupCom from './components/SignupCom';
// import { Routes,Route } from 'react-router-dom';
// import NavbarOwnerCom from './components/owner/NavbarComOwner';
// import OwnerViewStatus from './components/owner/OwnerViewStatus';
// import OwnerPayment from './components/owner/OwnerPayment';
import LoginCom from './components/LoginCom';
import SignupPage from './components/SignupPage';
import SignupCom from './components/SignupCom';
function App() {
  return (
    <div>
      {/* <NavbarOwnerCom/> */}
      {/* <OwnerViewStatus/> */}
      <LoginCom/>
      {/* <Routes>
        <Route path="/" element={<LoginComPro/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/user" element={<UserDashboard/>}/>
        <Route path="/userpayment" element={<UserPayment/>}/>
        <Route path="/logout" element={<LoginCom/>}/>
        <Route path="/usermodification" element={<LoginComPro/>}/>
        <Route path="/userviewStatus" element={<LoginComPro/>}/>
        <Route path="/owner" element={<LoginComPro/>}/>
        <Route path="/ownerviewStatus" element={<LoginComPro/>}/>
        <Route path="/ownerviewHistory" element={<LoginComPro/>}/>
        <Route path="/ownerpayment" element={<LoginComPro/>}/>
        <Route path="/admin" element={<LoginComPro/>}/>
        <Route path="/adminviewUsers" element={<LoginComPro/>}/>
        <Route path="/adminviewOwners" element={<LoginComPro/>}/>
        <Route path="/adminviewStatus" element={<LoginComPro/>}/>
        <Route path="/adminmanageUsers" element={<LoginComPro/>}/>
        <Route path="/adminmanageOwners" element={<LoginComPro/>}/>
        <Route path="/adminmanageAds" element={<LoginComPro/>}/>

      </Routes> */}
    </div>
    
  );
}

export default App;
