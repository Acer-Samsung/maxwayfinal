import {makeStyles} from "@material-ui/core";

// var width = (window.innerWidth > 0) ? window.innerWidth : "hello";

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    containerFluid: {
        maxWidth: "1365px",
        margin: "0 auto",
        backgroundColor: "transparent",

        '@media (max-width:1364px)': {
            width: "90vw"
        }
    },
    customIconButton: {
        padding: 0,
        marginLeft: "-5px"
    },
    Header: {
        width: "100%",
        height: "801px",
        backgroundImage: "linear-gradient(to right,transparent 58%,purple 1%)",
    },
    textWhite: {
        color: "#FFF"
    },
    BG: {
        position: "absolute",
        width: "auto",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        backgroundImage: "linear-gradient(to right,transparent 58%,purple 1%)",
        zIndex: "-1",
        height: "801px",
    },
    Links: {
        textDecoration: "none",
        color: "black",
        fontFamily: "Sans-Serif !important",
        '&:hover': {
            textDecoration: "none",
            transform: "scale(1.1)",
        }
    },
    HeaderTitle: {
        // fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: "79px",
        lineHeight: "85px"
    },
    CustomCard: {
        width: "255px",
        height: "200px",
        borderRadius: "12px",
        '&:nth-child(1)': {
            background: "linear-gradient(315.49deg, #FFC85C 1.32%, #F1B301 96.68%)",
        },
        '&:nth-child(2)': {
            background: "#800A7A",
            marginLeft: "30px"
        }
    }, MenuWrapper: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",

        '@media (max-width:475px)': {
            width: "90%"
        },

    }, Tab: {
        '@media (max-width:590px)': {
            padding: "0",
            fontSize: "11px",
        },


    }, allSection: {
        marginTop: "68px",
        '@media (max-width:960px)': {
            marginTop: '270px'
        },
        '@media (max-width:814px)': {
            marginTop: '320px'
        },
        '@media (max-width:630px)': {
            marginTop: '500px'
        },
        '@media (max-width:600px)': {
            marginTop: '370px'
        },
        '@media (max-width:400px)': {
            marginTop: '170px'
        },
        '@media (max-width:174px)': {
            marginTop: '200px'
        },

    }, MapWrapper: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",

    }, TabPanel: {
        '@media (max-width:590px)': {
            padding: "0"
        },
    },
    Total: {
        '@media (max-width:610px)': {
            display: "none"
        },
    },
    CardActionsMobile: {
        display: "none",
        '@media (max-width:740px)': {
            display: "block"
        },
    },
    CardActionsPC: {
        display: "block",
        '@media (max-width:740px)': {
            display: "none"
        },
    },

    CustomCards: {
        width: "530px",
        margin: "30px 10px",
        border: "1px solid rgba(151, 151, 151, 0.181927)",
        padding: "30px",
        boxSizing: "border-box",
        display: "flex",

        '@media (max-width:740px)': {
            width: "382.7px",
            margin: "10px 0",
            display: "block",
            textAlign: "center",
        },
        '@media (max-width:460px)': {
            // width: "282.7px",
            margin: "10px 0",
            padding: "0"
        }
    },
    CustomCardsImg: {
        '@media (max-width:740px)': {
            width: "127.57px",
            height: "127.57px",
        }
    }
    ,
    CustomButton: {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        border: "none",
        flexDirection: "column",
        color: "#fff",
        backgroundColor: "#F1B301",
        fontSize: "32px",
        padding: "0"
    },
    IconButton: {
        background: "#F1B301",
        color: "#fff !important",
        transition: "all 0.2s linear",
        '&:nth-child(1)':{
            '&:hover': {
                transform: "scale(1.1) !important",
                background: "#F1B301  !important",
                color: "#fff !important",
            }
        },'&:last-child':{
            '&:hover': {
                transform: "scale(1.1) !important",
                background: "yellowgreen  !important",
                color: "#fff !important",
            }
        },

    },
    FilterButton: {
        textTransform: "none",
        // background: "#F1B301",
        // color: "#fff",
        borderRadius: "27px",
        padding: "10px",
        margin: "5px 0",
        transition: "all 0.2s linear",
        '&:active': {
            background: "#F1B301",
        },
        '&:hover': {
            transform: "scale(1.1)",
            background: "#F1B301",
            color: "#fff",
        },
        '&:last-child': {
            textTransform: "none",
            background: "#948f8f",
            color: "#fff",
            borderRadius: "27px",
            padding: "10px",
            transition: "all 0.2s linear",
            '&:hover': {
                transform: "scale(1.1)",
                background: "#948f8f",
                color: "#fff",
            },
        },

    },
    Footer: {
        height: "510px",
        width: "100%",
        // backgroundImage: "linear-gradient(to right,transparent 1%,purple 1%)",
        backgroundColor: "purple",
        marginTop: "173px",
        position: "relative",

        "@media(max-width:780px)": {
            height: "550px"
        },

    },
    FooterBox: {
        width: "540px",
        margin: "72px 0",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "38px",

        "@media(max-width:959.5px)": {
            width: "auto",
        },

        "@media(max-width:780px)": {
            flexDirection: "column",
            width: "auto",
            alignItems: "center",
            height: "165px"
        },

    },
    FooterBoxIn: {
        width: "60%",
        display: "flex",
        justifyContent: "space-between",

    },
    FooterArticle: {
        color: "#fff",
        fontSize: "52px",
        lineHeight: "63px",
        fontWeight: "bold",
        "@media(max-width:780px)": {
            fontSize: "32px",
            lineHeight: "46px"
        },

    },
    FooterBoxMain: {
        width: "100%",
        margin: "72px 0",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",


    }, Article: {

        "&:nth-child(1)": {
            display: "block",
            "@media(max-width:959px)": {
                display: "none"
            }
        }, "&:last-child": {
            display: "none",
            "@media(max-width:959px)": {
                display: "block",
                textAlign: "center",
            }
        },


    },

    bigPhone: {
        marginTop: "-140px",
        width: "auto",

        '@media (max-width:1200px)': {
            width: "335px"
        }, "@media(max-width:959px)": {
            marginLeft: "128px",
            marginTop: "-300px",
        }, "@media(max-width:600px)": {
            height: "180px",
            marginLeft: "58px",
            marginTop: "-135px",
            width: "186px"
        },
    },
    FooterButton: {
        textTransform: "none",
        width: "250px",
        height: "80px",
        borderRadius: "46px",
        display: "flex",
        justifyContent: "center",

        '@media (max-width:1200px)': {
            // width: "235px"
        },

    },
    End: {
        borderTop: "1px solid black",
        marginBottom: "10px"
    },
    BeforeEnd: {
        "@media(max-width:600px)": {
            width: "100%",
            margin: "72px 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "start",
            flexWrap: "wrap",
        },
    },
}))