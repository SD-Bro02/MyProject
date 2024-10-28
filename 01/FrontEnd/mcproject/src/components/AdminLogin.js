import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = ({ setAdmin }) => {
    const [adminidentifier, setAdminIdentifier] = useState('');
    const [adminpassword, setAdminPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/admins/login', { adminidentifier, adminpassword });
            setAdmin(response.data);
            setError('');
        } catch (error) {
            setError('Invalid inputs. Please try again.');
        }
    };

    return (
        <div style={styles.container}>
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin} style={styles.form}>
                <input
                    type="text"
                    placeholder="Adminname, Email or Mobile Number"
                    value={adminidentifier}
                    onChange={(e) => setAdminIdentifier(e.target.value)}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={adminpassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

// Basic inline styles
const styles = {
    container: {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        marginBottom: '10px',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
        marginTop: '10px',
    },
};

export default AdminLogin;
