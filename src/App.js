import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import LoginWithCode from "./pages/auth/LoginWithCode";
import Register from "./pages/auth/Register";
import Forgout from "./pages/auth/Forgout";
import Reset from "./pages/auth/Reset";
import Verify from "./pages/auth/Verify";
import Profile from "./pages/profile/Profile";
import UserList from "./pages/userList/UserList";
import ChangePassword from "./pages/changePassword/ChangePassword";

//COMPONENTS
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgout />} />
          <Route path="/resetPassword/:resetToken" element={<Reset />} />
          <Route path="/loginWithCode/:email" element={<LoginWithCode />} />
          <Route
            path="/verify/:verificationToken"
            element={
              <Layout>
                <Verify />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />

          <Route
            path="/changePassword"
            element={
              <Layout>
                <ChangePassword />
              </Layout>
            }
          />
          <Route
            path="/users"
            element={
              <Layout>
                <UserList />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
