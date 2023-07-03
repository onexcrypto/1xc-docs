/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
const MainLayout = () => {

    return (
        <>
            <div>
                {/* Main Content */}
                <main className="main-content">
                    <div className="container-fluid px-0">
                        <div className="row mx-0">
                            {/* Sidebar content */}
                            <Sidebar />
                            {/* content  */}
                            <div className="col-md-7 col-xl-8 ml-auto pt-4 pb-6">
                                <div className="row">
                                    <div className="col-8 col-md-6">
                                        <form>
                                            <div className="input-group b-0">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ti-search" /></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Search documentation ..." />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-4 col-md-6">
                                        <nav className="nav nav-dark justify-content-end small-1">
                                            <a className="nav-link d-none d-lg-block" href="#">Support</a>
                                            <a className="nav-link" href="#">Sign In <i className="ti-arrow-right small-5 pl-1" /></a>
                                        </nav>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <br />
                                <Outlet />
                                <hr className="mt-8" />
                                <p className="text-right fw-400"><a className="text-inherit" href="#">Next <i className="ti-arrow-right small-4 ml-1" /></a></p>
                            </div>
                        </div>
                    </div>
                </main>
                {/* /.main-content */}<br />
            </div>
        </>

    )
};

export default MainLayout;