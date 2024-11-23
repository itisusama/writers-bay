import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

export default function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route 
        path="/dashboard" 
        element={
          <>
          <SignedIn>
            <Dashboard />
          </SignedIn>
          <SignedOut>
            <Navigate to="/" />
          </SignedOut>
        </>
        } />
      </Routes>
    </Router>
    </>
  );
}