import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "./landingPage";
import About from "./about";
import FAQ from "./faq";
import Contact from "./contact";
import Login from './login';
import Signup from './signup';
import Help from './help';
import ContendEntry from './contendEntry';
import Accessibility from './accessibility';
import Terms from './terms';
import Privacy from './privacy';
import SendOtp from './sendOtp';
import InputOtp from './inputOtp';
import VerifyOtpSuccess from './verifyOtpSuccess';
import VerifyOtpFail from './verifyOtpFail';
import Kyc from './kyc';
import ContendDebt from './contendDebt';
import ContendUpload from './contendUpload';
import ForgotPassword from './forgotPassword';
import ErrorPage from './error';
import EditProfile from './editProfile';
import Dashboard from './dashboard';
import CurrentDebtor from './currentDebtor';
import DebtSummary from './debtSummary';
import DebtorDetail from './debtorDetails';


function App() {

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify1" element={<SendOtp />} />
          <Route path="/verify2" element={<InputOtp />} />
          <Route path="/verify-success" element={<VerifyOtpSuccess />} />
          <Route path="/verify-fail" element={<VerifyOtpFail />} />
          <Route path="/kyc" element={<Kyc />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/t&c" element={<Terms />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/contend" element={<ContendEntry />} />
          <Route path="/contend-debt_:id" element={<ContendDebt />} />
          <Route path="/contend-upload" element={<ContendUpload />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/current-debtors" element={<CurrentDebtor />} />
          <Route path="/current-debtors/debtor_:id" element={<DebtorDetail />} />
          <Route path="/debt-summary" element={<DebtSummary />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
