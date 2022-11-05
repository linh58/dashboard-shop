import React, { useState, useEffect } from "react";
import { ColumnShowIcon, RowShowIcon } from "~/components/Icons";
import TitleBlock from "~/components/TitleBlock";
import "./Products.scss";
import productList from "~/assets/fakeData/productData";
import usePagination from "~/hooks/usePagination";
import { Pagination } from "@mui/material";
import ProductList from "./ProductList";
import SearchBox from "~/components/Search";
import Message from "~/components/Message";

function Products() {
  const [prodList, setProdList] = useState([]);
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");

  const pageSize = 10;
  const count = Math.ceil(prodList.length / pageSize);
  const pageData = usePagination(prodList, pageSize);

  useEffect(() => {
    setProdList(productList);
  }, []);

  const handleChangePage = (e, page) => {
    setPage(page);
    pageData.jump(page);
  };

  const handleChangeSearchValue = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="product__wrapper">
      <h1 className="product__title">Products</h1>
      <div className="product__content">
        <div className="product__heading">
          <div className="product__heading-left">
            <TitleBlock
              title="Products"
              style={{ backgroundColor: "var(--purple-block-title)" }}
            />
            <div className="product__search">
              <SearchBox
                placeholder="Search product"
                onChange={handleChangeSearchValue}
                value={searchInput}
                className="product__search-input"
              />
            </div>
          </div>
          <div className="product__heading-right">
            <div className="column-show product__heading-show">
              <ColumnShowIcon />
            </div>
            <div className="row-show product__heading-show">
              <RowShowIcon />
            </div>
          </div>
        </div>
        <div className="product__list-container">
          <ProductList
            prodList={prodList}
            setProdList={setProdList}
            pageData={pageData}
            searchInput={searchInput}
          />

          <Pagination
            className="pagination"
            count={count}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChangePage}
          />
        </div>
      </div>
      {/* <Message prodList={prodList} /> */}
    </div>
  );
}

export default Products;
