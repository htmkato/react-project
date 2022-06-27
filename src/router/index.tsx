import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import App from "../App";
import HomePage from "@pages/HomePage";
import ProfilePage from "@pages/ProfilePage";
import SettingsPage from "@pages/SettingsPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
