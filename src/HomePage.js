import React from 'react';
// import logo from './logo.svg';
import { StyleSheet, css } from 'aphrodite';
import autobind from 'core-decorators/lib/autobind';

@autobind
class HomePage extends React.Component {
  render() {
    return (
      <div className={css(styles.wrapper)}>
        <div className={css(styles.heroWrapper)}>
          <div className={css(styles.titleWrapper)}>
            <h1 className={css(styles.h1)}>
              <span className={css(styles.highlited)}>USTAVIMO</span> KORONO <span className={css(styles.highlited)}>SKUPAJ</span>
            </h1>
            <img className={css(styles.logo)} alt="krizni štab republike slovenije" src="../../assets/logo.png" />
          </div>
        </div>
        <div className={css(styles.grayBack)}>
          <div className={css(styles.section1Wrapper)}>
            <div className={css(styles.section1Left)}>
              <div className={css(styles.krogci)}>
                <div className={css(styles.krogec)}>
                  <div className={css(styles.krogecCounter)}>
                    6156
                  </div>
                  <div className={css(styles.krogecText)}>
                    ŠTEVILO TESTIRANJ
                  </div>
                </div>
                <div className={css(styles.krogec)}>
                  <div className={css(styles.krogecCounter)}>
                    219
                  </div>
                  <div className={css(styles.krogecText)}>
                    ŠTEVILO OKUŽENIH
                  </div>
                </div>
                <div className={css(styles.krogec)}>
                  <div className={css(styles.krogecCounter)}>
                    38
                  </div>
                  <div className={css(styles.krogecText)}>
                    ŠTEVILO OKUŽENIH DANES
                  </div>
                </div>
                <div className={css(styles.krogec)}>
                  <div className={css(styles.krogecCounter)}>
                    1
                  </div>
                  <div className={css(styles.krogecText)}>
                    ŠTEVILO SMRTNIH ŽRTEV
                  </div>
                </div>
              </div>
              <div className={css(styles.zemljevid)}>
                <div className={css(styles.zemljevidTitle)}>
                  ZEMLJEVID OBOLELIH
                </div>
                <embed className={css(styles.zemljevidMap)} src="https://gdiljubljana.maps.arcgis.com/apps/opsdashboard/index.html#/1cf4f90e05984ae5a365f4838f746138" />
              </div>
            </div>
            <div className={css(styles.section1Right)}>
              <div className={css(styles.alarm)}>
                <img className={css(styles.alarmImg)} alt="alarm korona" src="../../assets/alarm.png" />
                <div className={css(styles.alarmTitle)}>
                  Želiš biti obveščen o stanju koronavirusa v Sloveniji?

                </div>
                <div className={css(styles.alarmText)}>
                  Vaše podatke bomo uporabili za obveščanje o nujnem stanju. Prijava in obvestila, ki jih boste prejeli, so brezplačna.
                </div>
              </div>
              <div className={css(styles.alarmButton)}>
                  <div className={css(styles.highlitetWhite)}>PRIJAVI SE NA</div>
                  KORONA ALARM
              </div>
              <a href="tel:080 14 04" className={css(styles.klicni)}>
                <div className={css(styles.highlitetWhite)}>KLICNI CENTER</div>
                080 14 04
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
   // wrapper:{
   //  maxWidth: 1000,
   //  width: "calc(100% - 100px)",
   //  margin: "0 auto",
   //  marginTop:40,
   //  '@media (max-width: 580px)': {
   //    width: "calc(100% - 60px)",
   //  },
   //  '@media (max-width: 340px)': {
   //    width: "calc(100% - 40px)",
   //  },
   // },

  heroWrapper:{
    backgroundPosition:"50%",
    backgroundImage: "url('../../assets/hero.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width:"100%",
  },
  h1:{
    fontWeight:400,
    fontSize:"50px",
    color:"#fff",
  },
  titleWrapper:{
    height:220,
    display:"flex",
    width:"100%",
    alignItems:"center",
    width:"calc(100% - 80px)",
    maxWidth:1200,
    margin:"0 auto",
    position:"relative"
  },
  logo:{
    position:"absolute",
    right:0,
    bottom:20,
    width:180,
  },
  highlited:{
    color:"rgb(7,236,236)",
  },
  grayBack:{
    background:"#F5F5F5",
  },
  section1Wrapper:{
    width:"calc(100% - 80px)",
    maxWidth:1200,
    margin:"0 auto",
    display:"flex",
    justifyContent:"space-between",
    paddingTop:50,
    paddingBottom:60,
  },
  section1Left:{
    width:"calc(100% - 400px)",
    maxWidth:760,
  },
  krogci:{
    display:"flex",
    marginTop:14,
    justifyContent:"space-between"
  },
  krogec:{
    width:140,
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
  },
  krogecCounter:{
    borderRadius:"50%",
    width:100,
    height:100,
    border:"10px rgb(7,236,236) solid",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  krogecText:{
    marginTop:20,
    fontSize:14,
    fontWeight:600,
    textAlign:"center",
  },
  zemljevid:{
    marginTop:50,
  },
  zemljevidTitle:{
    fontSize:20,
    marginBottom:20,
  },
  zemljevidMap:{
    width:"100%",
    height:440,
    background:"#000",
  },                
  section1Right:{
    width:350,
  },
  alarm:{
    width:"cacl(100% - 80px)",
    padding:40,
    margin:"0 auto",
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center",
    background:"#fff",
  },
  alarmImg:{
    width:150,
  },
  alarmTitle:{
    lineHeight:1.4,
    marginTop:30,
    marginBottom:40,
    fontSize:30,
    fontWeight:500,
  },
  alarmText:{
    lineHeight:1.4,
    fontSize:18,
    marginBottom:10,
  },
  alarmButton:{
    background:"rgb(7,236,236)",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    height:110,
    fontSize:22,
    textAlign:"center",
    cursor:"pointer",
    transition:"0.2s",
    ":hover":{
      boxShadow: "0px 2px 24px rgba(21, 23, 54, 0.15)",
    },
  },
  highlitetWhite:{
    color:"#fff",
    marginBottom:4,
  },
  klicni:{
    textDecoration:"none",
    marginTop:20,
    background:"#333333",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    height:110,
    color:"rgb(7,236,236)",
    fontSize:22,
    textAlign:"center",
    cursor:"pointer",
    transition:"0.2s",
    ":hover":{
      boxShadow: "0px 2px 24px rgba(21, 23, 54, 0.15)",
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

export default HomePage;
