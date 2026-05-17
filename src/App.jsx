import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/MainLayout";
import HomePage from "./page/HomePage";
import PageNotFound from "./page/PageNotFound";
import Spinners from "./component/Spinners";
import CountryPage from "./page/CountryPage";
import ErrorFallBack from "./page/ErrorFallBack";

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <><ErrorFallBack /> </>,
      HydrateFallback: <Spinners />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/alpha/:id", element: <CountryPage /> },
        { path: "*", element: <PageNotFound /> },
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App