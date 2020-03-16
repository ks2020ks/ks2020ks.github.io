import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { StyleSheet, css } from 'aphrodite';
import autobind from 'core-decorators/lib/autobind';
import BrowserRouter from 'react-router-dom/BrowserRouter';

@autobind
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <div className={css(styles.wrapper)}>
            Ract App
          </div>
        </main>
      </BrowserRouter>
    );
  }
}

const styles = StyleSheet.create({
   wrapper:{
    maxWidth: 1000,
    width: "calc(100% - 100px)",
    margin: "0 auto",
    marginTop:40,
    '@media (max-width: 580px)': {
      width: "calc(100% - 60px)",
    },
    '@media (max-width: 340px)': {
      width: "calc(100% - 40px)",
    },
   },
   title:{
    color: "#838383",
    fontSize: 40,
    fontWeight: 300,
    letterSpacing: 1.8,
    lineHeight: "56px",
   },
   subtitle:{
    fontSize: 12,
    color: "#4CAF50"
   },
   infoWrapper:{
    marginLeft: 30,
    paddingTop: 30,
    maxWidth:800,
    '@media (max-width: 800px)': {
      marginLeft: 0,
    },
   },
   text1:{

    marginTop:30,
    marginBottom:20,
    fontSize: 17,
    lineHeight:1.4,
    color: "#707070",
   },
   text2:{
    fontSize: 11,
    color: "#595959",
    marginBottom: 20,
   },
   text3:{
    fontSize: 11,
    color: "#595959",
    marginBottom: 90,
   },
   storitve:{
    paddingTop: 40,
    maxWidth: 1000,

    display: "flex",
    flexFlow: "row wrap",
   },
   storitveBox:{
    display:"block",
    textDecoration:"none",
    width: 210,
    marginRight: 50,
    marginBottom: 50,
    '@media (max-width: 770px)': {
      marginRight: 20,
    },

    '@media (max-width: 550px)': {
      width: 180,
      marginRight: 50,
    },
    '@media (max-width: 470px)': {
      width: 141,
      marginRight: 30,
    },
    '@media (max-width: 373px)': {
      width: 130,
      marginRight: 20,
    },
   },
   storitveBoxMargin:{
      marginRight: 50,
      width: 210,
      '@media (max-width: 770px)': {
        marginRight: 20,
      },
      '@media (max-width: 550px)': {
        marginRight: 0,
        width: 180,
      },
      '@media (max-width: 470px)': {
        width: 141,
        marginRight: 0,
      },
      '@media (max-width: 373px)': {
        width: 120,
        marginRight: 0,
      },
   },
   storitveBoxNoMargin:{
    marginRight: 0,
   },
   img:{
    marginBottom: 15,
   },
   storitveTitle:{
    fontWeight: 600,
    fontSize: 21,
    textDecoration:"none",
    display:"block",
    lineHeight:1.5,
    letterSpacing:0.8,
    color: "#595959",
    transition:"0.2s",
    marginBottom: 20,
    cursor:"pointer",
    '@media (max-width: 450px)': {
      fontSize: 20,
    },
  },
  storitveText:{
    textDecoration:"none",
    display:"block",
    color:"#838383",
    fontSize:14,
    letterSpacing:0.7,
    textTransform: "uppercase",
    marginBottom: 7,
    cursor:"pointer",
    '@media (max-width: 470px)': {
        fontSize:12,
      },
    '@media (max-width: 373px)': {
      fontSize:10,
    },
  },

  nextButton:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:20,
    transition:"0.2s",
    width:50,
    ":hover":{
      width:60,
    }
  },
  nextText:{
    color:"#838383",
  },
  nextImg:{
    width:18,
    paddingLeft:10,
  },
});

export default App;
