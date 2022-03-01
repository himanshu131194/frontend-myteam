import React from 'react';

const HeaderContainer: React.FC = () => {
    return (
        <header id="header" className="navbar navbar-expand-xl navbar-fixed navbar-height navbar-flush navbar-container navbar-bordered default">
            <div className="js-mega-menu navbar-nav-wrap hs-menu-initialized hs-menu-horizontal">
                <div className="navbar-brand-wrapper">
                    {/* <!-- Logo --> */}
                    <a className="navbar-brand" href="./index.html" aria-label="Front">
                        <img className="navbar-brand-logo" src="https://19p15p14p07p19.s3.ap-south-1.amazonaws.com/assets/svg/logos/logo.svg" alt="Logo" />
                    </a>
                    {/* <!-- End Logo --> */}
                </div>
                {/* <!-- Secondary Content --> */}
                <div className="navbar-nav-wrap-content-right">
                    {/* <!-- Navbar --> */}
                    <ul className="navbar-nav align-items-center flex-row">
                        <li className="nav-item">
                            {/* <!-- Account --> */}
                            <div className="hs-unfold">
                                <a className="js-hs-unfold-invoker navbar-dropdown-account-wrapper" href="javascript:;">
                                    <div className="avatar avatar-sm avatar-circle">
                                        <img className="avatar-img" src="https://19p15p14p07p19.s3.ap-south-1.amazonaws.com/assets/img/160x160/img6.jpg" alt="Image Description" />
                                        <span className="avatar-status avatar-sm-status avatar-status-success"></span>
                                    </div>
                                </a>
                            </div>
                            {/* <!-- End Account --> */}
                        </li>
                    </ul>
                    {/* <!-- End Navbar --> */}
                </div>
                {/* <!-- End Secondary Content --> */}
                {/* <!-- Navbar --> */}
                <div className="navbar-nav-wrap-content-left navbar-collapse collapse" id="navbarNavMenu">
                    <div className="navbar-body">
                        <ul className="navbar-nav flex-grow-1">
                            {/* <!-- Dashboards --> */}
                            <li>
                                <a className="navbar-nav-link nav-link" href="./layouts/layouts.html">
                                    <i className="tio-dashboard-vs-outlined nav-icon"></i> Layouts
                                </a>
                            </li>
                            {/* <!-- End Layouts --> */}
                            {/* <!-- End Documentation --> */}
                        </ul>
                    </div>
                </div>
                {/* <!-- End Navbar --> */}
            </div>
        </header>
    )
}

export default HeaderContainer;








