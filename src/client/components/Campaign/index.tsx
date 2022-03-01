import React from 'react';

const UsersContainer: React.FC = () => {
    return (
        <main id="content" role="main" className="main">
            {/* <!-- Content --> */}
            <div className="content container-fluid">
                <div className="row justify-content-sm-center text-center py-10">
                    <div className="col-sm-7 col-md-5">
                        <img className="img-fluid mb-5" src="https://19p15p14p07p19.s3.ap-south-1.amazonaws.com/assets/svg/illustrations/graphs.svg" alt="Image Description" style={{ maxWidth: '21rem' }} />
                        <h1>Hello, nice to see you!</h1>
                        <p>You are now minutes away from creativity than ever before. Enjoy!</p>
                        <a className="btn btn-primary" href="index.html">Create my first campaign</a>
                    </div>
                </div>
                {/* <!-- End Row --> */}
            </div>
            {/* <!-- End Content --> */}
            {/* <!-- Footer --> */}
            <div className="footer">
                <div className="row justify-content-between align-items-center">
                    <div className="col">
                        <p className="font-size-sm mb-0">© Front. <span className="d-none d-sm-inline-block">2020 Htmlstream.</span></p>
                    </div>
                    <div className="col-auto">
                        <div className="d-flex justify-content-end">
                            {/* <!-- List Dot --> */}
                            <ul className="list-inline list-separator">
                                <li className="list-inline-item">
                                    <a className="list-separator-link" href="#">FAQ</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="list-separator-link" href="#">License</a>
                                </li>
                                <li className="list-inline-item">
                                    {/* <!-- Keyboard Shortcuts Toggle --> */}
                                    <div className="hs-unfold">
                                        <a className="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle" href="javascript:;">
                                            <i className="tio-command-key"></i>
                                        </a>
                                    </div>
                                    {/* <!-- End Keyboard Shortcuts Toggle --> */}
                                </li>
                            </ul>
                            {/* <!-- End List Dot --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Footer --> */}
        </main>
    )
}

export default UsersContainer;

