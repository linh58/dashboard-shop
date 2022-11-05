import Home from "~/pages/Home";
import Products from "~/pages/Products";
import Customers from "~/pages/Customers";
import Shop from "~/pages/Shop";
import Income from "~/pages/Income";
import Promote from "~/pages/Promote";

const publicRoutes = [
  { path: "/", component: Home },
  {
    path: "/products",
    component: Products,
  },
  { path: "/customers", component: Customers },
  { path: "/shop", component: Shop },
  { path: "/income", component: Income },
  { path: "/promote", component: Promote },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
