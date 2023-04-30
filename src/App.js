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

function App() {
  return (
    <div>
      {/* <NavbarOwnerCom/> */}
      {/* <OwnerViewStatus/> */}
      <LoginCom/>
      {/* <Routes>
        <Route path="/" element={<LoginComPro/>}/>
        <Route path="/signup" element={<LoginComPro/>}/>
        <Route path="/user/" element={<LoginComPro/>}/>
        <Route path="/user/payment" element={<LoginComPro/>}/>
        <Route path="/user/feedback" element={<LoginComPro/>}/>
        <Route path="/user/modification" element={<LoginComPro/>}/>
        <Route path="/user/viewStatus" element={<LoginComPro/>}/>
        <Route path="/owner/" element={<LoginComPro/>}/>
        <Route path="/owner/viewStatus" element={<LoginComPro/>}/>
        <Route path="/owner/viewHistory" element={<LoginComPro/>}/>
        <Route path="/owner/payment" element={<LoginComPro/>}/>
        <Route path="/admin/" element={<LoginComPro/>}/>
        <Route path="/admin/viewUsers" element={<LoginComPro/>}/>
        <Route path="/admin/viewOwners" element={<LoginComPro/>}/>
        <Route path="/admin/viewStatus" element={<LoginComPro/>}/>
        <Route path="/admin/manageUsers" element={<LoginComPro/>}/>
        <Route path="/admin/manageOwners" element={<LoginComPro/>}/>
        <Route path="/admin/manageAds" element={<LoginComPro/>}/>

      </Routes> */}
    </div>
    
  );
}

export default App;
