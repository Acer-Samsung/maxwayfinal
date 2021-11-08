import React from 'react';
import {Box, Button, Grid, Typography} from "@material-ui/core";
import {useStyles} from "./Classes";
import BigPhone from "../assets/img/bigPhone.png"
import {Apple, Copyright, Facebook, Instagram, LinkedIn, Shop, Telegram, YouTube} from "@material-ui/icons";
import {MaxWayIcon} from "../assets/CustomIcons";
import {List, ListItemText, ListItem} from "@material-ui/core"

const Footer = () => {

    const classes = useStyles();

    return (
        <section className={classes.Footer} id={"Footer"} style={{marginTop: "98px"}}>

            <div className={classes.containerFluid}>
                <Grid container justifyContent={"center"}>
                    <Grid item xl={1} lg={1} md={1} sm={1} xs={1}/>
                    <Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
                        <Box id={"FooterPart1"} mt={"75px"} className={classes.FooterBoxMain}>
                            <Grid className={classes.Article} item xs={12} sm={12} md={8} lg={8} xl={8}>
                                <Typography className={classes.FooterArticle}>
                                    Mobil ilovamiz <br/>
                                    orqali buyurtma <br/>
                                    berish yanada osonroq</Typography>
                                <Box className={classes.FooterBox}>
                                    <Button variant={"outlined"} component={"div"} color={"secondary"}
                                            className={classes.FooterButton}>
                                        <Box width={"62%"} alignItems={"center"} className={classes.FooterBoxIn}>
                                            <Shop fontSize={"large"}/><Typography variant={"h6"}>GooglePlay</Typography>
                                        </Box>
                                    </Button>

                                    <Button variant={"outlined"} component={"div"} color={"secondary"}
                                            className={classes.FooterButton}>
                                        <Box width={"55%"} alignItems={"center"} className={classes.FooterBoxIn}>
                                            <Apple fontSize={"large"}/><Typography variant={"h6"}>AppStore</Typography></Box>
                                    </Button>
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                <Box style={{
                                    display: "flex",
                                    justifyContent: "center"
                                }}>
                                    <img className={classes.bigPhone} src={BigPhone} alt=""/>
                                </Box>
                            </Grid>

                            <Grid item className={classes.Article} xs={12} sm={12} md={8} lg={8} xl={8}>
                                <Typography className={classes.FooterArticle}>
                                    Mobil ilovamiz <br/>
                                    orqali buyurtma <br/>
                                    berish yanada osonroq</Typography>
                                <Box className={classes.FooterBox}>
                                    <Button variant={"outlined"} component={"div"} color={"secondary"}
                                            className={classes.FooterButton}>
                                        <Box width={"62%"} alignItems={"center"} className={classes.FooterBoxIn}>
                                            <Shop fontSize={"large"}/><Typography variant={"h6"}>GooglePlay</Typography>
                                        </Box>
                                    </Button>

                                    <Button variant={"outlined"} component={"div"} color={"secondary"}
                                            className={classes.FooterButton}>
                                        <Box width={"55%"} alignItems={"center"} className={classes.FooterBoxIn}>
                                            <Apple fontSize={"large"}/><Typography variant={"h6"}>AppStore</Typography></Box>
                                    </Button>
                                </Box>
                            </Grid>

                        </Box>


                        <Box id={"FooterPart2"} mt={"103px"} alignItems={"start"} className={[classes.FooterBoxMain,classes.BeforeEnd]}>
                            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}><MaxWayIcon/></Grid>
                            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                                <List>
                                    <ListItem key={"1"} disablePadding>
                                        <Button style={{textTransform: "none"}}>
                                            <ListItemText primary="Asosiy"/>
                                        </Button>
                                    </ListItem>
                                    <ListItem key={"2"} disablePadding>
                                        <Button style={{textTransform: "none"}} component="a" href="#simple-list">
                                            <ListItemText primary="Kompaniya haqida"/>
                                        </Button>
                                    </ListItem>
                                    <ListItem key={"3"} disablePadding>
                                        <Button style={{textTransform: "none"}} component="a" href="#simple-list">
                                            <ListItemText primary="Filiallar"/>
                                        </Button>
                                    </ListItem>
                                    <ListItem key={"4"} disablePadding>
                                        <Button style={{textTransform: "none"}} component="a" href="#simple-list">
                                            <ListItemText primary="Bolalar uchun"/>
                                        </Button>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                                <List>
                                    <ListItem key={"5"} disablePadding>
                                        <Button style={{textTransform: "none"}}>
                                            <ListItemText primary="Qo'shimcha"/>
                                        </Button>
                                    </ListItem>
                                    <ListItem key={"6"} disablePadding>
                                        <Button style={{textTransform: "none"}} component="a" href="#simple-list">
                                            <ListItemText primary="Menu"/>
                                        </Button>
                                    </ListItem>
                                    <ListItem key={"7"} disablePadding>
                                        <Button style={{textTransform: "none"}} component="a" href="#simple-list">
                                            <ListItemText primary="Bonusli karta"/>
                                        </Button>
                                    </ListItem>
                                    <ListItem key={"8"} disablePadding>
                                        <Button style={{textTransform: "none"}} component="a" href="#simple-list">
                                            <ListItemText primary="Bu qanday ishlaydi"/>
                                        </Button>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}/>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                <Typography variant={"h6"} style={{fontWeight: "700"}}>Biz bilan aloqa</Typography>
                                <Typography variant={"h6"}
                                            style={{fontWeight: "700", fontSize: "25px", marginTop: "33px"}}>(+998 71)
                                    200-54-00</Typography>
                                <Typography variant={"h6"}
                                            style={{fontWeight: "300", opacity: "0.7", marginTop: "15px"}}>100011,
                                    Toshkent sh. Shayxontohur tumani,
                                    Zarqaynar ko’chasi, 3B-uy</Typography>
                            </Grid>
                        </Box>
                        <Box className={classes.End}>
                            <Box mt={1} className={classes.FooterBox} style={{width:"100%"}}>
                                <Box alignItems={"center"} display={"flex"} width={150}
                                     style={{opacity: "0.7"}}><Copyright/>Rahmatulloh 2021</Box>
                                <Box alignItems={"center"} width={200} justifyContent={"space-between"} display={"flex"}
                                     style={{opacity: "0.7"}}>
                                    <YouTube/>
                                    <Instagram/>
                                    <Telegram/>
                                    <Facebook/>
                                    <LinkedIn/>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xl={1} lg={1} md={1} sm={1} xs={1}/>
                </Grid>

            </div>

        </section>
    );
};

export default Footer;