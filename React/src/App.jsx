import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/publicRoutes/publicRoutes";

const App = () => {
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default App;
