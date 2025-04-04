import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "../pages/LandingPage";
import NoPageFound from "../pages/NoPageFound";
import Quiz from "../Components/Quiz";
import Leaderboard from "../Components/Leaderboard";
import RideForm from "../Components/RideForm";
import VolunteerDriver from "../pages/VolunteerSignup";
import LoginButton from "../Components/LoginButton";
import ProfileForm from "../Components/ProfileForm";
import DriverProfile from "../Components/DriverProfile";
import RiderProfile from "../Components/RiderProfile";
import VolunteerSelection from "../pages/VolunteerSelection";
import LoginPage from "../pages/LoginPage";
import Emergency from "../pages/Emergency";
import ParkingSpots from "../pages/ParkingSpots";
import Rewards from "../Components/Rewards";
import SmartRouting from "../Components/SmartRouting";
import ImpactMetrics from "../Components/ImpactMetrics";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="ride-request" element={<RideForm />} />
        <Route path="Volunteering" element={<VolunteerDriver />} />
        <Route path="Ride-Selection" element={<VolunteerSelection />} />
        <Route path="*" element={<NoPageFound />} />
        <Route path="signup" element={<ProfileForm />} />
        <Route path="driverprofile" element={<DriverProfile />} />
        <Route path="riderprofile" element={<RiderProfile />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="emergency" element={<Emergency />} />
        <Route path="parking" element={<ParkingSpots />} />
        <Route path="rewards" element={<Rewards />} />
        <Route path="smart-routing" element={<SmartRouting />} />
        <Route path="impact" element={<ImpactMetrics />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
