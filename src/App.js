import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';
import Home from './components/Home/index';
import Aboutus from './components/Aboutus/index';
import Career from './pages/Career/index';
import Login from './components/Login/index';
import Register from './components/Register/index';
import Fundraise from './components/fundraise/index';
import MentalHealthPage from './pages/mental-health/index.jsx';
import { AuthProvider } from './components/services/authService';
import Blogs from './components/Blogs';
import SingleBlogPost from './components/Blogs/SingleBlog';
import PrivacyPolicy from './pages/privacyPolicy';
import Explore from './pages/Explore';
import ContactUs from './pages/contact-us';
import Blog from './pages/Blog';
import Admin from "./pages/AllDashboards/SuperAdmin/index.jsx";
import AdminDashboardRoute from './pages/AllDashboards/Routes/AdminDashboardroute';
import Partners from "./pages/AllDashboards/PartnersDashboard/Index.jsx";
import PartnersDashboardLayout from './pages/AllDashboards/components/Layouts/PartnersDashboardLayout';
import WaitingList from './pages/AllDashboards/components/WaitingListPage';
import DoctorsList from './pages/AllDashboards/components/DoctorsListPage';


function App() {
  return (
    <Router>
      <AuthProvider>
        <MainApp />
      </AuthProvider>
    </Router>
  );
}


const PartnersDashboardRoute = ({ children }) => (
  <PartnersDashboardLayout>
    {children}
  </PartnersDashboardLayout>
);


function MainApp() {
  const location = useLocation(); // Use the hook here, inside the Router context

  // Define which routes should use the dashboard layout
  const isDashboardRoute = (pathname) => {
    return ['/superadmin', '/admin'].includes(pathname);
  };

  return (
    <div>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="page"
          timeout={300} // Duration of the transition
        >
          <div className="page-wrapper">
            <Routes location={location}>
              <Route exact path="/" element={<Home />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog/:slug" element={<SingleBlogPost />} />
              <Route path="/career" element={<Career />} />
              <Route path="/fundraise" element={<Fundraise />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/mental-health" element={<MentalHealthPage />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/blog" element={<Blog />} />
              {/* Dashboard routes wrapped in DashboardLayouts */}
<<<<<<< HEAD
              <Route path="/admin" element={<AdminDashboardRoute />}>
              <Route index element={<Admin />} />
                <Route path="waitinglist" element={<WaitingList />} />
                <Route path="doctorslist" element={<DoctorsList />} />
              </Route>
=======
              <Route path="/superadmin" element={
                <AdminDashboardRoute>
                  <Admin />
                </AdminDashboardRoute>
              } />
>>>>>>> 0f8f870cfb60abea1e334a76ee34f545e267f91d
              <Route path="/partners" element={
                <PartnersDashboardRoute>
                  <Partners />
                </PartnersDashboardRoute>
              } />
            </Routes>             
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;