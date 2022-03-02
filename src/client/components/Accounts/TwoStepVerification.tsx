import React from "react";
import SideCover from "./Sidecover";
import { Link } from "react-router-dom";
import CONFIG from "../../constants/config";

const TwoStepVerification: React.FC = () => {
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
                  <div className="text-center">
                    <div className="mb-4">
                      <img
                        className="avatar avatar-xxl avatar-4by3"
                        src={`${CONFIG.ROOT_URL}/assets/svg/illustrations/unlock.svg`}
                        alt="Image Description"
                      />
                    </div>

                    <div className="mb-5">
                      <h1 className="display-4">2-step Verification</h1>

                      <p className="mb-0">
                        We sent a verification code to your email.
                      </p>

                      <p>Enter the code from the email in the field below.</p>
                    </div>

                    <div className="row gx-2 gx-sm-3">
                      <div className="col">
                        <div className="form-group">
                          <input
                            type="text"
                            className="js-masked-input form-control form-control-single-number"
                            name="code1"
                            id="twoStepVerificationSrCodeInput1"
                            placeholder=""
                            aria-label=""
                            maxLength={1}
                            autoComplete="off"
                            autoCapitalize="off"
                          />
                        </div>
                      </div>

                      <div className="col">
                        <div className="form-group">
                          <input
                            type="text"
                            className="js-masked-input form-control form-control-single-number"
                            name="code2"
                            id="twoStepVerificationSrCodeInput2"
                            placeholder=""
                            maxLength={1}
                          />
                        </div>
                      </div>

                      <div className="col">
                        <div className="form-group">
                          <input
                            type="text"
                            className="js-masked-input form-control form-control-single-number"
                            name="code3"
                            id="twoStepVerificationSrCodeInput3"
                            placeholder=""
                            aria-label=""
                          />
                        </div>
                      </div>

                      <div className="col">
                        <div className="form-group">
                          <input
                            type="text"
                            className="js-masked-input form-control form-control-single-number"
                            name="code4"
                            id="twoStepVerificationSrCodeInput4"
                            placeholder=""
                            aria-label=""
                            maxLength={1}
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-lg btn-block btn-primary"
                    >
                      Verify my account
                    </button>

                    <div className="text-center mt-3">
                      <p>
                        Haven't received it? <a href="#">Resend a new code.</a>
                      </p>
                    </div>
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

export default TwoStepVerification;
