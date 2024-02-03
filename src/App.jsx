import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  Application,
  Companies,
  Dashboard,
  Profile,
  SearchJob,
  Statics,
} from "./pages";
import AppLayout from "./layout/AppLayout";
import QueryProvider from "./lib/react-query/QueryProvider";
import SidebarProvider from "./contexts/SidebarProvider";
import { DarkModeProvider } from "./contexts/ThemeProvider";

import AuthLayout from "./layout/AuthLayout";
import SignIn from "../src/pages/SignIn";
import SignUp from "../src/pages/SignUp";
import UpdatePasswordForm from "./features/auth/UpdatePasswordForm";
import ForgotPasswordForm from "./features/auth/ForgotPasswordForm";
import ProtectedRoute from "./shared/ProtectedRoute";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    
    <DarkModeProvider>
      <SidebarProvider>
        <QueryProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AuthLayout />}>
                <Route index element={<Navigate to="sign-in" />} />
                <Route path="sign-in" element={<SignIn />} />
                <Route path="sign-up" element={<SignUp />} />
                <Route path="forgot-password" element={<ForgotPasswordForm />} />
                <Route path="update-password" element={<UpdatePasswordForm />} />
              </Route>

              <Route
                path="/app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="application" element={<Application />} />
                <Route path="profile" element={<Profile />} />
                <Route path="statistics" element={<Statics />} />
                <Route path="search-jobs" element={<SearchJob />} />
                <Route path="companies" element={<Companies />} />
              </Route>

              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </BrowserRouter>
          <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--primary-clr)",
              color: "var(--gray-clr)",
            },
          }}
        />
        </QueryProvider>
      </SidebarProvider>
    </DarkModeProvider>
  );
}

export default App;
