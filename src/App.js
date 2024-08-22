import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./Components/Homepage/homepage";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import AdminPanel from "./Components/Dashboard/CreatorDashboard/dashboard";
import Auth from "./Components/Auth/Auth";
import UserComponent from "./Components/usercomponent";
import ViewAll from "./Components/Homepage/Music_dashboard/All";
import SearchBycode from "./Components/Homepage/Search_bycode";
import Payment from "./Components/Homepage/Search_bycode/payment";
import Checkout from "./Components/Homepage/Search_bycode/checkout";

import "./App.css";
import PaymentSuccess from "./Components/Homepage/Search_bycode/paymentsuccess";
import PiracyComplaints from "./Components/Footer/PiracyComplaints";

function App() {
  const location = useLocation();
  const [footerPath, setFooterPath] = useState(true);
  console.log('footerPath', footerPath)
  useEffect(() => {
    if (location.pathname === '/usercomponent' || location.pathname === '/serch_bycode' || location.pathname === '/viewall' || location.pathname === '/checkout' || location.pathname === '/payment') {
      setFooterPath(false);
    } else {
      setFooterPath(true);
    }
  }, [location.pathname]);

  console.log('footerPath', !footerPath);

  return (
    <div className="App">
      {location.pathname.startsWith("/dashboard") ? (
        <Routes>
          <Route path="/dashboard/*" element={<AdminPanel />} />
        </Routes>
      ) : location.pathname === "/auth" ? (
        <Routes>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/usercomponent" element={<UserComponent />} />
            <Route path="/usercomponent/:tab" element={<UserComponent />} />
            <Route path="/viewall" element={<ViewAll />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/serch_bycode" element={<SearchBycode />} />
            <Route path="/piracycomplaints" element={<PiracyComplaints />} />
          </Routes>
          {footerPath && <Footer />}
        </>
      )}
    </div>
  );
}

export default App;
