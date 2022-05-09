import './App.css';
import HomePage from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import NetBankingPage from './components/NetBanking';
import Dashboard from './components/Dashboard';
import Customers from './components/Customers';
import Accounts from './components/Accounts';
import OpenAccount from './components/OpenAccount';
import Deposit from './components/Deposit';
import Transfer from './components/Transfer';
import BalanceEnquiry from './components/BalanceEnquiry';
import Cheque from './components/Cheque'
import TodaysTransactions from './components/TodayTrans';
import BankReport from './components/BankReport';
import ChangePassword from './components/ChangePassword';
import EditCustomer from './components/EditCustomer';
import CustomerHistory from './components/CustomerHistory';
import OnlineTransfer from './components/OnlineTransfer';
import CustomerHome from './components/CustomerHome';
import UpdateInfo from './components/UpdateInfo';
import Recipient from './components/Recipient';
import Balance from './components/Balance';
import Offers from './components/Offers';
import Email from './components/Email';

function App() {
  return (
    <div className="App">
      <BrowserRouter>      
        <Routes>
          <Route element={<HomePage />} path="/" exact />                    
          <Route element={<LoginPage />} path="/login" />                    
          <Route element={<RegisterPage/>} path="/register"/>                              
          <Route element={<NetBankingPage/>} path="/netbanking"/>                              
          <Route element={<Dashboard/>} path="/dashboard"/>                              
          <Route element={<Customers/>} path="/customers"/>                              
          <Route element={<Accounts/>} path="/accounts"/>                              
          <Route element={<EditCustomer/>} path="/kyc"/>  
          <Route element={<UpdateInfo/>} path="/updateinfo"/>                            
          <Route element={<OpenAccount/>} path="/open"/>                              
          <Route element={<Deposit/>} path="/deposit"/>                                                           
          <Route element={<Transfer/>} path="/transfer"/>                              
          <Route element={<BalanceEnquiry/>} path="/benq"/>                              
          <Route element={<Cheque/>} path="/cheque"/>                              
          <Route element={<TodaysTransactions/>} path="/todays"/>                              
          <Route element={<BankReport/>} path="/breport"/>                              
          <Route element={<ChangePassword/>} path="/changepwd"/>                              
          <Route element={<CustomerHistory/>} path="/thistory"/> 
          <Route element={<Balance/>} path="/balance"/>                              
          <Route element={<CustomerHome/>} path="/chome"/>                              
          <Route element={<Recipient/>} path="/recipient"/>                              
          <Route element={<OnlineTransfer/>} path="/otransfer"/> 
          <Route element={<Offers/>} path="/offers"/>  
          <Route element={<Email/>} path="/query"/>                            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
