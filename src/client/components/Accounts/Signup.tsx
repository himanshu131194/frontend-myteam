import React, { useRef, useState } from "react";
import SideCover from "./Sidecover";
import { Link } from "react-router-dom";
import CONFIG from "../../constants/config";
import { Formik, FormikErrors } from 'formik';
import * as Yup from "yup";
import { string, ref, bool, object } from "yup";

interface userDetails {
  fName: string;
  lName: string;
  email: string;
  pass: string;
  cPass: string;
  termsCheckbox: boolean;
}


interface FormValues {
  fName?: string;
  lName?: string;
  email?: string;
  pass?: string;
  cPass?: string;
  termsCheckbox?: boolean;
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
  // const onSubmit = async (e: any) => {
  //   e.preventDefault();
  //   const postData = {
  //     first_name: newUser.fName,
  //     last_name: newUser.lName,
  //     email: newUser.email,
  //     password: newUser.pass,
  //   };
  //   const res = await fetch(`${CONFIG.API_URL}/users`, {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(postData),
  //   });
  //   const result = await res.json();
  //   console.log(result);
  // };
  const getErrorMessages = (key, errors, touched)=>{
    return errors[key] && touched[key] && (<div className="invalid-feedback" style={{display: 'block'}}>{errors[key]}</div>)
  }
  const prefixClassforInputs = (key, errors, touched, values)=>{
    const preClass = key!=="termsCheckbox" ? "form-control form-control-lg" : "custom-control-input";
    return errors[key] && touched[key] 
      ? preClass+' is-invalid'
      : (values.email.length? preClass+' is-valid': preClass);
  }
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
                <Formik
                  initialValues={{ email: "", fName: "", lName: "", password: "", conPassword: "", termsCheckbox: false }}
                  onSubmit={values => {
                    console.log(values);
                  }}
                  validationSchema={
                    object().shape({
                      fName: string().required("Please enter your first name."),
                      lName: string().required("Please enter your last name."),
                      email: string().email().required("Please enter a valid email address."),
                      password: string()
                        .required("Your password is invalid. Please try again.")
                        .min(8, "Password is too short - should be 8 chars minimum"),
                      termsCheckbox: bool().oneOf([true], "Please accept our Terms and Conditions."),
                      conPassword: string()
                      .required("Please confirm your password")
                      .oneOf([ref("password")], "Passwords do not match"),
                      })
                  }
                >
                  {
                    (props) => {
                      const {
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset
                      } = props;
                      return (
                        <form
                          className="js-validate"
                          onSubmit={handleSubmit}
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
                                  className={prefixClassforInputs('fName', errors, touched, values)}
                                  name="fName"
                                  id="fName"
                                  placeholder="Mark"
                                  aria-label="Mark"
                                  data-msg="Please enter your first name."
                                  value={values.fName}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                {getErrorMessages('fName', errors, touched)}
                              </div>
                            </div>

                            <div className="col-sm-6">
                              <div className="js-form-message form-group">
                                <input
                                  type="text"
                                  className={prefixClassforInputs('lName', errors, touched, values)}
                                  name="lName"
                                  id="lName"
                                  placeholder="Williams"
                                  aria-label="Williams"
                                  data-msg="Please enter your last name."
                                  value={values.lName}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                {getErrorMessages('lName', errors, touched)}
                              </div>
                            </div>
                          </div>
                          <div className="js-form-message form-group">
                            <label className="input-label" htmlFor="signupSrEmail">
                              Your email
                            </label>

                            <input
                              type="email"
                              id="email"
                              className={prefixClassforInputs('email', errors, touched, values)}
                              name="email"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Markwilliams@example.com"
                              aria-label="Markwilliams@example.com"
                            />
                            {getErrorMessages('email', errors, touched)}
                          </div>
                          <div className="js-form-message form-group">
                            <label className="input-label" htmlFor="signupSrPassword">
                              Password
                            </label>

                            <div className="input-group input-group-merge">
                              <input
                                type="password"
                                className={prefixClassforInputs('password', errors, touched, values)}
                                name="password"
                                id="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="8+ characters required"
                                aria-label="8+ characters required"
                                data-msg="Your password is invalid. Please try again."
                              />
                              {getErrorMessages('password', errors, touched)}
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
                                className={prefixClassforInputs('conPassword', errors, touched, values)}
                                name="conPassword"
                                id="conPassword"
                                placeholder="8+ characters required"
                                aria-label="8+ characters required"
                                value={values.conPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              {getErrorMessages('conPassword', errors, touched)}
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
                                className={prefixClassforInputs('termsCheckbox', errors, touched, values)}
                                id="termsCheckbox"
                                name="termsCheckbox"
                                data-msg="Please accept our Terms and Conditions."
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />

                              <label
                                className="custom-control-label text-muted"
                                htmlFor="termsCheckbox"
                              >
                                {" "}
                                I accept the <a href="#">Terms and Conditions</a>
                              </label>

                            </div>
                            {getErrorMessages('termsCheckbox', errors, touched)}

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
                      )
                    }
                  }
                </Formik>

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
