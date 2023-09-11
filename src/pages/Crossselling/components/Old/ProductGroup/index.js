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
//import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
//import Card from "@mui/material/Card";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
// import { useState } from "react";

// @mui material components
// Material Kit 2 React components
// import MKBox from "components/MKBox";
import ProductButton from "../ProductButton2";

function ProductGroup({ categoria, produtos }) {
  const produtosSplit = produtos.split(",");
  const listProdutos = produtosSplit.map((produto) => (
    <Grid item>
      <ProductButton name={produto} h="h6" />
    </Grid>
  ));
  return (
    <Grid item xs={12}>
      <Grid container justifyContent="center">
        <Grid item>
          <ProductButton name={categoria} h="h4" />
        </Grid>
      </Grid>
      <Grid container justifyContent="space-evenly">
        {listProdutos}
      </Grid>
      <hr />
    </Grid>
  );
}

// Setting default props for the ExampleCard
ProductGroup.defaultProps = {
  categoria: "Pai",
  produtos: "Filho",
};

// Typechecking props for the ExampleCard
ProductGroup.propTypes = {
  categoria: PropTypes.string,
  produtos: PropTypes.string,
};

export default ProductGroup;
