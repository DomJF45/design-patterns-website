import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SimpleSidebar from "./components/Navigation/index.tsx";
import HomePage from "./pages/Home/index.tsx";
import Layout from "./components/Layout.tsx";
import { PageNotFound } from "./components/PageNotFound.tsx";

const RouteLayout = () => {
  return (
    <Layout>
      <SimpleSidebar>
        <Outlet />
      </SimpleSidebar>
    </Layout>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
    errorElement: <PageNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
