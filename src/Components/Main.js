import React, {useState} from 'react';
import {
    Box, Card, CardActions, CardContent, CardMedia,
    Grid, IconButton,
    Tab,
    Tabs,
    Typography
} from "@material-ui/core";
import PropTypes from "prop-types";
import {useStyles} from "./Classes";
import {Database} from "./Database";
import {Add, Remove} from "@material-ui/icons";

const Main = () => {

    function TabPanel(props) {
        const {children, value, index, ...other} = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box className={classes.TabPanel}>
                        <div>{children}</div>
                    </Box>
                )}
            </div>
        );
    }

    function LinkTab(props) {
        return (
            <Tab
                component="a"
                onClick={(event) => {
                    event.preventDefault();
                }}
                {...props}
            />
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    var [sum, setSum] = useState(0);
    var [bucket, setBucket] = useState([]);

    const MapFunction = (Type) => {

        const addCost = (item) => {
            bucket.push({
                id: item.id,
                type: item.type,
                title: item.title,
                titleImg: item.titleImg,
                description: item.description,
                price: item.price,
                imgSrc: item.imgSrc
            })
            sum = 0;
            setSum(sum)
            for (let i = 0; i < bucket.length; i++) {
                sum += bucket[i].price;
                setSum(sum);
            }
            console.log(bucket)
        }

        const removeCost = (item) => {
            for (let i = 0; i < bucket.length; i++) {
                if (item.id === bucket[i].id) {
                    sum -= bucket[i].price;
                    setSum(sum);
                    bucket.splice(i, 1);
                    break;
                }
            }

            console.log(bucket)

        }

        /*

        xs, extra-small: 0px
        sm, small: 600px
        md, medium: 900px
        lg, large: 1200px
        xl, extra-large: 1536px

        */

        return (
            <>
                <Typography variant={"h2"}>{Type}</Typography>
                <div className={classes.MapWrapper}>
                    {Database.map((item) => {
                        if (Type === item.type) {
                            return (

                                    <Card elevation className={classes.CustomCards}>
                                        <CardMedia>
                                            <img src={`${item.imgSrc}`} className={classes.CustomCardsImg}
                                                 alt="imgSrcNotFound"/>
                                        </CardMedia>
                                        <Box display={"flex"} flexDirection={"column"}>
                                            <CardContent>
                                                <Box mb={1}>
                                                    <Box display={"flex"} alignItems={"start"}
                                                         justifyContent={"center"}>
                                                        <Typography style={{
                                                            marginBottom: "8px",
                                                            fontWeight: "bold"
                                                        }} variant={"h5"}>{item.title}</Typography>
                                                        <img style={{marginLeft: "10px"}}
                                                             src={`${item.titleImg}`} alt=""/>
                                                    </Box>

                                                    <Typography style={{
                                                        fontSize: "14px",
                                                        opacity: "0.4"
                                                    }}>{item.description}</Typography>
                                                </Box>
                                            </CardContent>
                                            <CardActions className={classes.CardActionsPC}>
                                                <Box display={"flex"} ml={1} width={"100%"}
                                                     justifyContent={"space-between"} alignItems={"center"}>
                                                    <IconButton
                                                        className={classes.IconButton}
                                                        onClick={() => removeCost(item)}><Remove/>
                                                    </IconButton>
                                                    <Typography variant={"h5"}>{item.price} UZS</Typography>
                                                    <IconButton
                                                        style={{backgroundColor: "yellowgreen"}}
                                                        className={classes.IconButton}
                                                        onClick={() => addCost(item)}><Add/>
                                                    </IconButton>


                                                </Box>
                                            </CardActions>
                                        </Box>
                                        <CardActions className={classes.CardActionsMobile}>
                                            <Box display={"flex"} width={"100%"}
                                                 justifyContent={"space-between"} alignItems={"center"}>
                                                <IconButton
                                                    className={classes.IconButton}
                                                    onClick={() => removeCost(item)}><Remove/>
                                                </IconButton>
                                                <Typography variant={"h5"}>{item.price} UZS</Typography>
                                                <IconButton
                                                    style={{backgroundColor: "yellowgreen"}}
                                                    className={classes.IconButton}
                                                    onClick={() => addCost(item)}><Add/>
                                                </IconButton>


                                            </Box>
                                        </CardActions>
                                    </Card>

                            )
                        }
                        return ''
                    })}
                </div>
            </>)
    }


    return (
        <section id={"Main"} style={{marginTop: "68px"}}>
            <Grid container justifyContent={"center"}>
                <Grid xs={0} sm={0} md={0} lg={1} xl={1}/>
                <Grid xs={10} sm={10} md={10} lg={10} xl={10}>

                    <Box className={classes.MenuWrapper}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant={"scrollable"}
                            centered
                            scrollButtons={"auto"}
                        >
                            <Tab className={classes.Tab} label="Barchasi"/>
                            <Tab className={classes.Tab} label="Pitsa"/>
                            <Tab className={classes.Tab} label="Burger"/>
                            <Tab className={classes.Tab} label="Kombo"/>
                            <Tab className={classes.Tab} label="Salatlar"/>
                            <Tab className={classes.Tab} label="Ichimliklar"/>
                        </Tabs>
                        <Typography className={classes.Total}>Ja'mi: {sum}so'm</Typography>
                    </Box>

                    <TabPanel value={value} index={0}>

                        <Box id={"Pizza"} display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"}>

                            {() => MapFunction("Pitsa")}
                        </Box>
                        <Box id={"Burger"} display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"}>

                            {() => MapFunction("Burger")}
                        </Box>
                        <Box id={"Kombo"} display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"}>

                            {() => MapFunction("Kombo")}
                        </Box>
                        <Box id={"Salat"} display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"}>

                            {() => MapFunction("Salat")}
                        </Box>
                        <Box id={"Ichimlik"} display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"}>

                            {() => MapFunction("Ichimlik")}
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Box id={"Pizza"} display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"}>
                            {/*<Mapper type={"Pizza"}/>*/}
                            {() => MapFunction("Pitsa")}
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Box id={"Burger"} display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"}>
                            {/*<Mapper type={"Burger"}/>*/}
                            {() => MapFunction("Burger")}
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Box id={"Kombo"} display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"}>
                            {/*<Mapper type={"Kombo"}/>*/}
                            {() => MapFunction("Kombo")}
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <Box id={"Salat"} display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"}>
                            {/*<Mapper type={"Salat"}/>*/}
                            {() => MapFunction("Salat")}
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        <Box id={"Ichimlik"} display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"}>
                            {/*<Mapper type={"Ichimlik"}/>*/}
                            {() => MapFunction("Ichimlik")}
                        </Box>
                    </TabPanel>

                </Grid>
                <Grid xs={0} sm={0} md={0} lg={1} xl={1}/>

            </Grid>
        </section>
    );
};

export default Main;