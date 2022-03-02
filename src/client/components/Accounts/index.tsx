import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import ResetPassword from "./ResetPassoword";
import EmailVerification from "./EmailVerification";
import TwoStepVerification from "./TwoStepVerification";

const Accounts: React.FC = (props) => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="reset" element={<ResetPassword />} />
      <Route path="verify" element={<EmailVerification />} />
      <Route path="twostepverify" element={<TwoStepVerification />} />
    </Routes>
  );
};

export default Accounts;
