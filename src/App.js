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
          <Route path="/contend-debt" element={<ContendDebt />} />
          <Route path="/contend-upload" element={<ContendUpload />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
