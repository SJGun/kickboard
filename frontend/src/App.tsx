import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import { useAuthStore } from './store/authStore';
import PhoneScreenContainer from './components/phoneScreenContainer';
// import ProtectedRoute from './components/protectedRoute';
import Login from './pages/collector/login';
import CollectList from './pages/collector/collectList';
// import AdminMainPage from './pages/admin/adminMainPage';
import ReportPage from './pages/report/ReportPage';
import Header from './components/basic/Header';

function App() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <Router>
      <Routes>
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
              <Login />
            </PhoneScreenContainer>
          }
        />
        <Route
          path="/collectlist"
          element={
            <PhoneScreenContainer>
              <CollectList />
            </PhoneScreenContainer>
          }
        />
        {/* 사용자 페이지 -------------------------------------*/}
        <Route
          path="/"
          element={
            <PhoneScreenContainer>
              <Header title={'전동 킥보드 주정차 위반 신고'} />
              <ReportPage />
            </PhoneScreenContainer>
          }
        ></Route>

        {/* <Route path="/adminMainPage" element={<AdminMainPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
