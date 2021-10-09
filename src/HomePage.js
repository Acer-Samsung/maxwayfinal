import React from 'react';
import { Grid} from "@material-ui/core";
import {useStyles} from "./Components/Classes";
import Header from "./Components/Header";

const HomePage = () => {
    const classes = useStyles();
    return (
        <>

        <div className={classes.containerFluid}>
            <Grid container justifyContent={"center"}>
                <Grid item lg={12} md={12} sm={12}>
                    {/* <Navbar /> */}
                    <Header/>
                    {/* <Main/> */}

                </Grid>
            </Grid>
            <div className={classes.BG}/>  
        </div>
    {/* <Footer/> */}
        </>
    );
};

export default HomePage;