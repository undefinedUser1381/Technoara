import PanelRecentOrders from "../pages/panelPages/PanelRecentOrders";
import PanelTickets from "../pages/panelPages/PanelTickets";
import PanelProducts from "../pages/panelPages/PanelProduct";
import PanelUsers from "../pages/panelPages/PanelUsers";
import PanelNotifications from "../pages/panelPages/PanelNotifications";
import PanelCategory from "../pages/panelPages/PanelCategory";
import PanelApp from "../pages/panelPages/PanelApp";
import PanelUserDetails from "@/pages/panelPages/PanelUserDetails";
import PanelProductDetail from "@/components/panelComponents/PanelProductDetail/PanelProductDetail";

const panelRoutes = [
  { path: "dashboard", element: <PanelApp /> },
  { path: "recent-order", element: <PanelRecentOrders /> },
  { path: "ticket", element: <PanelTickets /> },
  { path: "users", element: <PanelUsers /> },
  { path: "users/:id" , element: <PanelUserDetails/>},
  { path: "products", element: <PanelProducts />},
  { path : "products/:id" , element: <PanelProductDetail/>},
  { path: "category", element: <PanelCategory /> },
  { path: "notifications", element: <PanelNotifications /> },
];

export default panelRoutes;
