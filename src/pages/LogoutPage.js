import React from 'react'
import Alerts from '../components/popups/Alerts'
import { logout } from '../services/Auth'
import { useNavigate } from 'react-router-dom';
import styles from './LogoutPage.module.css'

const LogoutPage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.logout_page}>
            <Alerts title='Are you sure about logging out?' onYes={() => { logout(); navigate('/') }} onNo={() => navigate(-1)} />
        </div>
    )
}

export default LogoutPage