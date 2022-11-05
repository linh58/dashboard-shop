import React from "react";
import TitleBlock from "~/components/TitleBlock";
import Button from "~/components/Button";
import {
  productImage1,
  productImage2,
  productImage3,
  productImage4,
} from "~/constants/imageAssets";

function Popular(props) {
  return (
    <div className="home__content-popular home__right-general">
      <TitleBlock
        title="Popular products"
        style={{ backgroundColor: "var(--blue-block-title)" }}
      />
      <div className="home__popular-title">
        <p>Products</p>
        <p>Earning</p>
      </div>
      <hr
        className="divider"
        style={{
          marginBottom: "5px",
          borderStyle: "solid",
          height: "1px",
          borderColor: "rgba(0, 0, 0, 0.12)",
        }}
      ></hr>
      <div className="polular__product-list">
        <div className="popular__product-item">
          <div className="product__info">
            <div className="product__info-img">
              <img src={productImage2} alt="Crypter - NFT UI kit" />
            </div>
            <p className="product__info-name">Crypter - NFT UI kit</p>
          </div>
          <div className="product__quantity">
            <p>$259,011</p>
            <div className="product__status product__status--active">
              <span>Active</span>
            </div>
          </div>
        </div>
        <div className="popular__product-item">
          <div className="product__info">
            <div className="product__info-img">
              <img src={productImage4} alt="Bento Matte 3D illustration 1.0" />
            </div>
            <p className="product__info-name">
              Bento Matte 3D illustration 1.0
            </p>
          </div>
          <div className="product__quantity">
            <p>$5,901</p>
            <div className="product__status product__status--deactive">
              <span>Deactive</span>
            </div>
          </div>
        </div>
        <div className="popular__product-item">
          <div className="product__info">
            <div className="product__info-img">
              <img src={productImage3} alt="Excellent material 3D chair" />
            </div>
            <p className="product__info-name">Excellent material 3D chair</p>
          </div>
          <div className="product__quantity">
            <p>$1,200</p>
            <div className="product__status product__status--active">
              <span>Active</span>
            </div>
          </div>
        </div>
        <div className="popular__product-item">
          <div className="product__info">
            <div className="product__info-img">
              <img src={productImage1} alt="Fleet - travel shopping kit" />
            </div>
            <p className="product__info-name">Fleet - travel shopping kit</p>
          </div>
          <div className="product__quantity">
            <p>$80,001</p>
            <div className="product__status product__status--deactive">
              <span>Deactive</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home__popular-btn">
        <Button className="product-btn">All products</Button>
      </div>
    </div>
  );
}

export default Popular;
