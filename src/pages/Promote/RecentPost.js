import { MenuItem, Select } from "@mui/material";
import React from "react";
import { useState } from "react";
import TitleBlock from "~/components/TitleBlock";

function RecentPost() {
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

  const handleChangeTime = (event) => {
    setTime(event.target.value);
  };
  return (
    <div className="promote__recent-post">
      <div className="recent__post-heading">
        <TitleBlock
          title="Recent post"
          style={{ backgroundColor: "var(--blue-block-title)" }}
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
    </div>
  );
}

export default RecentPost;
