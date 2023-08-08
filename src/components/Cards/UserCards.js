import React from 'react';
import styles from './UserCards.module.css';

const UserCards = ({ user }) => {
    return (
        <div className={styles.user_card}>
            <img src={user.avatar} alt={user.first_name} className={styles.user_avatar} />
            <div className={styles.user_info}>
                <p>{`${user.first_name} ${user.last_name}`}</p>
                <p>{user.email}</p>
            </div>
        </div>
    );
};

export default UserCards;
