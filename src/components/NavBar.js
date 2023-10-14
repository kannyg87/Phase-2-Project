// import { NavLink } from "react-router-dom";
// import "./NavBar.css";

// /* define the NavBar component */
// function NavBar() {
//   return (
//     <nav>
//       <NavLink
//         to="/"
//         /* add styling to Navlink */
//         className="nav-link"
//       >
//         Home
//       </NavLink>
//       <NavLink
//         to="/about"
//         className="nav-link"
//       >
//         About
//       </NavLink>
//       <NavLink
//         to="/login"
//         className="nav-link"
//       >
//         Login
//       </NavLink>
//       <NavLink
//         to="/profile"
//         className="nav-link"
//       >
//         Profile
//       </NavLink>
//     </nav>
//   );
// };

// export default NavBar;
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Login from '../pages/Login';
import Home from '../pages/Home';

function CustomTabPanel(props) {
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
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Login"  {...a11yProps(0)} />
          <Tab label="Home"   {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Login />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Home />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}