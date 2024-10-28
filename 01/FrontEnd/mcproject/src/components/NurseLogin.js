import React, { useState } from 'react';
import axios from 'axios';

const NurseLogin = ({ setNurse }) => {
    const [nurseidentifier, setNurseIdentifier] = useState('');
    const [nursepassword, setNursePassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/nurses/login', { nurseidentifier, nursepassword });
            setNurse(response.data);
            setError('');
        } catch (error) {
            setError('Invalid inputs. Please try again.');
        }
    };

    return (
        <div style={styles.container}>
            <h2>Nurse Login</h2>
            <form onSubmit={handleLogin} style={styles.form}>
                <input
                    type="text"
                    placeholder="Nursename, Email or Mobile Number"
                    value={nurseidentifier}
                    onChange={(e) => setNurseIdentifier(e.target.value)}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={nursepassword}
                    onChange={(e) => setNursePassword(e.target.value)}
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

export default NurseLogin;
