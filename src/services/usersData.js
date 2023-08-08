// services/usersData.js
const BASE_URL = 'https://reqres.in/api';

async function fetchUsers(page = 1) {
    const response = await fetch(`${BASE_URL}/users?page=${page}`);
    const data = await response.json();

    if (response.ok) {
        return data.data;
    } else {
        throw new Error(data.error);
    }
}

export { fetchUsers };
