import React from "react";
import { Link } from "react-router-dom";
import "./UserInfo.scss";
import routes from "~/config/routes";
import {
  AffiliateIcon,
  AnalyticsIcon,
  RowShowIcon,
  UpgradeIcon,
} from "~/components/Icons";

function UserInfo({ userInfoClick }) {
  return (
    <div
      className={`user__info-container ${
        userInfoClick ? "user__info-show" : "user__info-hide"
      }`}
    >
      <ul className="user__info-list">
        <li className="user__info-item" style={{ marginBottom: "8px" }}>
          <Link className="user__info-item-link" to={routes.shop}>
            <span className="user__info-item--text">Profile</span>
          </Link>
        </li>
        <hr
          className="divider"
          style={{
            borderColor: "rgba(0, 0, 0, 0.12)",
            borderStyle: "solid",
            height: "1px",
          }}
        ></hr>
        <div className="user__info-groupitems">
          <li className="user__info-item">
            <Link className="user__info-item-link" to="">
              <div className="user__info-item-wrap">
                <div className="user__info-item--icon">
                  <AnalyticsIcon />
                </div>
                <span className="user__info-item--text">Analytics</span>
              </div>
            </Link>
          </li>
          <li className="user__info-item">
            <Link className="user__info-item-link" to="">
              <div className="user__info-item-wrap">
                <div className="user__info-item--icon">
                  <AffiliateIcon />
                </div>
                <span className="user__info-item--text">Affiliate center</span>
              </div>
            </Link>
          </li>
          <li className="user__info-item">
            <Link className="user__info-item-link" to="">
              <div className="user__info-item-wrap">
                <div className="user__info-item--icon">
                  <RowShowIcon />
                </div>
                <span className="user__info-item--text">Explore authors</span>
              </div>
            </Link>
          </li>
        </div>
        <hr
          className="divider"
          style={{
            borderColor: "rgba(0, 0, 0, 0.12)",
            borderStyle: "solid",
            height: "1px",
          }}
        ></hr>
        <div className="user__info-groupitems">
          <li className="user__info-item">
            <Link className="user__info-item-link" to="">
              <div className="user__info-item-wrap">
                <div className="user__info-item--icon">
                  <UpgradeIcon />
                </div>
                <span className="user__info-item--text">Upgrade to Pro</span>
              </div>
            </Link>
          </li>
        </div>
        <hr
          className="divider"
          style={{
            borderColor: "rgba(0, 0, 0, 0.12)",
            borderStyle: "solid",
            height: "1px",
          }}
        ></hr>
        <div className="user__info-groupitems">
          <li className="user__info-item">
            <Link className="user__info-item-link" to="#">
              <span className="user__info-item--text">Account Settings</span>
            </Link>
          </li>
          <li className="user__info-item">
            <Link className="user__info-item-link" to="#">
              <span className="user__info-item--text">Logout</span>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default UserInfo;
