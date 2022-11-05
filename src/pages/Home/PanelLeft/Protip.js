import React from "react";
import TitleBlock from "~/components/TitleBlock";
import {
  AssetBackIcon,
  BehindTheSceneIcon,
  EarlyAccessIcon,
  ExclusiveDownloadIcon,
  UpdateIcon,
  UseGuildLineIcon,
} from "~/components/Icons";
import "~/pages/Home/Home.scss";
import { userImage1, userImage2, userImage3 } from "~/constants/imageAssets";

function Protip(props) {
  return (
    <div className="home__content-tips home__left-general">
      <TitleBlock
        title="Pro tips"
        style={{
          backgroundColor: "var(--light-green-block-title)",
        }}
      />
      <p className="home__tip-heading">Need some ideas for the next product?</p>
      <div className="home__tip-list">
        <div className="home__tip-left">
          <div className="home__tip-item">
            <div className="tip__item-icon">
              <EarlyAccessIcon />
            </div>
            <div className="tip__item-detail">
              <p>Early access</p>
              <div className="info__tip">
                <span
                  className="info__tip-label"
                  style={{ backgroundColor: "var(--purple-block-title)" }}
                >
                  New
                </span>
                <span className="info__tip-time">
                  <img src={userImage1} alt="" />3 mins read
                </span>
              </div>
            </div>
          </div>
          <div className="home__tip-item">
            <div className="tip__item-icon">
              <ExclusiveDownloadIcon />
            </div>
            <div className="tip__item-detail">
              <p>Exclusive downloads</p>
              <span className="info__tip-time">
                <img src={userImage2} alt="" />3 mins read
              </span>
            </div>
          </div>
          <div className="home__tip-item">
            <div className="tip__item-icon">
              <UseGuildLineIcon />
            </div>
            <div className="tip__item-detail">
              <p>Asset use guidelines</p>
              <div className="info__tip">
                <span
                  className="info__tip-label"
                  style={{ backgroundColor: "var(--purple-block-title)" }}
                >
                  New
                </span>
                <span className="info__tip-time">
                  <img src={userImage2} alt="" />3 mins read
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home__tip-right">
          <div className="home__tip-item">
            <div className="tip__item-icon">
              <AssetBackIcon />
            </div>
            <div className="tip__item-detail">
              <p>Asset use guidelines</p>
              <div className="info__tip">
                <span
                  className="info__tip-label"
                  style={{ backgroundColor: "var(--light-green-block-title)" }}
                >
                  Small label
                </span>
                <span className="info__tip-time">
                  <img src={userImage3} alt="" />3 mins read
                </span>
              </div>
            </div>
          </div>
          <div className="home__tip-item">
            <div className="tip__item-icon">
              <BehindTheSceneIcon />
            </div>
            <div className="tip__item-detail">
              <p>Behind the scenes</p>
              <div className="info__tip">
                <span
                  className="info__tip-label"
                  style={{ backgroundColor: "var(--orange-block-title)" }}
                >
                  Hot
                </span>
                <span className="info__tip-time">
                  <img src={userImage2} alt="" />3 mins read
                </span>
              </div>
            </div>
          </div>
          <div className="home__tip-item">
            <div className="tip__item-icon">
              <UpdateIcon />
            </div>
            <div className="tip__item-detail">
              <p>Life & work updates</p>
              <span className="info__tip-time">
                <img src={userImage1} alt="" />3 mins read
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Protip;
