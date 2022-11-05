import React, { useState } from "react";
import { MenuItem, Select } from "@mui/material";
import TitleBlock from "~/components/TitleBlock";
import "~/pages/Home/Home.scss";
import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { faker } from "@faker-js/faker";

function ProductView() {
  const [day, setDay] = useState("week");
  const labels = ["22", "23", "24", "25", "26", "27", "28"];

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const handleChangeDay = (event) => {
    setDay(event.target.value);
  };

  const data = React.useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "Product view",
          data: labels.map(() => faker.datatype.number({ min: 5, max: 30 })),
          backgroundColor: "#2A85FF",
          barPercentage: 0.7,
          borderRadius: 4,
        },
      ],
    }),
    [handleChangeDay]
  );

  const options = {
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      crosshair: false,
    },
    scales: {
      y: {
        grid: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false,
        },
        ticks: {
          stepSize: 5,
          suggestedMin: 5,
        },
      },
    },
  };

  const dataSelectTime = [
    {
      label: "Last 7 days",
      value: "Last 7 days",
    },
    {
      label: "This month",
      value: "This month",
    },
    {
      label: "All time",
      value: "All time",
    },
  ];

  return (
    <div className="home__content-product home__left-general">
      <div className="home__product-heading">
        <TitleBlock
          title="Product Views"
          style={{
            backgroundColor: "var(--purple-block-title)",
          }}
        />
        <Select
          data={dataSelectTime}
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
          value={day}
          defaultValue="Last 7 days"
          onChange={handleChangeDay}
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
            value="week"
          >
            Last 7 days
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: "rgb(111, 118, 126)",
            }}
            value="month"
          >
            This month
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: "rgb(111, 118, 126)",
            }}
            value="all-time"
          >
            All time
          </MenuItem>
        </Select>
      </div>
      <div className="home__product-chart">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default ProductView;
