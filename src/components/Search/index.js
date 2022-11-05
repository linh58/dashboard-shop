import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SearchIcon } from "~/components/Icons";
import "./Search.scss";

function SearchBox({ placeholder, commandF, onChange, value, className }) {
  return (
    <div className="search__input">
      <div className="search__input-icon">
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
      />
      {commandF ? (
        <div className="search__loading">
          ⌘ F
          <FontAwesomeIcon
            icon={faXmark}
            className="search__delete-icon"
            style={{ display: "none" }}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SearchBox;
