import React from "react";
import Button from "~/components/Button";
import { CommentIcon, HeartIcon, MessageIcon } from "~/components/Icons";
import TitleBlock from "~/components/TitleBlock";
import { userImage1, userImage2, userImage3 } from "~/constants/imageAssets";
import "~/pages/Home/Home.scss";

function Comment(props) {
  return (
    <div className="home__content-comment home__right-general">
      <TitleBlock
        title="Comments"
        style={{ backgroundColor: "var(--orange-block-title)" }}
      />
      <div className="home__comment-list">
        <div className="home__comment-item">
          <div className="comment__item-img">
            <img src={userImage1} alt="" />
          </div>
          <div className="comment__item-detail">
            <div className="comment__item-info">
              <div className="comment__item-name">
                <span>
                  <b>elthe</b>
                  @elthe
                </span>
                <span className="comment__item-online">0.5h</span>
              </div>
              <p>
                On <b>Smiles - 3D icons</b>
              </p>
              <p>Gate work</p>
            </div>
            <div className="comment__item-actions">
              <MessageIcon width="2rem" />
              <HeartIcon />
              <CommentIcon />
            </div>
          </div>
        </div>
        <hr
          className="divider"
          style={{
            borderColor: "rgba(0, 0, 0, 0.12)",
            borderStyle: "solid",
            height: "1px",
          }}
        ></hr>
        <div className="home__comment-item">
          <div className="comment__item-img">
            <img src={userImage2} alt="" />
          </div>
          <div className="comment__item-detail">
            <div className="comment__item-info">
              <div className="comment__item-name">
                <span>
                  <b>elthe</b>@elthe
                </span>
                <span className="comment__item-online">0.5h</span>
              </div>
              <p>
                On <b>Smiles - 3D icons</b>
              </p>
              <p>Gate work</p>
            </div>
            <div className="comment__item-actions">
              <MessageIcon width="2rem" />
              <HeartIcon />
              <CommentIcon />
            </div>
          </div>
        </div>
        <hr
          className="divider"
          style={{
            borderColor: "rgba(0, 0, 0, 0.12)",
            borderStyle: "solid",
            height: "1px",
          }}
        ></hr>
        <div className="home__comment-item">
          <div className="comment__item-img">
            <img src={userImage3} alt="" />
          </div>
          <div className="comment__item-detail">
            <div className="comment__item-info">
              <div className="comment__item-name">
                <span>
                  <b>elthe</b>@elthe
                </span>
                <span className="comment__item-online">0.5h</span>
              </div>
              <p>
                On <b>Smiles - 3D icons</b>
              </p>
              <p>Gate work</p>
            </div>
            <div className="comment__item-actions">
              <MessageIcon width="2rem" />
              <HeartIcon />
              <CommentIcon />
            </div>
          </div>
        </div>
        <hr
          className="divider"
          style={{
            borderColor: "rgba(0, 0, 0, 0.12)",
            borderStyle: "solid",
            height: "1px",
          }}
        ></hr>
        <div className="home__comment-button">
          <Button className="comment-btn">View All</Button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
