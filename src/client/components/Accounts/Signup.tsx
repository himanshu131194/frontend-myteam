import React, { useRef, useState } from "react";
import SideCover from "./Sidecover";
import { Link } from "react-router-dom";
import CONFIG from "../../constants/config";
import { json } from "express";

interface userDetails {
  fName: string;
  lName: string;
  email: string;
  pass: string;
  cPass: string;
  termsCheckbox: boolean;
}
const Signup: React.FC = (props) => {
  const [newUser, setNewUser] = useState<userDetails>();

  const onChangeUser = (e: any) => {
    setNewUser({
      ...newUser,
      [e.target.name]:
        e.target.name === "termsCheckbox" ? e.target.checked : e.target.value,
    });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const postData = {
      first_name: newUser.fName,
      last_name: newUser.lName,
      email: newUser.email,
      password: newUser.pass,
    };
    const res = await fetch(`${CONFIG.API_URL}/users`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    const result = await res.json();
    console.log(result);
  };

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
                <form
                  className="js-validate"
                  noValidate={true}
                  onSubmit={onSubmit}
                >
                  <div className="text-center mb-5">
                    <h1 className="display-4">Create your account</h1>
                    <p>
                      Already have an account?{" "}
                      <Link to="/account">Sign in here</Link>
                    </p>
                  </div>

                  <div className="mb-4">
                    <a className="btn btn-lg btn-white btn-block" href="#">
                      <span className="d-flex justify-content-center align-items-center">
                        <img
                          className="avatar avatar-xss mr-2"
                          src={`${CONFIG.ROOT_URL}/assets/svg/brands/google.svg`}
                          alt="Image Description"
                        />
                        Sign up with Google
                      </span>
                    </a>
                  </div>

                  <div className="text-center mb-4">
                    <span className="divider text-muted">OR</span>
                  </div>

                  <label className="input-label" htmlFor="fullNameSrEmail">
                    Full name
                  </label>
                  <div className="form-row">
                    <div className="col-sm-6">
                      <div className="js-form-message form-group">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          name="fName"
                          id="fNameSrEmail"
                          placeholder="Mark"
                          aria-label="Mark"
                          required={true}
                          data-msg="Please enter your first name."
                          onKeyUp={onChangeUser}
                        />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="js-form-message form-group">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          name="lName"
                          id="lNameSrEmail"
                          placeholder="Williams"
                          aria-label="Williams"
                          required={true}
                          data-msg="Please enter your last name."
                          onKeyUp={onChangeUser}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="js-form-message form-group">
                    <label className="input-label" htmlFor="signupSrEmail">
                      Your email
                    </label>

                    <input
                      type="email"
                      className="form-control form-control-lg"
                      name="email"
                      id="signupSrEmail"
                      placeholder="Markwilliams@example.com"
                      aria-label="Markwilliams@example.com"
                      required={true}
                      data-msg="Please enter a valid email address."
                      onKeyUp={onChangeUser}
                    />
                  </div>
                  <div className="js-form-message form-group">
                    <label className="input-label" htmlFor="signupSrPassword">
                      Password
                    </label>

                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        className="js-toggle-password form-control form-control-lg"
                        name="pass"
                        id="signupSrPassword"
                        placeholder="8+ characters required"
                        aria-label="8+ characters required"
                        required={true}
                        data-msg="Your password is invalid. Please try again."
                        data-hs-toggle-password-options='{
                             "target": [".js-toggle-password-target-1", ".js-toggle-password-target-2"],
                             "defaultClass": "tio-hidden-outlined",
                             "showClass": "tio-visible-outlined",
                             "classChangeTarget": ".js-toggle-passowrd-show-icon-1"
                           }'
                        onKeyUp={onChangeUser}
                      />
                      <div className="js-toggle-password-target-1 input-group-append">
                        <a className="input-group-text" href="javascript:;">
                          <i className="js-toggle-passowrd-show-icon-1 tio-hidden-outlined"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="js-form-message form-group">
                    <label
                      className="input-label"
                      htmlFor="signupSrConfirmPassword"
                    >
                      Confirm password
                    </label>

                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        className="js-toggle-password form-control form-control-lg"
                        name="confirmPassword"
                        id="signupSrConfirmPassword"
                        placeholder="8+ characters required"
                        aria-label="8+ characters required"
                        required={true}
                        data-msg="Password does not match the confirm password."
                        data-hs-toggle-password-options='{
                          "target": [".js-toggle-password-target-1", ".js-toggle-password-target-2"],
                          "defaultClass": "tio-hidden-outlined",
                          "showClass": "tio-visible-outlined",
                          "classChangeTarget": ".js-toggle-passowrd-show-icon-2"
                        }'
                      />
                      <div className="js-toggle-password-target-2 input-group-append">
                        <a className="input-group-text" href="javascript:;">
                          <i className="js-toggle-passowrd-show-icon-2 tio-hidden-outlined"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="js-form-message form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="termsCheckbox"
                        name="termsCheckbox"
                        required={true}
                        data-msg="Please accept our Terms and Conditions."
                        onChange={onChangeUser}
                      />
                      <label
                        className="custom-control-label text-muted"
                        htmlFor="termsCheckbox"
                      >
                        {" "}
                        I accept the <a href="#">Terms and Conditions</a>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-lg btn-block btn-primary mb-2"
                  >
                    Create an account
                  </button>

                  <button type="submit" className="btn btn-block btn-link">
                    or Start your 30-day trial{" "}
                    <i className="tio-chevron-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Signup.defaultProps = {
//   fName: "Chetna",
//   email: "chetna@gmail.com",
//   pass: "chetna",
//   cPass: "chetna",
// };

export default Signup;
