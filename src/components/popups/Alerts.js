import React from 'react';
import styles from './Alerts.module.css';

const Alerts = ({ title, onYes, onNo }) => {
    return (
        <div className={styles['alerts-container']}>
            <h2 className={styles['alerts-title']}>{title}</h2>
            <div className={styles['alerts-buttons']}>
                <button className={styles['alerts-button']} onClick={() => onYes()}>
                    Yes
                </button>
                <button className={styles['alerts-button']} onClick={() => onNo()}>
                    No
                </button>
            </div>
        </div>
    );
};

export default Alerts;
