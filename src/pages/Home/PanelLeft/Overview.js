import React, { useState } from "react";
import { MenuItem, Select } from "@mui/material";
import TitleBlock from "~/components/TitleBlock";
import "~/pages/Home/Home.scss";
import BoxComponent from "~/components/BoxPanel";

function Overview() {
  const [time, setTime] = useState("all");

  const dataSelectOverView = [
    {
      label: "All time",
      value: "All time",
    },
    {
      label: "In a year",
      value: "In a year",
    },
    {
      label: "Per month",
      value: "Per month",
    },
  ];

  const handleChangeTime = (event) => {
    setTime(event.target.value);
  };

  return (
    <div className="home__content-overview home__left-general">
      <div className="home__overview-heading">
        <TitleBlock
          title="Overview"
          style={{
            backgroundColor: "var(--orange-block-title)",
          }}
        />
        <Select
          variant="outlined"
          sx={{
            m: 1,
            minWidth: 120,
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
            value="all"
          >
            All time
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: "rgb(111, 118, 126)",
            }}
            value="a-year"
          >
            In a year
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: "rgb(111, 118, 126)",
            }}
            value="per-month"
          >
            Per month
          </MenuItem>
        </Select>
      </div>
      <div className="home__overview-boxtab">
        <BoxComponent handleChangeTime={handleChangeTime} />
      </div>
    </div>
  );
}

export default Overview;
