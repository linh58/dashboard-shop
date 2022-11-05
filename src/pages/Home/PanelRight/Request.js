import React from "react";
import Button from "~/components/Button";
import { TrashIcon } from "~/components/Icons";
import TitleBlock from "~/components/TitleBlock";

function Request(props) {
  return (
    <div className="home__content-request home__right-general">
      <TitleBlock
        title="Refund requests"
        style={{ backgroundColor: "var(--orange-block-title)" }}
      />
      <div className="home__request-container">
        <div className="home__request-detail">
          <div className="home__request-delete">
            <TrashIcon className="request__icon" />
          </div>
          <p className="home__request-notification">
            You have <b>52 open refund request</b> to action. This includes{" "}
            <b>8 new requests.</b> 👀
          </p>
        </div>
        <div className="home__request-button">
          <Button className="request-btn">Review refund requests</Button>
        </div>
      </div>
    </div>
  );
}

export default Request;
