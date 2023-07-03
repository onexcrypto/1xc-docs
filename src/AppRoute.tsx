import React from 'react';
import { BrowserRouter as Router, Routes,Route,  } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import WelcomePage from './pages/WelcomePage';
import RequirementPage from './pages/RequirementPage';
import AuthenticatePage from './pages/AuthenticatePage';
import InstallationPage from './pages/InstallationPage';
function AppRoutes(){
    return (
        <React.Fragment>
            <Router>
                <Routes>
                    <Route path="/" element={<MainLayout />} >
                        <Route path="/" element={<WelcomePage />} />
                        <Route path="/requirement" element={<RequirementPage />} />
                        <Route path="/authenticate" element={<AuthenticatePage />} />
                        <Route path="/install" element={<InstallationPage />} />
                    </Route>
                </Routes>
            </Router>
        </React.Fragment>
    )
}

export default AppRoutes;