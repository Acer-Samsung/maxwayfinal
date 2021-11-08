import React from "react";
import {
    AppBar,
    Box,
    Grid,
    IconButton,
    Toolbar,
    Typography,
    Modal,
    Backdrop,
} from "@material-ui/core";
import { useStyles } from "./ClassesAhroraka";
import { MaxWayIcon } from "../assets/CustomIcons";
import { CallOutlined, LocalMall } from "@material-ui/icons";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    minWidth: 150,
    bgcolor: "background.paper",
    borderRadius: "30px",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirecttion: "column",
    justifyContent: "center",
    alignItems: "space-around",
};

const NavbarAhroraka = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const classes = useStyles();
    return (
        <AppBar position={"static"} elevation={0} color={"transparent"}>
            <Box my={2}>
                <Toolbar>
                    <Grid  classname={classes.fullnavbar} container>
                        {/* <Grid item xs={1} lg={0} xl={0} /> */}
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Box className={classes.navWrapper}>
                                <IconButton className={classes.customIconButton}>
                                    <MaxWayIcon />
                                </IconButton>
                                <Box className={classes.menu}>
                                    <Typography>
                                        <Link to={"/"} className={classes.Links}>
                                            Menyu
                                        </Link>
                                    </Typography>
                                    <Typography>
                                        <Link to={"/"} className={classes.Links}>
                                            Bolalar uchun
                                        </Link>
                                    </Typography>
                                    <Typography>
                                        <Link to={"/"} className={classes.Links}>
                                            Filiallar
                                        </Link>
                                    </Typography>
                                </Box>
                                <Box className={classes.NavContainer}>
                                    <Box className={classes.NavNumber}>
                                        <CallOutlined color={"primary"} />
                                        <Typography className={classes.textWhite}>
                                            (+99871)
                                            <span className={classes.TextSpan}>
                        <br />
                        200-54-00
                      </span>
                                        </Typography>
                                    </Box>

                                    <Box
                                        display={"flex"}
                                        width={156}
                                        justifyContent={"space-evenly"}
                                        alignItems={"center"}
                                    >
                                        <LocalMall color={"primary"} />
                                        <Typography variant={"h5"} className={classes.textWhite}>
                                            Korzina
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box
                                    className={classes.burgericon}
                                    onClick={handleOpen}
                                    style={{ cursor: "pointer" }}
                                >
                                    <MenuIcon></MenuIcon>
                                </Box>
                                <Modal
                                    className={classes.modalall}
                                    open={open}
                                    onClose={handleClose}
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                        timeout: 500,
                                    }}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography
                                            id="transition-modal-description"
                                            sx={{ mt: 2 }}
                                        >
                                            <Typography>
                                                <Link to={"/"} className={classes.modalLinks}>
                                                    Menyu
                                                </Link>
                                            </Typography>
                                            <Typography>
                                                <Link to={"/"} className={classes.modalLinks}>
                                                    Bolalar uchun
                                                </Link>
                                            </Typography>
                                            <Typography>
                                                <Link to={"/"} className={classes.modalLinks}>
                                                    Filiallar
                                                </Link>
                                            </Typography>
                                            <Box className={classes.modalNavNumber}>
                                                <CallOutlined color={"primary"} />
                                                <Typography className={classes.modaltextWhite}>
                                                    (+99871)
                                                    <span className={classes.modalTextSpan}>
                            {/* <br /> */}
                                                        200-54-00
                          </span>
                                                </Typography>
                                            </Box>
                                        </Typography>
                                    </Box>
                                </Modal>
                            </Box>
                        </Grid>
                        {/* <Grid item xs={1} lg={1} xl={1} /> */}
                    </Grid>
                </Toolbar>
            </Box>
        </AppBar>
    );
};

export default NavbarAhroraka;
