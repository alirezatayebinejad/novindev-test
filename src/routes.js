let routes = [
    { path: "/", element: <p>home page</p> },
    { path: "/users", element: <p>users page</p> },
    {
        path: "/auth/*",
        element: <p>auth page</p>,
        children: [
            { path: "login", element: <p> login page</p> },
            { path: "logout", element: <p> logout</p> },
        ],
    },
];
export default routes;