import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landingpage from './Components/Landingpage';
import WorkPage from './Components/Page3/WorkPage';
import Support from './Components/Page4/Support';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Dashboard from './Components/Dashboard/Dashboard';
import Forget from './Components/Forgetpass/Forget';
import Codeverification from './Components/Forgetpass/Verification/Codeverification';
import Resetpass from './Components/ResetPassword/Resetpass';
import ApexCharts from 'apexcharts'
import Aboutus from './Components/Page2/Aboutus';
import FarmDetails from './Components/DashFarm/FarmDetails';
import SettingsDetails from './Components/DashSettings/SettingsDetails';
import LoanDetails from './Components/DashLoanApplication/LoanDetails';
import RepaymentDetails from './Components/DashRepayment/RepaymentDetails';
// import 'antd/dist/antd.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/works' element={<WorkPage/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/forgetpassword' element={<Forget/>}/>
        <Route path='/verification' element={<Codeverification/>}/>
        <Route path='/resetpassword' element={<Resetpass/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/farm-details' element={<FarmDetails/>}/>
        <Route path='/settings' element={<SettingsDetails/>}/>
        <Route path='/loan-application' element={<LoanDetails/>}/>
        <Route path='/repayment' element={<RepaymentDetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
