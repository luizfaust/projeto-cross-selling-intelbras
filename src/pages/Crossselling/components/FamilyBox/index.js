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

// @mui material components
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function FamilyBox({ nome }) {
  return (
    <Grid item xs={4} key={nome}>
      <Grid container justifyContent="center">
        <Grid item>
          <MKBox
            color="white"
            bgColor="success"
            variant="gradient"
            shadow="lg"
            opacity={1}
            width={386}
            height={200}
            borderRadius={100}
            p={2}
            m={2}
          >
            <MKTypography
              mt={7}
              textAlign="center"
              verticalAlign="middle"
              color="white"
              fontWeight="bold"
              variant="h2"
            >
              {nome}
            </MKTypography>
          </MKBox>
        </Grid>
      </Grid>
    </Grid>
  );
}

// Setting default props for the ExampleCard
FamilyBox.defaultProps = {
  nome: "Intelbras",
};

// Typechecking props for the ExampleCard
FamilyBox.propTypes = {
  nome: PropTypes.string,
};

export default FamilyBox;
