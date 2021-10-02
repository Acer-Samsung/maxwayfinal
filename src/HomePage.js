import React from 'react';
import {useStyles} from "./Components/Classes";
import Footer from "./Components/Footer";
import {Grid} from "@material-ui/core";
import Header from "./Components/Header";
import Main from "./Components/Main";

const HomePage = () => {
    const classes = useStyles();
    return (
        <>

        <div className={classes.containerFluid}>




                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Header/>
                    <Main/>

                </Grid>


            {/*<div className={classes.BG}/>*/}
        </div>
    <Footer/>
        </>
    );
};

export default HomePage;