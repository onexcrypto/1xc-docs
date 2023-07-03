/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <>
            <div className="col-md-4 col-xl-3 px-0">
                <aside className="sidebar sidebar-expand-md sidebar-fullpage bg-gray px-6 py-5 br-1">
                    <header className="sidebar-header text-left pb-5">
                        <a href="https://1xcrypto.net" target='blank'>
                            <h2>1XCPAY</h2>
                        </a>
                    </header>
                    <div className="sidebar-body">
                        <ul className="nav nav-sidebar nav-sidebar-iconic" data-accordion="true">
                            Introduction
                            <li className="nav-item">
                                <Link className="nav-link active" to={'/'}>
                                    <i className="nav-link-icon fa fa-line" /> -
                                    <span className="nav-link-text">
                                    Présentation
                                    </span>
                                </Link>
                                
                            </li>
                            Pour commencer
                            <li className="nav-item">
                                <Link className="nav-link active" to={'/requirement'}>
                                    <i className="nav-link-icon fa fa-line" /> -
                                    <span className="nav-link-text">
                                        Prérequis
                                    </span>
                                </Link>
                                
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={'/authenticate'}>
                                    <i className="nav-link-icon fa fa-line" /> -
                                    <span className="nav-link-text">
                                        Générer une intention de paiement
                                    </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={'/install'}>
                                    <i className="nav-link-icon fa fa-line" /> -
                                    <span className="nav-link-text">
                                        Utilisation du package
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <footer className="sidebar-footer">
                        <div className="social">
                            <a className="social-facebook" href="#"><i className="fa fa-facebook-official" /></a>
                            <a className="social-twitter" href="#"><i className="fa fa-twitter" /></a>
                            <a className="social-github" href="#"><i className="fa fa-github" /></a>
                        </div>
                    </footer>
                </aside>
            </div>
        </>
    )
};

export default Sidebar;