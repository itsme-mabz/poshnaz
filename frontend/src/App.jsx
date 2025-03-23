import { Routes, Route } from 'react-router-dom';
import Home from './pages/guestUser/Home';
import GuestNavbar from './components/guestUser/GuestNavbar';
import AdminNavbar from './components/admin/AdminNavbar';
import NotFound from './pages/guestUser/NotFound';
import ChooseYourStyle from './pages/guestUser/ChooseYourStyle';
import FabricSelection from './pages/guestUser/FabricSelection';
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
        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <>
              <AdminNavbar />
              <Routes>
                <Route path="dashboard" element={<div>Admin Dashboard</div>} />
                <Route path="users" element={<div>Users Management</div>} />
                <Route path="settings" element={<div>Admin Settings</div>} />
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
