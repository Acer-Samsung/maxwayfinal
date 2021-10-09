import React from "react";
import Navbar from "./Navbar";
import { useStyles } from "./Classes";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import BurgerImg from "../assets/img/BurgerTransparent.png";
import PizzaImg1 from "../assets/img/pizzaTransparent.png";
import ClabSandwich from "../assets/img/ClabSandwich.png";
import Fire from "../assets/img/olov.png";
import Rocket from "../assets/img/raketa.png";

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.Header}>
      <Navbar />

      <section className={classes.headersection} id={"Header"}>
        <Grid container>
          <Grid item xs={1} md={1} lg={1} xl={1} />
          <Grid item xs={12} md={12} lg={11} xl={12}>
            <Box className={classes.flexbox}>
              <Grid xs={12} md={12} lg={12} xl={12}  className={classes.gridseven}>
                <Box className={classes.Burgerimg}>
                  <img src={BurgerImg} className={classes.hamburger} alt="" />
                </Box>
              </Grid>
              <Grid xs={12} sm={12} md={10} lg={10} xl={10}>
                <Typography className={classes.HeaderTitle}>
                  Siz izlagan mazali ta'mlar
                </Typography>

                <Box >
                  <Typography className={classes.desc}>
                    When an unknown printer took a galley of type scrambled it
                    to make a type specimen
                  </Typography>
                </Box>

                <Box  className={classes.allcard}>
                  <Card className={classes.CustomCard}>
                    <CardActions style={{ padding: "15px" }}>
                      <Button
                        variant={"text"}
                        style={{
                          borderRadius: "19px",
                          background: "rgba(255, 255, 255, 0.3)",
                          textTransform: "none",
                          display: "flex",
                          alignItems: "flex-end",
                        }}
                      >
                        <img src={Fire} style={{ marginRight: "5px" }} alt="" />
                        Yangi
                      </Button>
                    </CardActions>
                    <CardContent>
                      <Box display={"flex"} justifyContent={"space-around"}>
                        <Box ml={2} mr={-2}>
                          <Typography>
                            <pre
                              className={classes.pitsa}
                            >
                              PIT <br /> -SA
                            </pre>
                          </Typography>
                        </Box>

                        <Box>
                          <img className={classes.cornerpic2} src={PizzaImg1} alt="" />
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>

                  <Card className={classes.CustomCard}>
                    <CardActions style={{ padding: "15px" }}>
                      <Button
                        className={classes.cardbutton}
                        variant={"text"}
                      >
                        <img
                          src={Rocket}
                          style={{ marginRight: "10px" }}
                          alt=""
                        />
                        Ko'p sotilgan
                      </Button>
                    </CardActions>
                    <CardContent>
                      <Box display={"flex"} justifyContent={"space-around"}>
                        <Box ml={2} mr={-2}>
                          <Typography>
                            <pre
                              className={classes.pitsa2}
                            >
                              KOM <br /> -BO
                            </pre>
                          </Typography>
                        </Box>

                        <Box >
                          <img className={classes.cornerpic} src={ClabSandwich} alt="" />
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
              <Grid xs={7} className={classes.grid7}>
                <Box className={classes.Burgerimg}>
                  <img src={BurgerImg} className={classes.hamburger} alt="" />
                </Box>
              </Grid>
            </Box>
          </Grid>
          {/* <Grid item xs={0} lg={1} xl={1} /> */}
        </Grid>
      </section>
    </div>
  );
};

export default Header;
