import React from 'react';
import LoginForm from '../components/Auth/LoginForm';
import styles from './LoginPage.module.css';
import { isLoggedIn } from '../services/Auth';

const LoginPage = () => {
    const isAuthenticated = isLoggedIn();

    return (
        <div className={styles.login_page}>
            {isAuthenticated ? <h2>you are already logged in!</h2> : <LoginForm />}

        </div>
    )
}

export default LoginPage;