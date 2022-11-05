import React, { useState } from "react";
import { CaculatorIcon, EditIcon, RemoveIcon } from "~/components/Icons";
import "~/pages/Products/Products.scss";
import CustomeCheckBox from "~/components/CustomeCheckBox";

function ProductList({ prodList, setProdList, pageData, searchInput }) {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(prodList.map((list) => list.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleCheckBoxClick = (event, productId) => {
    const { checked } = event.target;
    setIsCheck([...isCheck, productId]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== productId));
      setIsCheckAll(false);
    }
  };

  const handleDeleteProduct = (productId) => {
    const newProductList = prodList.filter((list) => list.id !== productId);
    setProdList(newProductList);
  };

  return (
    <table className="product__list">
      <thead className="product__list-heading product__list-table">
        <tr>
          <th className="product__item-checkbox">
            <CustomeCheckBox
              type="checkbox"
              name="selectAll"
              id="selectAll"
              handleClick={handleSelectAll}
              isChecked={isCheckAll}
            />
          </th>
          <th className="product__item-name">
            <span>Product</span>
          </th>
          <th className="product__item-price">
            <span>Price</span>
          </th>
          <th className="product__item-edited item__edited-bigfont">
            <span>Last edited</span>
          </th>
        </tr>
      </thead>
      <tbody className="product__list-body product__list-table">
        {pageData
          .currentData()
          .filter((productItem) =>
            productItem.title
              .toLowerCase()
              .includes(searchInput.toLowerCase().trim())
          )
          .map((productItem) => (
            <tr className="product__item-box" key={productItem.id}>
              <th className="product__item-checkbox">
                <CustomeCheckBox
                  type="checkbox"
                  name="selectItem"
                  id="selectItem"
                  handleClick={(e) => handleCheckBoxClick(e, productItem.id)}
                  isChecked={isCheck.includes(productItem.id)}
                />
              </th>
              <th className="product__item-name">
                <div className="item__name-wrapper">
                  <div className="item__name-image">
                    <img src={productItem.image} alt={productItem.title} />
                  </div>
                  <div className="item__name-content">
                    <p className="item__name-title">{productItem.title}</p>
                    <p className="item__name-link">
                      https://dramatic-tent.inf…
                    </p>
                  </div>
                </div>
              </th>
              <th className="product__item-price">
                <div className="item__price-detail">
                  <span>${productItem.price}</span>
                </div>
              </th>
              <th className="product__item-edited">
                <div className="item__edited-wrapper">
                  <span>{productItem.timeEdited}</span>
                  <div className="item__edited-actions">
                    <div className="item__edited-action">
                      <CaculatorIcon />
                    </div>
                    <div className="item__edited-action">
                      <EditIcon />
                    </div>
                    <div
                      className="item__edited-action"
                      onClick={() => handleDeleteProduct(productItem.id)}
                    >
                      <RemoveIcon />
                    </div>
                  </div>
                </div>
              </th>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default ProductList;
