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
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MKButton from "components/MKButton";
import Tooltip from "@mui/material/Tooltip";

function CategoryBox({ categoria, produtos, xs }) {
  const produtosSplit = produtos.split(",");

  const [product, setProduct] = useState("Selecione");
  const [dropdown, setDropdown] = useState(null);

  const openDropdown = ({ currentTarget }) => setDropdown(currentTarget);
  const closeDropdown = () => setDropdown(null);

  const [color, setColor] = useState("dark");

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

  const listProdutos = produtosSplit.map((produto) => (
    <Tooltip title={"Dica do " + produto} placement="right">
      <MenuItem
        onClick={() => {
          closeDropdown();
          setColor("success");
          setProduct(produto);
        }}
      >
        {produto}
      </MenuItem>
    </Tooltip>
  ));

  return (
    <Grid item xs={xs} key={categoria}>
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
            sx={{ fontSize: "h4" }}
          >
            <h4>{categoria}</h4>
            <MKButton variant="gradient" color={color} onClick={openDropdown} key={categoria}>
              {product} <Icon sx={dropdownIconStyles}>expand_more</Icon>
            </MKButton>
            <Menu anchorEl={dropdown} open={Boolean(dropdown)} onClose={closeDropdown}>
              <Tooltip title="Nenhum produto" placement="right">
                <MenuItem
                  onClick={() => {
                    closeDropdown();
                    setColor("error");
                    setProduct("Nenhuma");
                  }}
                >
                  Nenhuma
                </MenuItem>
              </Tooltip>
              {listProdutos}
            </Menu>
          </MKBox>
        </Grid>
      </Grid>
    </Grid>
  );
}

// Setting default props for the ExampleCard
CategoryBox.defaultProps = {
  categoria: "Pai",
  produtos: "Filho",
  xs: 4,
};

// Typechecking props for the ExampleCard
CategoryBox.propTypes = {
  categoria: PropTypes.string,
  produtos: PropTypes.string,
  xs: PropTypes.int,
};

export default CategoryBox;
