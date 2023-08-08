import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css'; // Import the CSS module
import { isLoggedIn } from '../../services/Auth';

const Header = () => {
    const isAuthenticated = isLoggedIn();
    const location = useLocation();
    const isLinkActive = (path) => {
        return location.pathname === path ? styles.active_page : '';
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/novinLogo.png" alt="Logo" />
                <span>My App</span>
            </div>
            <div className={styles.right_div}>
                <nav className={styles.nav}>
                    <ul>
                        <li className={isLinkActive('/')}>
                            <Link to="/"  >Home</Link>
                        </li>
                        <li className={isLinkActive('/users')}>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
                {!isAuthenticated ? (
                    <Link to="/auth/login"><button className={styles.login_btn}>Login</button></Link>
                ) : (
                    <Link to="/auth/logout"><button className={styles.login_btn}>Logout</button></Link>
                )}
            </div>
        </header>
    );
};

export default Header;
