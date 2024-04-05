import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";

import Test from "../Pages/Test";
import Layout from "../Pages/Layout";
import Cart from "../Pages/Cart";

function RouterData() {
  const route = (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<LoginPage />} />
          <Route path="test" element={<Test />}>
            <Route path=":id" element={<Cart />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );

  //   const router = createBrowserRouter([
  //     {
  //       path: "/",
  //       element: <Layout />,
  //       children: [
  //         { path: "/", element: <LoginPage /> },
  //         {
  //           path: "/test",
  //           element: <Test />,
  //           children: [{ path: "/test/:id", element: <Cart /> }],
  //         },
  //       ],
  //     },
  //   ]);

  return route;
}
export default RouterData;
