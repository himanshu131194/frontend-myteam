import React from "react";
import SideCover from "./Sidecover";
import { Link } from "react-router-dom";
import CONFIG from "../../constants/config";

const ResetPassword: React.FC = () => {
  return (
    <div className="d-flex align-items-center min-h-100">
      <main id="content" role="main" className="main pt-0">
        <div className="container-fluid px-3">
          <div className="row">
            <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center min-vh-lg-100 position-relative bg-light px-0">
              <SideCover />
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center min-vh-lg-100">
              <div
                className="w-100 pt-10 pt-lg-7 pb-7"
                style={{ maxWidth: "25rem" }}
              >
                <form className="js-validate">
                  <div className="text-center mb-5">
                    <h1 className="display-4">Forgot password?</h1>
                    <p>
                      Enter the email address you used when you joined and we'll
                      send you instructions to reset your password.
                    </p>
                  </div>

                  <div className="js-form-message form-group">
                    <label
                      className="input-label"
                      htmlFor="resetPasswordSrEmail"
                    >
                      Your email
                    </label>

                    <input
                      type="email"
                      className="form-control form-control-lg"
                      name="email"
                      id="resetPasswordSrEmail"
                      placeholder="email@address.com"
                      aria-label="email@address.com"
                      data-msg="Please enter a valid email address."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-lg btn-block btn-primary"
                  >
                    Submit
                  </button>

                  <div className="text-center mt-2">
                    <a
                      className="btn btn-link"
                      href="authentication-signin-cover.html"
                    >
                      <i className="tio-chevron-left"></i> Back to Sign in
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResetPassword;
