import DashboardPage from "../pages/dashboardPages/DashboardPage";
import DashboardAddress from "../pages/dashboardPages/DashboardAddress";
import DashboardOrders from "../pages/dashboardPages/DashboardOrders"
import DashboardAccount from "../pages/dashboardPages/DashboardAccount";
import DashboardFavorites from "../pages/dashboardPages/DashboardFavorites";
import DashboardNotifications from "../pages/dashboardPages/DashboardNotifications";

const dashBoardRoutes = [
  {path : "" , element : <DashboardPage/>},
  {path : "index" , element : <DashboardPage/>},
  {path : "orders" , element : <DashboardOrders />},
  {path : "address" , element : <DashboardAddress />},
  {path : "infos" , element : <DashboardAccount />},
  {path : "favorites" , element : <DashboardFavorites />},
  {path : "notifs" , element : <DashboardNotifications />},
];

export default dashBoardRoutes;
