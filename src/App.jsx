import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Register from "./Register";
import DownlineView from "./DownlineView";
import Profile from "./Profile";
import BankData from "./BankData";
import AdminDashboard from "./AdminDashboard";
import UserManage from "./UserManage";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}
        <Route path="/" element={<Login />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/admin/login" element={<Login isAdmin={true} />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/admin" element={<AdminDashboard />}/>
        <Route path="/admin/manage-users" element={<UserManage />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/profile/bank" element={<BankData />}/>
        <Route path="/downline/:userId" element={<DownlineView />}/>
      </Routes>
    </Router>
  )
}

export default App
