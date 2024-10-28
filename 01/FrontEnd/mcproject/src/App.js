import React, { useState } from 'react';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import DLogin from './components/DLogin';
import DoctorProfile from './components/DoctorProfile';
import NurseLogin from './components/NurseLogin';
import NurseProfile from './components/NurseProfile';
import AdminLogin from './components/AdminLogin';
import AdminProfile from './components/AdminProfile';
import SuperadminLogin from './components/SuperadminLogin';
import SuperadminProfile from './components/SuperadminProfile';

const App = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loginType, setLoginType] = useState(null);

    const handleLogout = () => {
        setCurrentUser(null);
        setLoginType(null);
    };

    const renderProfile = () => {
        if (!currentUser) return null;
        const { type, details } = currentUser;

        switch (type) {
            case 'user':
                return <UserProfile user={details} onLogout={handleLogout} />;
            case 'doctor':
                return <DoctorProfile doctor={details} onLogout={handleLogout} />;
            case 'nurse':
                return <NurseProfile nurse={details} onLogout={handleLogout} />;
            case 'admin':
                return <AdminProfile admin={details} onLogout={handleLogout} />;
            case 'superadmin':
                return <SuperadminProfile superadmin={details} onLogout={handleLogout} />;
            default:
                return null;
        }
    };

    const renderLoginComponent = () => {
        switch (loginType) {
            case 'user':
                return <Login setUser={(user) => setCurrentUser({ type: 'user', details: user })} />;
            case 'doctor':
                return <DLogin setDoctor={(doctor) => setCurrentUser({ type: 'doctor', details: doctor })} />;
            case 'nurse':
                return <NurseLogin setNurse={(nurse) => setCurrentUser({ type: 'nurse', details: nurse })} />;
            case 'admin':
                return <AdminLogin setAdmin={(admin) => setCurrentUser({ type: 'admin', details: admin })} />;
            case 'superadmin':
                return <SuperadminLogin setSuperadmin={(superadmin) => setCurrentUser({ type: 'superadmin', details: superadmin })} />;
            default:
                return null;
        }
    };

    return (
        <div>
            {!currentUser && (
                <div>
                    <h2>Select Login Type</h2>
                    <button onClick={() => setLoginType('user')}>User Login</button>
                    <button onClick={() => setLoginType('doctor')}>Doctor Login</button>
                    <button onClick={() => setLoginType('nurse')}>Nurse Login</button>
                    <button onClick={() => setLoginType('admin')}>Admin Login</button>
                    <button onClick={() => setLoginType('superadmin')}>SuperAdmin Login</button>
                </div>
            )}

            {renderProfile()}

            {loginType && !currentUser && renderLoginComponent()}
        </div>
    );
};

export default App;
