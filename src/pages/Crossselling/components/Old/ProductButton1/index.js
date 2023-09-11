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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import { useState } from "react";

// @mui material components
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

function ProductButton({ name }) {
  const [color, setColor] = useState("dark");
  return (
    <MKBox
      color="white"
      bgColor={color}
      variant="gradient"
      borderRadius="lg"
      shadow="lg"
      opacity={1}
      p={2}
      m={2}
      textAlign="center"
      justifyContent="space-between"
      display="flex"
    >
      <MKButton
        size="small"
        variant="gradient"
        color="error"
        circular="true"
        sx={{ marginRight: "auto" }}
        onClick={() => setColor("error")}
      >
        -
      </MKButton>
      {name}
      <MKButton
        size="small"
        variant="gradient"
        color="success"
        circular="true"
        sx={{ marginLeft: "auto" }}
        onClick={() => setColor("success")}
      >
        +
      </MKButton>
    </MKBox>
  );
}

// Setting default props for the ExampleCard
ProductButton.defaultProps = {
  name: "",
};

// Typechecking props for the ExampleCard
ProductButton.propTypes = {
  name: PropTypes.string,
};

export default ProductButton;
