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
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MKButton from "components/MKButton";

function ProductButton({ name, h }) {
  const [dropdown, setDropdown] = useState(null);
  const [product, setProduct] = useState(null);

  const openDropdown = ({ currentTarget }) => setDropdown(currentTarget);
  const closeDropdown = () => setDropdown(null);

  const newProduct = ({ currentTarget }) => setProduct(currentTarget);

  // Styles
  const iconStyles = {
    ml: 1,
    fontWeight: "bold",
    transition: "transform 200ms ease-in-out",
  };

  const dropdownIconStyles = {
    transform: dropdown ? "rotate(180deg)" : "rotate(0)",
    ...iconStyles,
  };

  return (
    <MKBox
      color="white"
      bgColor="dark"
      variant="gradient"
      borderRadius="lg"
      shadow="lg"
      opacity={1}
      p={2}
      m={2}
      textAlign="center"
      sx={{ fontSize: h + ".fontSize" }}
    >
      <MKButton variant="gradient" color="info" onClick={openDropdown}>
        Dropdown <Icon sx={dropdownIconStyles}>expand_more</Icon>
      </MKButton>
      <Menu anchorEl={dropdown} open={Boolean(dropdown)} onClose={closeDropdown}>
        <MenuItem onClick={closeDropdown}>Action</MenuItem>
        <MenuItem onClick={closeDropdown}>Another action</MenuItem>
        <MenuItem onClick={closeDropdown}>Something else here</MenuItem>
      </Menu>
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
