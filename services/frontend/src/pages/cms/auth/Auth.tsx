import React from "react";

import { Grid, Box, AppBar, Tabs, Tab, Paper, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

import SwipeableViews from "react-swipeable-views";

import AuthForm, { EAuthFormTab, authFormTitles } from "./Form";
import { blue } from "@mui/material/colors";

interface TabPanelProps {
  children: React.ReactNode;
  currentIndex: number;
  index: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, currentIndex, index } = props;
  const classes = useStyles();

  return <div hidden={currentIndex !== index}>{currentIndex === index && <Box p={3}>{children}</Box>}</div>;
};

export const Auth: React.FC = () => {
  const classes = useStyles();

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleChangeTab = (event: React.ChangeEvent<{}>, index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Grid className={classes.root} container justifyContent="center" alignItems="center">
      <Grid item xs={12} md={6} lg={4}>
        <Paper elevation={4} className={classes.content}>
          <AppBar className={classes.appBar} position="static" color="default" elevation={2}>
            <Tabs
              value={currentIndex}
              onChange={handleChangeTab}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label={authFormTitles[EAuthFormTab.LOGIN]} />
              <Tab label={authFormTitles[EAuthFormTab.REGISTER]} />
              <Tab style={{ display: "none" }} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            className={classes.tabContent}
            index={currentIndex}
            onChangeIndex={(index) => handleChangeTab(null, index)}
          >
            <TabPanel currentIndex={currentIndex} index={0}>
              <AuthForm tab={EAuthFormTab.LOGIN} onChangeTab={(index) => handleChangeTab(null, index)} />
            </TabPanel>
            <TabPanel currentIndex={currentIndex} index={1}>
              <AuthForm tab={EAuthFormTab.REGISTER} onChangeTab={(index) => handleChangeTab(null, index)} />
            </TabPanel>
            <TabPanel currentIndex={currentIndex} index={2}>
              <AuthForm tab={EAuthFormTab.FORGOT_PASSWORD} onChangeTab={(index) => handleChangeTab(null, index)} />
            </TabPanel>
          </SwipeableViews>
        </Paper>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {
      height: "100vh",
    },
    backgroundImage: `linear-gradient( to top right, ${blue[800]}, ${blue[200]});`,
  },
  content: {
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      borderRadius: theme.shape.borderRadius,
    },
  },
  tabContent: {
    [theme.breakpoints.down("sm")]: {
      flex: 1,
    },
    minHeight: 450,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));
