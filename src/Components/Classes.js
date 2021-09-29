import {makeStyles} from "@material-ui/core";

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
        fontFamily:"Sans-Serif !important",
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
    },
    CustomCards: {
        width: "530px",
        margin: "30px",
        border: "1px solid rgba(151, 151, 151, 0.181927)",
        padding: "30px",
        boxSizing: "border-box",
        display: "flex",
    },
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
        color: "#fff",
        transition: "all 0.2s linear",
        '&:hover': {
            transform: "scale(1.1)",
            background: "#F1B301",
            color: "#fff",
        }
    },
    FilterButton: {
        textTransform: "none",
        // background: "#F1B301",
        // color: "#fff",
        borderRadius: "27px",
        padding: "10px",
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
        height: "501px",
        width: "100%",
        // backgroundImage: "linear-gradient(to right,transparent 1%,purple 1%)",
        backgroundColor: "purple",
        marginTop: "173px",
        position: "relative"
    },
    FooterBox: {
        display: "flex",
        justifyContent: "space-between",

    },
    bigPhone: {
        marginTop: "-140px"
    },
    End: {
        borderTop: "1px solid black",
        marginBottom: "10px"
    },


}))