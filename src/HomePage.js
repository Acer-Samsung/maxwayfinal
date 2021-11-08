import React from 'react';
import Footer from "./Components/Footer";
import {Grid} from "@material-ui/core";
// import Header from "./Components/Header";
import Main from "./Components/Main";
import {useStyles} from "./Components/ClassesAhroraka";
import HeaderAhroraka from "./Components/HeaderAhroraka";

const HomePage = () => {
    const classes = useStyles();

    return (
        <div>

            <div className={classes.containerFluid}>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <HeaderAhroraka/>
                    <Main/>
                </Grid>

                <div className={classes.BG}/>
            </div>
            <Footer/>
        </div>
    );
};

export default HomePage;