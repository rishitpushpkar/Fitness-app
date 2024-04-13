import "./App.css";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

import GoalsPage from "./pages/GoalsPage";
import MainScreen from "./pages/MainScreen";
import TrackingPage from "./pages/TrackingPage";
import OnboardingScreen from "./pages/OnboardingScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CalenderPage from "./pages/CalenderPage";
import Authenticate from "./Authenticate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authenticate />} />
          <Route path="/onboarding" element={<OnboardingScreen />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/goals" element={<GoalsPage />} />
          <Route path="/mainScreen" element={<MainScreen />} />
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/calendar" element={<CalenderPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
