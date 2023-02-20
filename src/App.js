import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
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
import AddDebtor from './addDebtor';
import SchoolList from './schoolList';
import SchoolDebtors from './schoolDebtors';
import SchoolDebtorDetails from './schoolDebtorDetails';
import Feeds from './feeds';
import FeedDetail from './feedDetail';
// import { useSelector } from 'react-redux';
import Notification from './notification';
import TopNavbar from './topNavbar';
import Footer from './footer';
import SideNavbar from './sideNavbar';
import SearchBar from './searchBar';


function App() {

  // const login = useSelector((state) => state.loginState.authenticated)

  const Layout1 = () => {
    return (
      <div className="App">
        <TopNavbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const Layout2 = () => {
    return (
      <div className="App">
        <SideNavbar />
        <div>
          <SearchBar />
          <Outlet />
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout1 />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <LandingPage />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/faq',
          element: <FAQ />
        },
        {
          path: '/contact-us',
          element: <Contact />
        },
        {
          path: '/privacy-policy',
          element: <Privacy />
        },
        {
          path: '/t&c',
          element: <Terms />
        },
        {
          path: '/accessibility',
          element: <Accessibility />
        },
        {
          path: '/contend',
          element: <ContendEntry />
        },
        {
          path: '/contend/:id',
          element: <ContendDebt />
        },
        {
          path: '/contend-upload',
          element: <ContendUpload />
        },
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/verify1',
      element: <SendOtp />
    },
    {
      path: '/verify2',
      element: <InputOtp />
    },
    {
      path: '/verify-success',
      element: <VerifyOtpSuccess />
    },
    {
      path: '/verify-fail',
      element: <VerifyOtpFail />
    },
    {
      path: '/kyc',
      element: <Kyc />
    },
    {
      path: '/',
      element: <Layout2 />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />
        },
        {
          path: '/dashboard/schools',
          element: <SchoolList />
        },
        {
          path: '/dashboard/schools/:schoolId/:id',
          element: <SchoolDebtors />
        },
        {
          path: '/dashboard/schools/:schoolId/:id/:debtorId',
          element: <SchoolDebtorDetails />
        },
        {
          path: '/dashboard/feed',
          element: <Feeds />
        },
        {
          path: '/dashboard/feed/:schoolId/:postId',
          element: <FeedDetail />
        },
        {
          path: '/edit-profile',
          element: <EditProfile />
        },
        {
          path: '/current-debtors',
          element: <CurrentDebtor />
        },
        {
          path: '/current-debtors/debtor_:id',
          element: <DebtorDetail />
        },
        {
          path: '/current-debtors/add-debtor',
          element: <AddDebtor />
        },
        {
          path: '/debt-summary',
          element: <DebtSummary />
        },
        {
          path: '/help',
          element: <Help />
        },
        {
          path: '/notification',
          element: <Notification />
        },
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App;
