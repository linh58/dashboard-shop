import React from "react";
import Button from "~/components/Button";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "~/components/Icons";
import TitleBlock from "~/components/TitleBlock";
import "~/pages/Home/Home.scss";

function GetMore(props) {
  return (
    <div className="home__content-more home__left-general">
      <TitleBlock
        title="Get more customers"
        style={{
          backgroundColor: "var(--blue-block-title)",
        }}
      />
      <p className="home__more-heading">
        50% of new customers explore products because the author sharing the
        work on the social media network. Gain your earnings right now! 🔥
      </p>
      <div className="home__more-btns">
        <Button className="home__more-btn">
          <FacebookIcon className="home__more-icon" />
          <p>facebook</p>
        </Button>
        <Button className="home__more-btn">
          <TwitterIcon className="home__more-icon" />
          <p>twitter</p>
        </Button>
        <Button className="home__more-btn">
          <InstagramIcon className="home__more-icon" />
          <p>instagram</p>
        </Button>
      </div>
    </div>
  );
}

export default GetMore;
