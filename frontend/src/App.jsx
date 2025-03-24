import { Routes, Route } from 'react-router-dom';
import Home from './pages/guestUser/Home';
import GuestNavbar from './components/guestUser/GuestNavbar';
import AdminNavbar from './components/admin/AdminNavbar';
import NotFound from './pages/guestUser/NotFound';
import ChooseYourStyle from './pages/guestUser/ChooseYourStyle';
import FabricSelection from './pages/guestUser/FabricSelection';
import ColorSelection from './pages/guestUser/ColorSelection';
import DesignSelection from './pages/guestUser/DesignSelection';
import Measurements from './pages/guestUser/Measurements';
import AdminPage from './pages/admin/AdminPage';
import AdminAnalytics from './pages/admin/AdminAnalytics';
import AdminProductList from './pages/admin/AdminProductList';
import AdminCustomersView from './pages/admin/AdminCustomersView';
import AdminOrderOverview from './pages/admin/AdminOrderOverview';
import FAQ from './pages/guestUser/FAQ';
import StyleGuide from './pages/guestUser/StyleGuide';

function App() {
  return (
    <div>
      <Routes>
        {/* Guest User Routes */}
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/choose-your-style"
          element={
            <>
              <ChooseYourStyle />
            </>
          }
          />
        <Route
          path="/fabric-selection"
          element={
            <>
              <FabricSelection />
            </>
          }
        />
        <Route
          path="/color-selection"
          element={
            <>
              <ColorSelection />
            </>
          }
        />
        <Route
          path="/design-selection"
          element={
            <>
              <DesignSelection />
            </>
          }
        />
        <Route
          path="/measurements"
          element={
            <>
              <Measurements />
            </>
          }
        />
        <Route
          path="/faqs"
          element={
            <>
              <FAQ />
            </>
          }
        />
        <Route
          path="/style-guide"
          element={
            <>
              <StyleGuide />
            </>
          }
        />
        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <>
              <AdminNavbar />
              <Routes>
                <Route path="" element={<AdminPage />} />
                <Route path="products" element={<AdminProductList />} />
                <Route path="customers" element={<AdminCustomersView />} />
                <Route path="orders" element={<AdminOrderOverview />} />
                <Route path="analytics" element={<AdminAnalytics />} />
                <Route path="*" element={<div>Admin Not Found</div>} />
              </Routes>
            </>
          }
        />

        {/* Catch all route */}
        <Route
          path="*"
          element={
            <>
              <GuestNavbar />
              <NotFound />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
