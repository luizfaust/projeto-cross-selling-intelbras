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
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Custom Components
import CategoryBox from "../components/CategoryBox";
import FamilyBox from "../components/FamilyBox";

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
          <Grid container item xs={12} justifyContent="space-evenly" alignItems="center">
            <CategoryBox
              categoria="Fonte de alimentação|Comentario"
              produtos={[
                "Colmeia|Detalhes sobre comeia",
                "Fonte nobreak",
                "Muiltisaida",
                "Wall mount",
              ]}
              mtop={10}
              mbot={0}
            />
            <CategoryBox
              categoria="Protetor eletrônico"
              produtos={[
                "Adaptador eletrônico",
                "Filtro ativo de isolamento de tensão",
                "Protetor 4 tomadas",
                "Protetor 5 tomadas",
                "Protetor 8 tomadas",
              ]}
              mtop={0}
            />
            <CategoryBox
              categoria="Conector"
              produtos={[
                "BNC - Conector borne",
                "BNC - Conector mola",
                "P4 - Macho Fast",
                "P4 - Macho",
                "P4 - Fêmea",
              ]}
              mtop={10}
              mbot={0}
            />
            <CategoryBox
              categoria="Balun"
              produtos={[
                "Power Balun com alimentação",
                "Power Balun",
                "Power Balun de 1 canal",
                "Balun com alimentação 1 canal",
                "Balun Passivo",
              ]}
            />

            <FamilyBox nome="Camera analogica" />

            <CategoryBox categoria="Microfone" produtos={["Série 1000", "Série 3000"]} />

            <CategoryBox categoria="Caixa de Passagem" produtos={["Vbox plástico", "Box metal"]} />

            <CategoryBox
              categoria="DVR"
              produtos={["Série 500", "Série 1000", "Série 3000", "Série 5000"]}
            />
            <CategoryBox categoria="Cabos" produtos={["Coaxial Bipolar", "Par trançado"]} />

            <Grid item xs={4} justifyContent="space-evenly">
              <CategoryBox
                cxs={12}
                categoria="No Break"
                produtos={["Interativo", "Senoidal", "Online"]}
              />
              <CategoryBox cxs={12} categoria="Multibox" produtos={["Sim"]} />
            </Grid>
            <Grid item xs={4} justifyContent="space-evenly">
              <CategoryBox cxs={12} categoria="HD" produtos={["Purple", "Purple Pro", "Gold"]} />
              <CategoryBox
                cxs={12}
                categoria="Comunicação HDMI"
                produtos={[
                  "Multivisualizador HDMI",
                  "Multiplicador HDMI",
                  "Divisor HDMI",
                  "Extensor HDMI",
                  "Extensor KVM HDMI",
                  "Extensor de vídeo HDMI",
                ]}
              />
            </Grid>
            <Grid item xs={2}></Grid>
            <CategoryBox
              categoria="Extensores"
              produtos={[
                "Extensor USB (dados)",
                "Extensor de vídeo e áudio",
                "Extensor KVM (Vídeo e dados)",
              ]}
            />
            <CategoryBox
              categoria="Mesa de controle"
              produtos={["Mesa controladora", "Mesa controladora híbrida"]}
            />
            <Grid item xs={2}></Grid>
          </Grid>
          <Grid container item xs={12} justifyContent="space-evenly" alignItems="center">
            <Grid item xs={10}></Grid>
            <Grid item xs={2}>
              <MKButton variant="gradient" color="success" size="large" fullWidth>
                Salvar&nbsp;<Icon>save</Icon>
              </MKButton>
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
