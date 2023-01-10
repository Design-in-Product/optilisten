import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { AboutAppPage } from "../pages/AboutApp";
import { DashboardPage } from "../pages/Dashboard";
import { FeedbackPage } from "../pages/Feedback";
import { NotFoundPage } from "../pages/NotFound";
import { PrivacyPage } from "../pages/Privacy";
import { SettingsPage } from "../pages/Settings";
import {
  PATH_ABOUT_APP,
  PATH_ANY,
  PATH_FEEDBACK,
  PATH_PRIVACY,
  PATH_ROOT,
  PATH_SETTINGS,
  PATH_TERMS,
} from "./paths";

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path={PATH_ROOT} element={<DashboardPage />} />
      <Route path={PATH_ABOUT_APP} element={<AboutAppPage />} />
      <Route path={PATH_PRIVACY} element={<PrivacyPage />} />
      <Route path={PATH_TERMS} element={<PrivacyPage />} />
      <Route path={PATH_FEEDBACK} element={<FeedbackPage />} />
      <Route path={PATH_SETTINGS} element={<SettingsPage />} />
      <Route path={PATH_ANY} element={<NotFoundPage />} />
    </Routes>
  );
};
