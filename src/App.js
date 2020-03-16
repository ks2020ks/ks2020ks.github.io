import React from 'react';
import logo from './logo.svg';
import './App.css';
import { StyleSheet, css } from 'aphrodite';
import autobind from 'core-decorators/lib/autobind';
import Helmet from "react-helmet";
import Link from 'react-router-dom/Link';

@autobind
class App extends React.Component {
  render() {
    return (
      <div className={css(styles.wrapper)}>
        <Helmet>
          <title>Signaco - Prometni znaki</title>
          <meta name="description" content="Podjetje za prodajo prometnih znakov, izdelujemo prometne znake, nosilne drogove, portale, sidra ter ostalo komunalno in urbano opremo, izdelava: prometni znaki"/>
        </Helmet>
         <h2 className={css(styles.title)}>o nas</h2>
         <div className={css(styles.subtitle)}>marec 2018</div>
         <div className={css(styles.infoWrapper)}> 
           <p className={css(styles.text1)}>Signaco d.o.o., podjetje za proizvodnjo prometnih in neprometnih znakov, je bilo ustanovljeno v letu 1994 kot hčerinsko podjetje podjetja Signa d.o.o., podjetja za izvajanje horizontalne signalizacije. Osnovna dejavnost podjetja je proizvodnja cestnih prometnih znakov. Zaradi zahtev trga smo našo ponudbo razširili in dodali še prometno opremo in ostalo signalizacijo ter ponudbo druge opreme za zagotavljanje varnosti v cestnem in drugem prometu.</p>
           <p className={css(styles.text1)}>Poleg izdelave prometnih znakov in ostalih znakov v našem programu ponujamo tudi ostali potrebni material – nosilne drogove, portale, sidra ter ostalo komunalno in urbano opremo, potrebno za celovito ureditev gradbišč ali izboljšanje obstoječega stanja.</p>
            <p className={css(styles.text1)}>V več kot 20 letih obstoja podjetja smo naše izdelke vgrajevali tako na avtocestah, državnih in lokalnih cestah, zasebnih in drugih zemljiščih kot tudi na železnicah in drugih objektih, zato smo prepričani, da lahko z našim znanjem in izkušnjami zadovoljimo in vedno najdemo najprimernejšo rešitev za naše kupce.</p>
            <p className={css(styles.text3)}>Aleš Babnik, direktor</p>
          </div>
          <h1 className={css(styles.title)}>prometni znaki</h1>
          <div className={css(styles.infoWrapper)}> 
          <div className={css(styles.storitve)}>
            <Link onClick={()=> {window.scrollTo(0,0);}} to="znaki/vertikalna-signalizacija" className={css(styles.storitveBox)}>
              <img alt="prometni znaki 1" className={css(styles.img)} src="../assets/icons/svg/Group 7.svg" />
              <h2 className={css(styles.storitveTitle)}>Prometni znaki</h2>
              <p className={css(styles.storitveText)}>Turistični znaki </p>
              <p className={css(styles.storitveText)}>Cestni znaki</p>
              <p className={css(styles.storitveText)}>Železniški znaki </p>
              <p className={css(styles.storitveText)}>Vodni znaki </p>
              <div className={css(styles.nextButton)}>
                <div className={css(styles.nextText)}>VEČ</div>
                <img className={css(styles.nextImg)} alt="prometni znaki" src="../assets/icons/next2.png" />
              </div>
            </Link>
            <Link onClick={()=> {window.scrollTo(0,0);}} to="znaki/horizontalna-signalizacija" className={css(styles.storitveBox, styles.storitveBoxMargin)}>
              <img alt="prometni znaki 2" className={css(styles.img)} src="../assets/icons/svg/Group 6.svg" />
              <h2 className={css(styles.storitveTitle)}>Horizontalna signalizacija</h2>
              <p className={css(styles.storitveText)}>Tankoslojne označbe</p>
              <p className={css(styles.storitveText)}>Debeloslojne označbe</p>
              <p className={css(styles.storitveText)}>Spreji za označevanje</p>
              <p className={css(styles.storitveText)}>Druga siganlizacija</p>
              <div className={css(styles.nextButton)}>
                <div className={css(styles.nextText)}>VEČ</div>
                <img alt="prometni znaki next" className={css(styles.nextImg)} src="../assets/icons/next2.png" />
              </div>
            </Link>
            <Link onClick={()=> {window.scrollTo(0,0);}} to="znaki/ostala-signalizacija" className={css(styles.storitveBox)}>
              <img alt="prometni znaki 3" className={css(styles.img)} src="../assets/icons/svg/Group 5.svg" />
              <h2 className={css(styles.storitveTitle)}>Ostala signalizacija</h2>
              <p className={css(styles.storitveText)}>Varnostni znaki </p>
              <p className={css(styles.storitveText)}>Znaki za smučišča</p>
              <p className={css(styles.storitveText)}>znaki za planinske poti</p>
              <p className={css(styles.storitveText)}>Znaki za kulturne znamenitosti</p>
              <p className={css(styles.storitveText)}>Znaki po naročilu</p>
              <div className={css(styles.nextButton)}>
                <div className={css(styles.nextText)}>VEČ</div>
                <img alt="prometni znaki next" className={css(styles.nextImg)} src="../assets/icons/next2.png" />
              </div>
            </Link>
            <Link onClick={()=> {window.scrollTo(0,0);}} to="znaki/prometna-oprema" className={css(styles.storitveBox, styles.storitveBoxMargin)}>
              <img alt="prometni znaki 4" className={css(styles.img)} src="../assets/icons/svg/Group 2.svg" />
              <h2 className={css(styles.storitveTitle)}>Prometna oprema</h2>
              <p className={css(styles.storitveText)}>Cestna oprema </p>
              <p className={css(styles.storitveText)}>Urbana oprema </p>
              <p className={css(styles.storitveText)}>Železna oprema </p>
              <p className={css(styles.storitveText)}>Lesena oprema </p>
              <div className={css(styles.nextButton)}>
                <div className={css(styles.nextText)}>VEČ</div>
                <img alt="prometni znaki next" className={css(styles.nextImg)} src="../assets/icons/next2.png" />
              </div>
            </Link>
            <Link onClick={()=> {window.scrollTo(0,0);}} to="znaki/druga-oprema" className={css(styles.storitveBox)}>
              <img alt="prometni znaki 5" className={css(styles.img)} src="../assets/icons/svg/Group 3.svg" />
              <h2 className={css(styles.storitveTitle)}>Druga oprema</h2>
              <p className={css(styles.storitveText)}>Označevanje vozil</p>
              <p className={css(styles.storitveText)}>Označevanje plovil</p>
              <div className={css(styles.nextButton)}>
                <div className={css(styles.nextText)}>VEČ</div>
                <img alt="prometni znaki next" className={css(styles.nextImg)} src="../assets/icons/next2.png" />
              </div>
            </Link>
          </div>
        </div>
      </div>
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
