import React from "react";
import SideCover from "./Sidecover";
import { Link } from "react-router-dom";
import CONFIG from "../../constants/config";

const EmailVerification: React.FC = () => {
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
                <div className="text-center">
                  <div className="mb-4">
                    <img
                      className="avatar avatar-xxl avatar-4by3"
                      src={`${CONFIG.ROOT_URL}/assets/svg/illustrations/click.svg`}
                      alt="Image Description"
                    />
                  </div>

                  <h1 className="display-4">Verify your email</h1>

                  <p className="mb-1">
                    We've sent a link to your email address:
                  </p>

                  <span className="d-block text-dark font-weight-bold mb-1">
                    mark@gmail.com
                  </span>

                  <p>Please follow the link inside to continue.</p>

                  <div className="mt-4 mb-3">
                    <a className="btn btn-primary btn-wide" href="index.html">
                      Skip now
                    </a>
                  </div>

                  <p>
                    Didn't receive an email? <a href="#">Resend</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmailVerification;
