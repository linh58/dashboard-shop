import React from "react";
import "./Sidebar.scss";
import logo from "~/assets/images/logo.png";
import config from "~/config";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";
import {
  CustomerIcon,
  DeleteIcon,
  HomeIcon,
  IncomeIcon,
  ProductIcon,
  PromoteIcon,
  ShopIcon,
} from "~/components/Icons";
import { Link } from "react-router-dom";

function Sidebar({ click, setClick }) {
  return (
    <div
      className={`sidebar__wrapper ${click ? "mobile_show" : "mobile_hide"}`}
    >
      <div className="sidebar__header">
        <div className="sidebar__logo">
          <Link to={config.routes.home}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div
          className="delete-mobile-icon mobile_show"
          onClick={() => setClick(false)}
        >
          <DeleteIcon />
        </div>
      </div>
      <Menu>
        <MenuItem title="Home" icon={<HomeIcon />} to={config.routes.home} />
        <MenuItem
          title="Products"
          icon={<ProductIcon />}
          to={config.routes.products}
        ></MenuItem>
        <MenuItem
          title="Customers"
          icon={<CustomerIcon />}
          to={config.routes.customers}
        />
        <MenuItem title="Shop" icon={<ShopIcon />} to={config.routes.shop} />
        <MenuItem
          title="Income"
          icon={<IncomeIcon />}
          to={config.routes.income}
        />
        <MenuItem
          title="Promote"
          icon={<PromoteIcon />}
          to={config.routes.promote}
        />
      </Menu>
    </div>
  );
}

export default Sidebar;
