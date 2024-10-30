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

function App() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  return (
    <Router>
      <PhoneScreenContainer>
        <Routes>
          <Route
            path="/collectors"
            element={
              <Navigate
                to={isLoggedIn ? '/collectlist' : '/collector-login'}
                replace
              />
            }
          />
          <Route path="/collector-login" element={<Login />} />
          <Route
            path="/collectlist"
            element={
              // <ProtectedRoute>
                <CollectList />
              // </ProtectedRoute>
            }
          />
        </Routes>
      </PhoneScreenContainer>
    </Router>
  );
}

export default App;
