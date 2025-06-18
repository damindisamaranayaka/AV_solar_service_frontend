import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage.jsx";
import Dashboard from "./pages/dashboard.jsx";
import SolarProject from "./pages/solarProject.jsx";
import ProjectDetails from "./pages/projectDetails.jsx";
import NewProjectCustomerDetail from "./pages/newProjectCustomerDetail.jsx";
import NewProjectDetails from "./pages/newProjectDetails.jsx";
import ScheduledServices from "./pages/scheduledServices.jsx";
import SearchServices from "./pages/searchServices.jsx";
import CompletedServices from "./pages/completedServices.jsx";
import ServiceDetail from "./pages/serviceDetails.jsx";
import ServiceDetails2 from "./pages/serviceDetails2.jsx";
import DueService from "./pages/dueService.jsx";
import Supervisors from "./pages/supervisors.jsx";
import Admins from "./pages/admin.jsx";
import Adduser from "./pages/addUser.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Superadmins from "./pages/SuperAdmins.jsx";
import Customer from "./pages/customer.jsx";
import NewProjectExistingCustomer from "./pages/newProjectExistingCustomer.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/solarproject"
          element={
            <ProtectedRoute>
              <SolarProject />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projectdetails"
          element={
            <ProtectedRoute>
              <ProjectDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/newprojectcustomerdetail"
          element={
            <ProtectedRoute>
              <NewProjectCustomerDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/newprojectcustomerexisting"
          element={
            <ProtectedRoute>
              <NewProjectExistingCustomer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/newprojectdetails"
          element={
            <ProtectedRoute>
              <NewProjectDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/scheduledservices"
          element={
            <ProtectedRoute>
              <ScheduledServices />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Searchservices"
          element={
            <ProtectedRoute>
              <SearchServices />
            </ProtectedRoute>
          }
        />
        <Route
          path="/completedservices"
          element={
            <ProtectedRoute>
              <CompletedServices />
            </ProtectedRoute>
          }
        />
        <Route
          path="/servicedetails"
          element={
            <ProtectedRoute>
              <ServiceDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/serviceDetails2"
          element={
            <ProtectedRoute>
              <ServiceDetails2 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dueservice"
          element={
            <ProtectedRoute>
              <DueService />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Supervisors />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admins"
          element={
            <ProtectedRoute>
              <Admins />
            </ProtectedRoute>
          }
        />
        <Route
          path="/super-admins"
          element={
            <ProtectedRoute>
              <Superadmins />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customers"
          element={
            <ProtectedRoute>
              <Customer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addusers"
          element={
            <ProtectedRoute>
              <Adduser />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
