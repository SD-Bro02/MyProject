import React, { useState } from 'react';
import axios from 'axios';

const DLogin = ({ setDoctor }) => {
    const [didentifier, setDIdentifier] = useState('');
    const [dpassword, setDPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/doctors/login', { 
                didentifier, 
                dpassword 
            });
            setDoctor(response.data); // Assuming response.data contains the doctor object
            setError(''); // Clear error on successful login
        } catch (error) {
            setError('Invalid inputs. Please try again.');
        }
    };

    return (
        <div style={styles.container}>
            <h2>Doctor Login</h2>
            <form onSubmit={handleLogin} style={styles.form}>
                <input
                    type="text"
                    placeholder="Doctor Name, Email or Mobile Number"
                    value={didentifier}
                    onChange={(e) => setDIdentifier(e.target.value)}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={dpassword}
                    onChange={(e) => setDPassword(e.target.value)}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Login</button>
                {error && <p style={styles.error}>{error}</p>}
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

export default DLogin;
