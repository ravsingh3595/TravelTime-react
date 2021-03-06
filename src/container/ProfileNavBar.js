import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Reviews from "../component/Reviews";
//icons
import RateReview from '@material-ui/icons/RateReview';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import InsertComment from '@material-ui/icons/InsertComment';
import History from '@material-ui/icons/History';
import ThumbUp from '@material-ui/icons/ThumbUp';

//Tab components
import PersonalDetails from "../component/PersonalDetails";

import fire from "../Firebase/Firebase";
import ReviewCard from "../component/ReviewCard"
import { profileData } from "../dummyData";

var data;

var ref = fire.database().ref("reviews");


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  React.useEffect(() => {
    ref.on("value", function(snapshot) {
      // console.log(snapshot)
      snapshot.forEach(function(childSnapshot) {
      var allData = childSnapshot.val();
      data = {
        ...data, allData
      }
      console.log(data);
      });
    });
  });

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  tabContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
          className={classes.tabContainer}
        >
          <Tab label="Personal Details" icon={<PersonPinIcon />} {...a11yProps(0)} />
          {/* <Tab label="Blogs" icon={<InsertComment />} {...a11yProps(3)} /> */}
          <Tab label="Reviews" icon={<RateReview />} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <PersonalDetails/>
      </TabPanel>
      {/* <TabPanel value={value} index={1}>
        Item Two
      </TabPanel> */}
      <TabPanel value={value} index={1}>
        <Reviews/>
        
      </TabPanel>
      
    </div>
  );
}

