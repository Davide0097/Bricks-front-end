import './index.css';

// React helmet
import { HelmetProvider } from 'react-helmet-async';

import ScrollToTop from './hooks/useScroll';

// React router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Navigation bar
import Navbar from './fixed/Navbar';

// Footer
import Footer from './fixed/Footer'

// Context
import { useUserContext } from './hooks/useUserContext'

// Pages
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage';
import ComponentsPage from './pages/ComponentsPage';
import TemplatesPage from './pages/TemplatesPage';
import BlogPost from './pages/BlogPost';
import AboutPage from './pages/AboutPage'
import AuthorPage from './pages/AuthorPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BricksHub from './pages/BricksHub'
import RequirmentsPage from "./pages/RequirmentsPage"
import PageNotFound from './pages/PageNotFound';
import SiteBuilder from './pages/SiteBuilder';

// Cookies
import CookiesModal from './components/CookiesModal';


function App() {

  const { user } = useUserContext()

  return (
    <div className="App">
      <HelmetProvider>
        <CookiesModal />
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/BlogPage' element={<BlogPage />}></Route>
            <Route path='/ComponentPage' element={<ComponentsPage />}></Route>
            <Route path='/TemplatesPage' element={<TemplatesPage />}></Route>
            <Route path='/BlogPost/:index' element={<BlogPost />}></Route>
            <Route path='/AboutPage' element={<AboutPage />}></Route>
            <Route path='/AuthorPage/:index' element={<AuthorPage />}></Route>
            <Route path='/RequirmentsPage' element={<RequirmentsPage />}></Route>
            <Route path='/SiteBuilder' element={<SiteBuilder />}></Route>
            {/* if we have user we directly go to creator hub if we dont have user we go to login */}
            <Route path='/BricksHub' element={user ? <BricksHub /> : <Login />}></Route>
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/BricksHub" />} />
            <Route path='/login' element={!user ? <Login /> : <BricksHub />}></Route>
            {/* Page not found */}
            <Route path='*' element={<PageNotFound />} > </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
