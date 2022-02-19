import React from 'react';
import SideCover from './Sidecover';

const Login: React.FC = () => {
    return (
        <div className='d-flex align-items-center min-h-100'>
            <main id="content" role="main" className="main pt-0">
                <div className='container-fluid px-3'>
                    <div className='row'>
                        <div className='col-lg-6 d-none d-lg-flex justify-content-center align-items-center min-vh-lg-100 position-relative bg-light px-0'>
                            <SideCover />
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center align-items-center min-vh-lg-100'>
                            <div className="w-100 pt-10 pt-lg-7 pb-7" style={{ maxWidth: '25rem' }}>
                                <form className="js-validate" noValidate={false}>
                                    <div className="text-center mb-5">
                                        <h1 className="display-4">Sign in</h1>
                                        <p>Don't have an account yet? <a href="authentication-signup-cover.html">Sign up here</a></p>
                                    </div>
                                    <div className="mb-4">
                                        <a className="btn btn-lg btn-white btn-block" href="#">
                                            <span className="d-flex justify-content-center align-items-center">
                                                <img className="avatar avatar-xss mr-2" src="https://htmlstream.com/front-dashboard/assets/svg/brands/google.svg" alt="Image Description" />
                                                Sign up with Google
                                            </span>
                                        </a>
                                    </div>
                                    <div className="text-center mb-4">
                                        <span className="divider text-muted">OR</span>
                                    </div>
                                    <div className="js-form-message form-group">
                                        <label className="input-label" htmlFor="signupSrEmail">Your email</label>

                                        <input type="email" className="form-control form-control-lg" name="email" id="signupSrEmail" placeholder="Markwilliams@example.com" aria-label="Markwilliams@example.com" required={true} data-msg="Please enter a valid email address." />
                                    </div>
                                    <div className="js-form-message form-group">
                                        <label className="input-label" htmlFor="signupSrPassword">
                                            <span className="d-flex justify-content-between align-items-center">
                                                Password
                                                <a className="input-label-secondary" href="authentication-reset-password-cover.html">Forgot Password?</a>
                                            </span>
                                        </label>
                                        <div className="input-group input-group-merge">
                                            <input
                                                type="password"
                                                className="js-toggle-password form-control form-control-lg"
                                                name="password"
                                                id="signupSrPassword"
                                                placeholder="8+ characters required"
                                                aria-label="8+ characters required"
                                                required={true}
                                                data-msg="Your password is invalid. Please try again."
                                                data-hs-toggle-password-options='{
                             "target": "#changePassTarget",
                             "defaultClass": "tio-hidden-outlined",
                             "showClass": "tio-visible-outlined",
                             "classChangeTarget": "#changePassIcon"
                           }'
                                            />
                                            <div id="changePassTarget" className="input-group-append">
                                                <a className="input-group-text" href="javascript:;">
                                                    <i id="changePassIcon" className="tio-hidden-outlined"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="termsCheckbox" name="termsCheckbox" />
                                            <label className="custom-control-label text-muted" htmlFor="termsCheckbox"> Remember me</label>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-lg btn-block btn-primary">Sign in</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login;