import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BoxItem from "./BoxItem";
import Button from "~/components/Button";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import {
  ArrowRightIcon,
  OverviewCustomerIcon,
  OverviewIncomeIcon,
} from "~/components/Icons";
import { userImage1, userImage2, userImage3 } from "~/constants/imageAssets";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BoxPanel({ handleChangeTime }) {
  const [value, setValue] = useState(0);
  const labels = ["Apr", "May", "Jun", "July", "Aug", "Sep"];

  // const dataOverView = [
  //   {
  //     title: "Customers",
  //     icon: <OverviewCustomerIcon />,
  //     quantity: Math.floor(Math.random() * 3000 + 1000),
  //     numberal: (Math.random() * 100).toFixed(1),
  //   },
  //   {
  //     title: "Income",
  //     icon: <OverviewIncomeIcon />,
  //     quantity: Math.floor(Math.random() * 3000 + 1000),
  //     numberal: (Math.random() * 100).toFixed(1),
  //   },
  // ];

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
          display: true,
        },
        ticks: {
          stepSize: 500,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const data = React.useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "Earning",
          data: labels.map(() => faker.datatype.number({ min: 0, max: 2000 })),
          lineTension: 0.4,
          borderWidth: 4,
          pointRadius: 0,
        },
      ],
    }),
    [handleChangeTime]
  );

  return (
    <div>
      <Tabs
        indicatorColor={""}
        value={value}
        onChange={handleChangeTab}
        aria-label="basic tabs example"
        className="box__panel-container"
        sx={{
          "& button.Mui-selected": {
            backgroundColor: "var(--white)",
            color: "#000",
          },
        }}
      >
        <Tab
          label={
            <BoxItem
              icon={<OverviewIncomeIcon />}
              title="Customers"
              quantity="2207"
              numberal="47.2"
            />
          }
          {...a11yProps(0)}
        />
        <Tab
          label={
            <BoxItem
              icon={<OverviewCustomerIcon />}
              title="Income"
              quantity="1265"
              numberal="71.8"
            />
          }
          {...a11yProps(1)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="panel__customer-message">
          <p>
            Welcome <b>857 customers</b> with a personal message 😎
          </p>
          <Button>Send message</Button>
        </div>
        <span className="panel__customer-list">
          <span className="panel__customer-item">
            <img src={userImage1} alt="userAvatar" />
            <p>Gladyce</p>
          </span>
          <span className="panel__customer-item">
            <img src={userImage2} alt="userAvatar" />
            <p>Joyce</p>
          </span>
          <span className="panel__customer-item">
            <img src={userImage3} alt="userAvatar" />
            <p>Joyce</p>
          </span>
          <div className="panel__customer-button">
            <button className="panel__customer-viewall">
              <ArrowRightIcon />
            </button>
            <p>View all</p>
          </div>
        </span>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Line options={options} data={data} />
      </TabPanel>
    </div>
  );
}

export default BoxPanel;
