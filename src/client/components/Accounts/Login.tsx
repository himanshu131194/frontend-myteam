import React, { useState } from "react";
import SideCover from "./Sidecover";
import { Link } from "react-router-dom";
import CONFIG from "../../constants/config";
import { Formik, FormikErrors } from "formik";
import * as Yup from "yup";
import { string, ref, bool, object } from "yup";

interface loginDetails {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [userLogin, setUserLogin] = useState<loginDetails>();

  const getErrorMessages = (key, errors, touched) => {
    return (
      errors[key] &&
      touched[key] && (
        <div className="invalid-feedback" style={{ display: "block" }}>
          {errors[key]}
        </div>
      )
    );
  };
  const prefixClassforInputs = (key, errors, touched, values) => {
    const preClass =
      key !== "termsCheckbox"
        ? "form-control form-control-lg"
        : "custom-control-input";
    return errors[key] && touched[key]
      ? preClass + " is-invalid"
      : values.email.length
      ? preClass + " is-valid"
      : preClass;
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
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                  validationSchema={object().shape({
                    email: string()
                      .email()
                      .required("Please enter a valid email address."),
                    password: string()
                      .required("Your password is invalid. Please try again.")
                      .min(
                        8,
                        "Password is too short - should be 8 chars minimum"
                      ),
                  })}
                >
                  {(props) => {
                    const {
                      values,
                      touched,
                      errors,
                      dirty,
                      isSubmitting,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      handleReset,
                    } = props;
                    return (
                      <form className="js-validate" onSubmit={handleSubmit}>
                        <div className="text-center mb-5">
                          <h1 className="display-4">Sign in</h1>
                          <p>
                            Don't have an account yet?{" "}
                            <Link to="/account/signup">Sign up here</Link>
                          </p>
                        </div>
                        <div className="mb-4">
                          <a
                            className="btn btn-lg btn-white btn-block"
                            href="#"
                          >
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
                        <div className="js-form-message form-group">
                          <label
                            className="input-label"
                            htmlFor="signupSrEmail"
                          >
                            Your email
                          </label>

                          <input
                            type="email"
                            className={prefixClassforInputs(
                              "email",
                              errors,
                              touched,
                              values
                            )}
                            name="email"
                            id="email"
                            placeholder="Markwilliams@example.com"
                            aria-label="Markwilliams@example.com"
                            required={true}
                            data-msg="Please enter a valid email address."
                          />
                          {getErrorMessages("fName", errors, touched)}
                        </div>
                        <div className="js-form-message form-group">
                          <label
                            className="input-label"
                            htmlFor="signupSrPassword"
                          >
                            <span className="d-flex justify-content-between align-items-center">
                              Password
                              <a
                                className="input-label-secondary"
                                href="authentication-reset-password-cover.html"
                              >
                                Forgot Password?
                              </a>
                            </span>
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              type="password"
                              className={prefixClassforInputs(
                                "password",
                                errors,
                                touched,
                                values
                              )}
                              name="password"
                              id="password"
                              placeholder="8+ characters required"
                              aria-label="8+ characters required"
                            />
                            {getErrorMessages("password", errors, touched)}
                            <div
                              id="changePassTarget"
                              className="input-group-append"
                            >
                              <a
                                className="input-group-text"
                                href="javascript:;"
                              >
                                <i
                                  id="changePassIcon"
                                  className="tio-hidden-outlined"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="termsCheckbox"
                              name="termsCheckbox"
                            />
                            <label
                              className="custom-control-label text-muted"
                              htmlFor="termsCheckbox"
                            >
                              {" "}
                              Remember me
                            </label>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-lg btn-block btn-primary"
                        >
                          Sign in
                        </button>
                      </form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Login.defaultProps = {
  name: "chetna",
  password: "chetna",
};

export default Login;
