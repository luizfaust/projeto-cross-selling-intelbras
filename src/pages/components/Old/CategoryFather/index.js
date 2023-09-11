/* eslint-disable react/jsx-key */
/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import { useState } from "react";

// @mui material components
// Material Kit 2 React components
import MKBox from "components/MKBox";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function CategoryFather({ pai }) {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabType = (event, newValue) => setActiveTab(newValue);

  return (
    <Grid item xs={4} key={pai}>
      <Grid container justifyContent="center">
        <Grid item>
          <MKBox
            color="white"
            bgColor="dark"
            variant="gradient"
            borderRadius={40}
            shadow="lg"
            opacity={1}
            width={386}
            p={2}
            m={2}
            textAlign="center"
          >
            <h4>{pai}</h4>
            <Grid container item justifyContent="center" xs={8} lg={6} mx="auto">
              <AppBar position="static">
                <Tabs value={activeTab} onChange={handleTabType}>
                  <Tab label="Não" />
                  <Tab label="Sim" />
                </Tabs>
              </AppBar>
            </Grid>
          </MKBox>
        </Grid>
      </Grid>
    </Grid>
  );
}

// Setting default props
CategoryFather.defaultProps = {
  pai: "Pai",
};

// Typechecking props
CategoryFather.propTypes = {
  pai: PropTypes.string,
};

export default CategoryFather;
