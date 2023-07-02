import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SimpleSidebar from "./components/Navigation/index.tsx";
import HomePage from "./pages/Home/index.tsx";
import Layout from "./components/Layout.tsx";
import { PageNotFound } from "./components/PageNotFound.tsx";
import FactoryPage from "./pages/Factory/index.tsx";
import AbstractFactoryPage from "./pages/AbstractFactory/index.tsx";
import BuilderPage from "./pages/Builder/index.tsx";
import PrototypePage from "./pages/Prototype/index.tsx";
import SingletonPage from "./pages/Singleton/index.tsx";

const RouteLayout = () => {
  return (
    <SimpleSidebar>
      <Layout>
        <Outlet />
      </Layout>
    </SimpleSidebar>
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
      {
        path: "/factory",
        element: <FactoryPage />,
      },
      {
        path: "/abstract-factory",
        element: <AbstractFactoryPage />,
      },
      {
        path: "/builder",
        element: <BuilderPage />,
      },
      {
        path: "/prototype",
        element: <PrototypePage />,
      },
      {
        path: "/singleton",
        element: <SingletonPage />,
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
