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

function ProductButton({ name, h }) {
  const [color, setColor] = useState("dark");
  function changeColor() {
    if (color === "dark") {
      setColor("success");
    } else if (color === "success") {
      setColor("error");
    } else {
      setColor("dark");
    }
  }
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
      sx={{ fontSize: h + ".fontSize" }}
      onClick={() => changeColor()}
    >
      {name}
    </MKBox>
  );
}

// Setting default props for the ExampleCard
ProductButton.defaultProps = {
  name: "",
  h: "h6",
};

// Typechecking props for the ExampleCard
ProductButton.propTypes = {
  name: PropTypes.string,
  h: PropTypes.string,
};

export default ProductButton;
