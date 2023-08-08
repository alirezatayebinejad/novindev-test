import React, { useEffect, useState } from 'react';
import styles from './UsersPage.module.css';
import { fetchUsers } from '../services/usersData';
import UserCards from '../components/Cards/UserCards';
import { isLoggedIn } from '../services/Auth';

const UsersPage = () => {
    const isAuthenticated = isLoggedIn();
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        async function fetchData() {
            try {
                const usersData = await fetchUsers(currentPage);
                if (usersData.length === 0) setCurrentPage(prev => prev - 1)
                setUsers(usersData);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }

        fetchData();
    }, [currentPage]);

    const createUsersLists = () => {
        let lists = users.map(user => (
            <UserCards key={user.id} user={user} />
        ))
        return lists;
    }
    if (!isAuthenticated)
        return <h2 align="center">you must loggin to see users!</h2>

    return (
        <div className={styles['users-page']}>
            <h2 className={styles['page-title']}>Users</h2>
            <div className={styles['users-list']}>
                {createUsersLists()}
            </div>
            <div className={styles['pagination']}>
                <button
                    className={styles['pagination-button']}
                    onClick={() => setCurrentPage(prevPage => prevPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className={styles['current-page']}>Page {currentPage}</span>
                <button
                    className={styles['pagination-button']}
                    onClick={() => setCurrentPage(prevPage => prevPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default UsersPage;
