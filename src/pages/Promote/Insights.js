import { MenuItem, Select, Tooltip, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import {
  DownModeIcon,
  InsightCommentIcon,
  InsightEngagementIcon,
  InsightLinkIcon,
  InsightPeopleIcon,
  UpModeIcon,
} from "~/components/Icons";
import TitleBlock from "~/components/TitleBlock";
import smallDescription from "~/assets/images/description.svg";
import "./Promote.scss";

function Insights() {
  const [time, setTime] = useState("one-week");

  const dataSelectOverView = [
    {
      label: "Last 7 days",
      value: "Last 7 days",
    },
    {
      label: "Last 14 days",
      value: "Last 14 days",
    },
    {
      label: "Last 21 days",
      value: "Last 21 days",
    },
  ];

  const listStaticData = [
    {
      icon: <InsightPeopleIcon />,
      title: "People reached",
      numberStatic: "256K",
      mode: "up",
      numberal: "41.0%",
      titleMode: "this week",
    },
    {
      icon: <InsightEngagementIcon />,
      title: "Engagement",
      numberStatic: "1.2x",
      mode: "up",
      numberal: "41.0%",
      titleMode: "this week",
    },
    {
      icon: <InsightCommentIcon />,
      title: "Comments",
      numberStatic: "128",
      mode: "down",
      numberal: "41.0%",
      titleMode: "this week",
    },
    {
      icon: <InsightLinkIcon />,
      title: "Link clicks",
      numberStatic: "80",
      mode: "up",
      numberal: "41.0%",
      titleMode: "this week",
    },
  ];

  const handleChangeTime = (event) => {
    setTime(event.target.value);
  };
  return (
    <div className="promote__insight">
      <div className="insight__heading">
        <TitleBlock
          title="Insights"
          style={{ backgroundColor: "var(--orange-block-title)" }}
        />
        <Select
          variant="outlined"
          sx={{
            m: 1,
            minWidth: 140,
            height: 40,
            fontSize: 14,
            borderRadius: 3,
            fontWeight: 600,
            color: "rgb(111, 118, 126)",
          }}
          value={time}
          onChange={handleChangeTime}
          data={dataSelectOverView}
          displayEmpty
          // inputProps={{ "aria-label": "Without label" }}
          inputProps={{ MenuProps: { disableScrollLock: true } }}
        >
          <MenuItem
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: "rgb(111, 118, 126)",
            }}
            value="one-week"
          >
            Last 7 days
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: "rgb(111, 118, 126)",
            }}
            value="two-weeks"
          >
            Last 14 days
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: "rgb(111, 118, 126)",
            }}
            value="three-weeks"
          >
            Last 21 days
          </MenuItem>
        </Select>
      </div>
      <div className="insight__blocks">
        {listStaticData.map((item, index) => (
          <div className="insight__block" key={index}>
            <div className="insight__block-container">
              <div className="insight__block-icon">{item.icon}</div>
              <div className="insight__block-content">
                <div className="insight__block-title">
                  <span>{item.title}</span>
                  <Tooltip
                    title={
                      <Typography fontSize={11}>small description</Typography>
                    }
                    placement="top-start"
                  >
                    <img src={smallDescription} alt="Small Description" />
                  </Tooltip>
                </div>
                <div className="insight__block-number">{item.numberStatic}</div>
                <div className="insight__block-mode">
                  <span className="block__mode-icon">
                    {item.mode === "up" ? <UpModeIcon /> : <DownModeIcon />}
                  </span>
                  <span
                    className="block__mode-numberal"
                    style={
                      item.mode === "up"
                        ? { color: "rgb(131, 191, 110)" }
                        : { color: "rgb(255, 106, 85)" }
                    }
                  >
                    {item.numberal}
                  </span>
                  <span className="block__mode-mode">{item.titleMode}</span>
                </div>
              </div>
            </div>
            {(index + 1) % 4 !== 0 && (
              <hr
                className="divider"
                style={{
                  position: "absolute",
                  height: "100%",
                  top: "0px",
                  borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
                  left: "100%",
                }}
              ></hr>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Insights;
