const BASE_URL = 'https://reqres.in/api';

async function login(email, password) {
    try {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            const token = data.token;
            setAuthToken(token); // Store token in HttpOnly cookie
            return token;
        } else {
            throw new Error(data.error);
        }
    } catch (error) {
        throw error;
    }
}

function setAuthToken(token) {
    const expirationDays = 7;
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + expirationDays);

    document.cookie = `authToken=${token}; expires=${expirationDate.toUTCString()}; path=/`;
}

function getAuthToken() {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'authToken') {
            return value;
        }
    }
    return null;
}

function isLoggedIn() {
    const token = getAuthToken();
    return !!token;
}

function logout() {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() - 1);
    document.cookie = `authToken=;expires=${expirationDate.toUTCString()};path=/;`;
    console.log("haslkdkfjdsfj");
}

export { login, isLoggedIn, logout };