import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import PhoneScreenContainer from './components/PhoneScreenContainer';
import ProtectedRoute from './components/ProtectedRoute';
import { useCollectorAuthStore } from './store/CollectorAuthStore';

import './App.css';

import CollectorLoginPage from './pages/collector/CollectorLoginPage';
import CollectList from './pages/collector/CollectListPage';

function App() {
  const isLoggedIn = useCollectorAuthStore((state) => state.isLoggedIn);

  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route
          path="/collectors"
          element={
            <PhoneScreenContainer>
              <Navigate
                to={isLoggedIn ? '/collectlist' : '/collector-login'}
                replace
              />
            </PhoneScreenContainer>
          }
        />
        <Route
          path="/collector-login"
          element={
            <PhoneScreenContainer>
              <CollectorLoginPage />
            </PhoneScreenContainer>
          }
        />
        <Route
          path="/collectlist"
          element={
            <PhoneScreenContainer>
              {/* <ProtectedRoute> */}
              <CollectList />
              {/* </ProtectedRoute> */}
            </PhoneScreenContainer>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
