import React from 'react';
import {Box, Button, Grid, Typography} from "@material-ui/core";
import {useStyles} from "./Classes";
import BigPhone from "../assets/img/bigPhone.png"
import {Apple, Copyright, Facebook, Instagram, LinkedIn, Shop, Telegram, YouTube} from "@material-ui/icons";
import {MaxWayIcon} from "../assets/CustomIcons";
import {List,ListItemText,ListItem}from "@material-ui/core"


const Footer = () => {

    const classes = useStyles();

    return (
        <section className={classes.Footer} id={"Footer"} style={{marginTop: "68px"}}>

            <div className={classes.containerFluid}>
                <Grid container justifyContent={"center"}>
                    <Grid item lg={12} md={12} sm={12}>
                        <Grid container>
                            <Grid item xs={1} lg={0} xl={0}/>
                            <Grid item xs={10} lg={10} xl={10}>
                                <Box id={"FooterPart1"} mt={"75px"} className={classes.FooterBox}>
                                    <Grid xs={8}>
                                        <Typography
                                            style={{color: "#fff", fontSize: "52px", lineHeight: "63px", fontWeight: "bold"}}>
                                            Mobil ilovamiz <br/>
                                            orqali buyurtma <br/>
                                            berish yanada osonroq
                                        </Typography>

                                        <Box my={9} className={classes.FooterBox} width={"70%"}>
                                            <Button variant={"outlined"} color={"secondary"} style={{textTransform:"none",width:"250px",height:"80px",borderRadius:"46px"}}>
                                                <Box width={"62%"} alignItems={"center"} className={classes.FooterBox}><Shop fontSize={"large"}/><Typography variant={"h6"}>GooglePlay</Typography></Box>
                                            </Button>
                                            <Button variant={"outlined"} color={"secondary"} style={{textTransform:"none",width:"250px",height:"80px",borderRadius:"46px"}}>
                                                <Box width={"55%"} alignItems={"center"} className={classes.FooterBox}><Apple fontSize={"large"}/><Typography variant={"h6"}>AppStore</Typography></Box>
                                            </Button>
                                        </Box>
                                    </Grid>
                                    <Grid xs={4}>
                                        <img className={classes.bigPhone} src={BigPhone} alt=""/>
                                    </Grid>

                                </Box>
                                <Box id={"FooterPart2"} mt={"93px"} alignItems={"start"} className={[classes.FooterBox]}>
                                    <Grid xs={2}><MaxWayIcon/></Grid>
                                    <Grid xs={2}>
                                        <List>
                                            <ListItem disablePadding>
                                                <Button style={{textTransform:"none"}}>
                                                    <ListItemText primary="Asosiy" />
                                                </Button>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <Button style={{textTransform:"none"}} component="a" href="#simple-list">
                                                    <ListItemText primary="Kompaniya haqida" />
                                                </Button>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <Button style={{textTransform:"none"}} component="a" href="#simple-list">
                                                    <ListItemText primary="Filiallar" />
                                                </Button>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <Button style={{textTransform:"none"}} component="a" href="#simple-list">
                                                    <ListItemText primary="Bolalar uchun" />
                                                </Button>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                    <Grid xs={2}>
                                        <List>
                                            <ListItem disablePadding>
                                                <Button style={{textTransform:"none"}}>
                                                    <ListItemText primary="Qo'shimcha" />
                                                </Button>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <Button style={{textTransform:"none"}} component="a" href="#simple-list">
                                                    <ListItemText primary="Menu" />
                                                </Button>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <Button style={{textTransform:"none"}} component="a" href="#simple-list">
                                                    <ListItemText primary="Bonusli karta" />
                                                </Button>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <Button style={{textTransform:"none"}} component="a" href="#simple-list">
                                                    <ListItemText primary="Bu qanday ishlaydi" />
                                                </Button>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                    <Grid xs={2}/>
                                    <Grid xs={4}>
                                        <Typography variant={"h6"} style={{fontWeight:"700"}} >Biz bilan aloqa</Typography>
                                        <Typography variant={"h6"} style={{fontWeight:"700",fontSize:"25px",marginTop:"33px"}} >(+998 71) 200-54-00</Typography>
                                        <Typography variant={"h6"} style={{fontWeight:"300",opacity:"0.7",marginTop:"15px"}} >100011, Toshkent sh. Shayxontohur tumani,
                                            Zarqaynar ko’chasi, 3B-uy</Typography>
                                    </Grid>
                                </Box>
                                <Box className={classes.End}>
                                    <Box mt={1} className={classes.FooterBox}>
                                        <Box alignItems={"center"} display={"flex"} width={150} style={{opacity:"0.7"}}><Copyright/>Rahmatulloh 2021</Box>
                                        <Box alignItems={"center"} width={200} justifyContent={"space-between"} display={"flex"} style={{opacity:"0.7"}}>
                                            <YouTube/>
                                            <Instagram/>
                                            <Telegram/>
                                            <Facebook/>
                                            <LinkedIn/>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={1} lg={1} xl={1}/>

                        </Grid>
                    </Grid>
                </Grid>

            </div>

        </section>
    );
};

export default Footer;