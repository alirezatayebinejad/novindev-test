// src/components/Auth/LoginForm.js
import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { login } from '../../services/Auth';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await login(email, password);
            navigate('/')

        } catch (error) {
            setError(error.message);
        }

        setIsLoading(false);
    };

    return (
        <div className={styles.loginForm}>
            <h2 align="center" >Please Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email:</label>
                <input
                    id='email'
                    type="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete='true'
                />
                <label htmlFor="password">password:</label>
                <input
                    id='password'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete='true'
                />
                <button type="submit" className={styles.loginButton}>
                    {isLoading ? 'Logging in...' : 'Log In'}
                </button>
            </form>
            {error && <div className={styles.error}>{error}</div>}
        </div>
    );
};

export default LoginForm;
