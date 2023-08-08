import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import UsersPage from './pages/UsersPage';

let routes = [
    { path: "/", element: <h2 align="center">Welcom to Novin dev test</h2> },
    { path: "/users", element: <UsersPage /> },
    {
        path: "/auth",
        children: [
            { path: "login", element: <LoginPage /> },
            { path: "logout", element: <LogoutPage /> },
        ],
    },
];
export default routes;