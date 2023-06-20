import * as React from "react";
import PropTypes from "prop-types";
import { Tabs as MUITabs } from "@mui/material";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const TabPanel = (props) => {
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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const Tabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <MUITabs
          value={value}
          onChange={handleChange}
          aria-label="basic Tabs example"
          centered
        >
          <Tab label="Profile" {...a11yProps(0)} sx={{ marginRight: "50px" }} />
          <Tab
            label="About"
            {...a11yProps(1)}
            sx={{ marginRight: "50px", marginLeft: "50px" }}
          />
          <Tab
            label="Skills"
            {...a11yProps(2)}
            sx={{ marginRight: "50px", marginLeft: "50px" }}
          />
          <Tab label="Projects" {...a11yProps(3)} sx={{ marginLeft: "50px" }} />
        </MUITabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item 4
      </TabPanel>
    </Box>
  );
};

export default Tabs;
