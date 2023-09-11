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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Custom Components
import ProductButton from "../ProductButton2";

// Material Kit 2 React examples
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";

function Crossselling() {
  return (
    <>
      <MKBox
        minHeight="25vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Projeto Cross-Selling
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Container>
          <Grid container item xs={12} justifyContent="space-evenly">
            <Grid item xs={10} justifyContent="space-evenly">
              <ProductButton name="Fonte de alimentação" h="h4" />
            </Grid>
            <Grid container justifyContent="space-evenly">
              <Grid item>
                <ProductButton name="Colmeia" />
              </Grid>
              <Grid item>
                <ProductButton name="Fonte nobreak" />
              </Grid>
              <Grid item>
                <ProductButton name="Multisaída" />
              </Grid>
              <Grid item>
                <ProductButton name="Wall mount" />
              </Grid>
            </Grid>

            <Grid item xs={12} justifyContent="space-evenly">
              <hr />
            </Grid>

            <Grid item xs={10}>
              <ProductButton name="Protetor eletrônico" h="h4" />
            </Grid>
            <Grid container justifyContent="space-evenly">
              <Grid item>
                <ProductButton name="Adaptador eletrônico" />
              </Grid>
              <Grid item>
                <ProductButton name="Filtro ativo de isolamento de tensão" />
              </Grid>
              <Grid item>
                <ProductButton name="Protetor 4 tomadas" />
              </Grid>
              <Grid item>
                <ProductButton name="Protetor 5 tomadas" />
              </Grid>
              <Grid item>
                <ProductButton name="Protetor 8 tomadas" />
              </Grid>
            </Grid>

            <Grid item xs={12} justifyContent="space-evenly">
              <hr />
            </Grid>

            <Grid item xs={12}>
              <Grid container justifyContent="center">
                <Grid item>
                  <ProductButton name="Conector" h="h4" />
                </Grid>
              </Grid>
              <Grid container justifyContent="space-evenly">
                <Grid item>
                  <ProductButton name="BNC - Conector borne" />
                </Grid>
                <Grid item>
                  <ProductButton name="BNC - Conector mola" />
                </Grid>
                <Grid item>
                  <ProductButton name="P4 - Macho Fast" />
                </Grid>
                <Grid item>
                  <ProductButton name="P4 - Macho" />
                </Grid>
                <Grid item>
                  <ProductButton name="P4 - Fêmea" />
                </Grid>
              </Grid>
              <hr />
            </Grid>

            <Grid item xs={10}>
              <ProductButton name="Balun" h="h4" />
            </Grid>
            <Grid container justifyContent="space-evenly">
              <Grid item>
                <ProductButton name="Power Balun com alimentação" />
              </Grid>
              <Grid item>
                <ProductButton name="Power Balun de 1 canal" />
              </Grid>
              <Grid item>
                <ProductButton name="Balun com alimentação 1 canal" />
              </Grid>
              <Grid item>
                <ProductButton name="Power Balun" />
              </Grid>
              <Grid item>
                <ProductButton name="Balun Passivo" />
              </Grid>
            </Grid>

            <Grid item xs={12} justifyContent="space-evenly">
              <hr />
            </Grid>
          </Grid>
        </Container>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Crossselling;
