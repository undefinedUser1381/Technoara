import Index from "../pages/mainPages/Index/Index";
import Basket from "../pages/mainPages/Basket/Basket";
import Category from "../pages/mainPages/Category/Category";
import ProductDiscount from "../pages/mainPages/ProductsDiscount/ProductsDiscount";
import Articles from "../pages/mainPages/Articles/Articles";
import SingleProduct from "../pages/mainPages/Product/SingleProduct";
import RegisterPage from "../pages/mainPages/Register/RegisterPage";
import LoginPage from "../pages/mainPages/Login/LoginPage";
import Error404 from "../pages/mainPages/Error404/Error404";

import DashboardApp from "../pages/dashboardPages/DashboardApp";
import dashBoardRoutes from "./dashboardRoutes";

import panelRoutes from "./panelRoutes";
import PanelMain from "../pages/panelPages/PanelMain";

const routes = [
  { path: "/", element: <Index /> },
  { path: "register", element: <RegisterPage /> },
  { path: "login", element: <LoginPage /> },
  { path: "basket", element: <Basket /> },
  { path: "category", element: <Category /> },
  { path: "product", element: <SingleProduct /> },
  { path: "productdiscount", element: <ProductDiscount /> },
  { path: "articles", element: <Articles /> },

  { path: "/dashboard", element: <DashboardApp />, children: dashBoardRoutes },

  { path: "/panel", element: <PanelMain />, children: panelRoutes },

  { path: "/*", element: <Error404 /> },
];

export default routes;
