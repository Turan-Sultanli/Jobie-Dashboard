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

function App() {
  return (
    <SidebarProvider>
      <QueryProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="application" element={<Application />} />
              <Route path="profile" element={<Profile />} />
              <Route path="statistics" element={<Statics />} />
              <Route path="search-jobs" element={<SearchJob />} />
              <Route path="companies" element={<Companies />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryProvider>
    </SidebarProvider>
  );
}

export default App;
