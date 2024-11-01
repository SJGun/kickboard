import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import PhoneScreenContainer from './components/phoneScreenContainer';
import ProtectedRoute from './components/protectedRoute';
import { useAuthStore } from './store/authStore';

import './App.css';

import Login from './pages/collector/login';
import CollectList from './pages/collector/collectList';
import AdminMainPage from './pages/admin/AdminMainPage';
import AdminInfoPage from './pages/admin/AdminInfoPage';
import AdminMapPage from './pages/admin/AdminMap';
import AccountManagePage from './pages/admin/AccountManage';
import AdminLoginPage from './pages/admin/AdminLogin';


function App() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <Router>
      <Routes>

        <Route
          path="/collectors"
          element={
            <PhoneScreenContainer>
              <Navigate to={isLoggedIn ? '/collectlist' : '/collector-login'} replace />
            </PhoneScreenContainer>
          }
        />
        <Route path="/collector-login" element={<PhoneScreenContainer><Login /></PhoneScreenContainer>} />
        <Route
          path="/collectlist"
          element={
            <PhoneScreenContainer>
              <CollectList />
            </PhoneScreenContainer>
          }
        />

          <Route path="/adminMainPage" element={<AdminMainPage />} />
          <Route path="/admininfo" element={<AdminInfoPage />} />
          <Route path="/adminmap" element={<AdminMapPage />} />
          <Route path="/accountmanage" element={<AccountManagePage />} />
          <Route path="/adminlogin" element={<AdminLoginPage />} />
        </Routes>
    </Router>
  );
}

export default App;
