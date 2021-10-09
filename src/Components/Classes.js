import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  containerFluid: {
    maxWidth: "1365px",
    margin: "0 auto",
    backgroundColor: "transparent",

    "@media (max-width:1280px)": {
      width: "90vw",
    },
  },
  customIconButton: {
    padding: 0,
    marginLeft: "-5px",
    "@media (max-width:600px)": {},
  },
  fullnavbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  navWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    "@media (max-width: 600px)": {},
  },

  gridseven: {
    display: "none",
    "@media (max-width:960px)": {
      display: "block",
    },
  },

  hamburger: {
    width: "721px",
    height: "623px",
    transform: "scale(1.2)",
    "@media (max-width:1500px)": {
      width: "450px",
      height: "370px",
    },
    "@media (max-width:1280px)": {
      width: "350px",
      height: "310px",
    },
    
    "@media (max-width:960px)": {
      width: "400px",
      // marginLeft: "65%",
      height: "350px",
    },
    "@media (max-width:600px)": {
      width: "300px",
      // marginLeft: "65%",
      height: "250px",
    },
    "@media (max-width:400px)": {
      width: "230px",
      height: "170px",
      // marginLeft: "65%",
      marginTop: "-20px",
    },
    "@media (max-width:250px)": {
      width: "170px",
      height: "130px",
      // marginLeft: "65%",
      marginTop: "-20px",
    },
  },

  menu: {
    display: "flex",
    width: "256px",
    marginRight: "-286px",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width:1280px)": {
      marginRight: "-80px",
    },
    "@media (max-width:960px)": {
      display: "none",
      flexDirection: "column",
    },
  },
  burgericon: {
    display: "none",

    "@media (max-width:960px)": {
      transition: "linear .3s",
      display: "flex",
      flexDirection: "column",
      fontSize: "22px",
    },
  },
  Header: {
    width: "100%",
    height: "801px",
  },

  flexbox: {
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width:960px)": {
      flexDirection: "column",
    },
  },

  headersection: {
    marginTop: "68px",
  },

  BG: {
    position: "absolute",
    // width: "auto",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    backgroundImage: "linear-gradient(to right,transparent 58%,purple 1%)",
    zIndex: "-1",
    height: "801px",
    "@media (max-width:960px)": {
      backgroundImage: "linear-gradient(180deg,transparent 38%,purple 1%)",
      height: "721px",
    },
    "@media (max-width:600px)": {
      backgroundImage: "linear-gradient(180deg,transparent 40%,purple 1%)",
      height: "601px",
    },
    "@media (max-width:400px)": {
      backgroundImage: "linear-gradient(180deg,transparent 40%,purple 1%)",
      height: "501px",
    },
  },

  Links: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      textDecoration: "none",
    },
    "@media (max-width:1280px)": {
      fontSize: "13px",
    },
  },
  modalLinks: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textDecoration: "none",
    margin: "0 auto",
    lineHeight: "30px",
    width: "fit-content",
    // '&:hover':{
    // }
  },
  NavContainer: {
    display: "flex",
    width: "456px",
    justifyContent: "space-around",
    alignItems: "center",
    "@media (max-width:2100px)": {
      width: "400px",
    },

    "@media (max-width:1280px)": {
      width: "280px",
    },
    "@media (max-width:960px)": {
      display: "none",
    },
  },
  NavNumber: {
    display: "flex",
    width: "156px",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight:'40px',
    "@media (max-width:1280px)": {
      width: "140px",
      justifyContent: "center",
      padding: "0",
      margin: "0",
    },
  },
  textWhite: {
    color: "#FFF",
    "@media (max-width:1280px)": {
      fontSize: "17px",
    },
    "@media (max-width:960px)": {
      color: "black",
    },
  },
  modalNavNumber: {
    // margin:'0 auto'
    display: "flex",
    alignItems: "center",
  },
  modaltextWhite: {
    display: "flex",
    alignItems: "center",
    fontSize: "15px",
    "@media (max-width:400px)": {
      fontSize: "12px",
    },
  },
  modalTextSpan: {
    fontSize: "18px",
    "@media (max-width:400px)": {
      fontSize: "14px",
    },
  },
  TextSpan: {
    fontSize: "22px",
    lineHeight: "5px",
    "@media (max-width:1280px)": {
      fontSize: "17px",
      lineHeight: "0px",
    },
  },
  HeaderTitle: {
    // fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "79px",
    lineHeight: "85px",
    "@media (max-width:1500px)": {
      fontSize: "50px",
      lineHeight: "50px",
    },
    "@media (max-width:1280px)": {
      fontSize: "50px",
      lineHeight: "50px",
    },
    "@media (max-width:960px)": {
      color: "white",
      fontSize: "45px",
      lineHeight: "55px",
      textAlign: "center",
    },
    "@media (max-width:600px)": {
      color: "white",
      fontSize: "35px",
      textAlign: "center",
      lineHeight: "45px",
    },
    "@media (max-width:400px)": {
      color: "white",
      fontSize: "25px",
      textAlign: "center",
      lineHeight: "35px",
    },
  },
  desc: {
    fontSize: "18px",
    lineHeight: "32px",
    marginTop: "14px",
    // width: "85%",
    "@media (max-width:1500px)": {
      fontSize: "15px",
    lineHeight: "32px",
    },

    "@media (max-width:960px)": {
      textAlign: "center",
      width: "100%",
      color: "white",
    },
    "@media (max-width:600px)": {
      textAlign: "center",
      width: "100%",
      color: "white",
      fontSize: "15px",
      lineHeight: "25px",
    },
    "@media (max-width:400px)": {
      textAlign: "center",
      width: "100%",
      color: "white",
      fontSize: "12px",
      lineHeight: "18px",
    },
  },

  allcard: {
    display: "flex",
    marginTop: "109px",
    justifyContent: "flex-start",
    alignItems: "center",
    "@media (max-width:960px)": {
      // display: "none",
    justifyContent: "center",

    },
    "@media (max-width:630px)": {
      flexDirection: "column",
    },
  },

  CustomCard: {
    // display: 'none',
    width: "255px",
    height: "200px",
    borderRadius: "12px",
    "&:nth-child(1)": {
      background: "linear-gradient(315.49deg, #FFC85C 1.32%, #F1B301 96.68%)",
    },
    "&:nth-child(2)": {
      marginLeft: "30px",
      background: "#800A7A",
    },
    "@media (max-width:1081px)": {
      width:'230px',
      height:'185px'
    },

    "@media (max-width:960px)": {
      Width: "200px",
      marginLeft: "30px",
      marginTop: "30px",
      Height: "155px",
    },
    "@media (max-width:600px)": {
      width: "180px",
      marginTop: "30px",
      marginRight: "30px",
      height: "150px",
    },
    "@media (max-width:400px)": {
      width: "160px",
      height: "140px",
    },
  },

  cardbutton: {
    borderRadius: "19px",
    background: "rgba(255, 255, 255, 0.3)",
    textTransform: "none",
    display: "flex",
    alignItems: "flex-end",
    "@media (max-width:400px)": {
      height: "25px",
      fontSize: "12px",
      alignItems: "center",
    },
  },

  cornerpic: {
    width: "167px",
    height: "149px",
    "@media (max-width:960px)": {
      width: "167px",
      height: "149px",
    },
    "@media (max-width:400px)": {
      width: "100px",
      height: "75px",
    },
    "@media (max-width:600px)": {
      width: "125px",
      height: "94px",
    },
  },

  cornerpic2: {
    width: "167px",
    height: "149px",
    "@media (max-width:400px)": {
      width: "100px",
      height: "90px",
    },
    "@media (max-width:600px)": {
      width: "125px",
      height: "114px",
    },
  },

  pitsa: {
    color: "#E76A06",
    lineHeight: "34px",
    fontSize: "34px",
    fontWeight: "bold",
    marginLeft: "5px",
    overflowY: "hidden",
    "@media (max-width:600px)": {
      fontSize: "25px",
      lineHeight: "26px",
      marginTop: "0",
    },
  },
  pitsa2: {
    color: "#FC96F7",
    lineHeight: "34px",
    fontSize: "34px",
    fontWeight: "bold",
    marginLeft: "5px",
    overflowY: "hidden",
    "@media (max-width:600px)": {
      fontSize: "25px",
      lineHeight: "26px",
      marginTop: "0",
    },
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
    padding: "0",
  },
  IconButton: {
    background: "#F1B301",
    color: "#fff",
    transition: "all 0.2s linear",
    "&:hover": {
      transform: "scale(1.1)",
      background: "#F1B301",
      color: "#fff",
    },
  },

  grid7: {
    display: "block",
    "@media (max-width:960px)": {
      display: "none",
    },
  },

  Burgerimg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },

  FilterButton: {
    textTransform: "none",
    // background: "#F1B301",
    // color: "#fff",
    borderRadius: "27px",
    padding: "10px",
    transition: "all 0.2s linear",
    "&:active": {
      background: "#F1B301",
    },
    "&:hover": {
      transform: "scale(1.1)",
      background: "#F1B301",
      color: "#fff",
    },
    "&:last-child": {
      textTransform: "none",
      background: "#948f8f",
      color: "#fff",
      borderRadius: "27px",
      padding: "10px",
      transition: "all 0.2s linear",
      "&:hover": {
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
    position: "relative",
  },
  FooterBox: {
    display: "flex",
    justifyContent: "space-between",
  },
  bigPhone: {
    marginTop: "-140px",
  },
  End: {
    borderTop: "1px solid black",
    marginBottom: "10px",
  },
}));
