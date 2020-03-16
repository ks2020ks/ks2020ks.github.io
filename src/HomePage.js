import React from 'react';
// import logo from './logo.svg';
import { StyleSheet, css } from 'aphrodite';
import autobind from 'core-decorators/lib/autobind';
import Helmet from "react-helmet";

@autobind
class HomePage extends React.Component {
  state = { 
    open1:true,
    open2:false,
    open3:false,
  }


  open1(){
    this.setState({open1:true,open2:false,open3:false,})
  }
  open2(){
    this.setState({open1:false,open2:true,open3:false,})
  }
  open3(){
    this.setState({open1:false,open2:false,open3:true,})
  }

  render() {
    return (
      <div className={css(styles.wrapper)}>
        <Helmet>
          <title>USTAVIMO KORONO SKUPAJ</title>
          <meta name="description" content="USTAVIMO KORONO SKUPAJ"/>
        </Helmet>
        <div className={css(styles.heroWrapper)}>
          <div className={css(styles.titleWrapper)}>
            <h1 className={css(styles.h1)}>
              <span className={css(styles.highlited)}>USTAVIMO</span> KORONO <span className={css(styles.highlited)}>SKUPAJ</span>
            </h1>
            <img className={css(styles.logo)} alt="krizni štab republike slovenije" src="./assets/logo.png" />
          </div>
        </div>
        <div className={css(styles.grayBack)}>
          <div className={css(styles.section1Wrapper)}>
            <div className={css(styles.section1Left)}>
              <div className={css(styles.krogci)}>
                <div className={css(styles.krogec)}>
                  <div className={css(styles.krogecCounter)}>
                    6712
                  </div>
                  <div className={css(styles.krogecText)}>
                    ŠTEVILO TESTIRANJ
                  </div>
                </div>
                <div className={css(styles.krogec)}>
                  <div className={css(styles.krogecCounter)}>
                    253
                  </div>
                  <div className={css(styles.krogecText)}>
                    ŠTEVILO OKUŽENIH
                  </div>
                </div>
                <div className={css(styles.krogec)}>
                  <div className={css(styles.krogecCounter)}>
                    34
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
                <embed className={css(styles.zemljevidMap)} src="hsttps://gdiljubljana.maps.arcgis.com/apps/opsdashboard/index.html#/1cf4f90e05984ae5a365f4838f746138" />
              </div>
            </div>
            <div className={css(styles.section1Right)}>
              <div className={css(styles.alarm)}>
                <img className={css(styles.alarmImg)} alt="alarm korona" src="./assets/alarm.png" />
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

        <div className={css(styles.section2Wrapper)}>
          <h2 className={css(styles.section2Title)}>
            IMAŠ TE     
            <span className={css(styles.highlited)}>   SIMPTOME</span>?
          </h2>
          <div className={css(styles.simptomi)}>
            <div className={css(styles.simptom)}>
              <img alt="korona simptom" src="./assets/simptom1.png" className={css(styles.simptomImg1)}/>
              <div className={css(styles.simptomText1)}>
                  VROČINA <span className={css(styles.highlited)}>NAD 37.8 C</span>
              </div>
            </div>
            <div className={css(styles.simptom)}>
              <img alt="korona simptom" src="./assets/simptom2.png" className={css(styles.simptomImg)}/>
              <div className={css(styles.simptomText)}>
                  KAŠLJANJE
              </div>
            </div>
            <div className={css(styles.simptom)}>
              <img alt="korona simptom" src="./assets/simptom3.png" className={css(styles.simptomImg)}/>
              <div className={css(styles.simptomText)}>
                  TEŽAVE <span className={css(styles.highlited)}>PRI DIHANJU</span>
              </div>
            </div>
          </div>
        </div>

        <div className={css(styles.grayBack)}>
          <div className={css(styles.section3Wrapper)}>
            <div className={css(styles.oknca)}>
              <div onClick={this.open1} className={this.state.open1 ? css(styles.oknceActive) : css(styles.oknce)}>
                <div className={css(styles.oknceText)}>
                  KAKO <span className={css(styles.highlited)}>RAVNATI</span> OB SUMU NA OKUŽBO?
                </div>
                <img className={css(styles.arrDown)} alt="puščica korona" src={this.state.open1 ? "./assets/arrDownActive.png" : "./assets/arrDown.png"} />
              </div>
              <div onClick={this.open2} className={this.state.open2 ? css(styles.oknceActive) : css(styles.oknce)}>
                <div className={css(styles.oknceText)}>
                  KAKO LAHKO <span className={css(styles.highlited)}>PREPREČIŠ</span> OKUŽBO?
                </div>
                <img className={css(styles.arrDown)} alt="puščica korona" src={this.state.open2 ? "./assets/arrDownActive.png" : "./assets/arrDown.png"} /> 
              </div>
              <div onClick={this.open3} className={this.state.open3 ? css(styles.oknceActive) : css(styles.oknce)}>
                <div className={css(styles.oknceText)}>
                  <span className={css(styles.highlited)}>UKREPI</span> VLADE
                </div>
                <img className={css(styles.arrDown3)} alt="puščica korona" src={this.state.open3 ? "./assets/arrDownActive.png" : "./assets/arrDown.png"} />
              </div>
            </div>
            <div className={css(styles.textWrapper)}>
              <div className={this.state.open1 ? css(styles.textActive) : css(styles.text)}>
                <p>
                  Pri preprečevanju okužbe s koronavirusom veljajo enaka načela preventive kot pri preprečevanju drugih nalezljivih bolezni, ki povzročajo okužbe dihal. Najbolj učinkovita sta vsakodnevna preventivna ukrepa: redno umivanje rok z vodo in milom ter higiena kašlja. Priporočljivo pa je upoštevati tudi te vsakodnevne preventivne ukrepe:
                </p>
                <p>
                  Izogibamo se tesnim stiskom z ljudmi, ki kažejo znake nalezljive bolezni.
                </p>
                <ul>
                  <li>Ne dotikamo se oči, nosu in ust.</li>
                  <li>Če zbolimo, ostanemo doma.</li>
                  <li>Upoštevamo pravila higiene kašlja.</li>
                  <li>Redno si umivamo roke z milom in toplo vodo.</li>
                </ul>
                <p>
                  Če voda in milo nista dostopna, za razkuževanje rok uporabimo namensko razkužilo za roke. Vsebnost alkohola v razkužilu za roke naj bo najmanj 60 odstotkov. Razkužilo za roke je namenjeno samo za zunanjo uporabo. Sredstva za čiščenje/razkuževanje površin niso namenjena čiščenju/razkuževanju kože.Glede na trenutno epidemiološko stanje splošna uporaba zaščitnih mask ni potrebna. V času povečanega pojavljanja okužb dihal se izogibamo zaprtih prostorov, v katerih se zadržuje veliko ljudi. Poskrbimo za redno zračenje zaprtih prostorov.
                </p>
              </div>
              <div className={this.state.open2 ? css(styles.textActive) : css(styles.text)}>
                <p>
                  Pri preprečevanju okužbe s koronavirusom veljajo enaka načela preventive kot pri preprečevanju drugih nalezljivih bolezni, ki povzročajo okužbe dihal. Najbolj učinkovita sta vsakodnevna preventivna ukrepa: redno umivanje rok z vodo in milom ter higiena kašlja. Priporočljivo pa je upoštevati tudi te vsakodnevne preventivne ukrepe:
                </p>
                <p>
                  Izogibamo se tesnim stiskom z ljudmi, ki kažejo znake nalezljive bolezni.
                </p>
                <ul>
                  <li>Ne dotikamo se oči, nosu in ust.</li>
                  <li>Če zbolimo, ostanemo doma.</li>
                  <li>Upoštevamo pravila higiene kašlja.</li>
                  <li>Redno si umivamo roke z milom in toplo vodo.</li>
                </ul>
                <p>
                  Če voda in milo nista dostopna, za razkuževanje rok uporabimo namensko razkužilo za roke. Vsebnost alkohola v razkužilu za roke naj bo najmanj 60 odstotkov. Razkužilo za roke je namenjeno samo za zunanjo uporabo. Sredstva za čiščenje/razkuževanje površin niso namenjena čiščenju/razkuževanju kože.Glede na trenutno epidemiološko stanje splošna uporaba zaščitnih mask ni potrebna. V času povečanega pojavljanja okužb dihal se izogibamo zaprtih prostorov, v katerih se zadržuje veliko ljudi. Poskrbimo za redno zračenje zaprtih prostorov.
                </p>
              </div>
              <div className={this.state.open3 ? css(styles.textActive) : css(styles.text)}>
                <p>
                  Pri preprečevanju okužbe s koronavirusom veljajo enaka načela preventive kot pri preprečevanju drugih nalezljivih bolezni, ki povzročajo okužbe dihal. Najbolj učinkovita sta vsakodnevna preventivna ukrepa: redno umivanje rok z vodo in milom ter higiena kašlja. Priporočljivo pa je upoštevati tudi te vsakodnevne preventivne ukrepe:
                </p>
                <p>
                  Izogibamo se tesnim stiskom z ljudmi, ki kažejo znake nalezljive bolezni.
                </p>
                <ul>
                  <li>Ne dotikamo se oči, nosu in ust.</li>
                  <li>Če zbolimo, ostanemo doma.</li>
                  <li>Upoštevamo pravila higiene kašlja.</li>
                  <li>Redno si umivamo roke z milom in toplo vodo.</li>
                </ul>
                <p>
                  Če voda in milo nista dostopna, za razkuževanje rok uporabimo namensko razkužilo za roke. Vsebnost alkohola v razkužilu za roke naj bo najmanj 60 odstotkov. Razkužilo za roke je namenjeno samo za zunanjo uporabo. Sredstva za čiščenje/razkuževanje površin niso namenjena čiščenju/razkuževanju kože.Glede na trenutno epidemiološko stanje splošna uporaba zaščitnih mask ni potrebna. V času povečanega pojavljanja okužb dihal se izogibamo zaprtih prostorov, v katerih se zadržuje veliko ljudi. Poskrbimo za redno zračenje zaprtih prostorov.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*
        <div className={css(styles.section4Wrapper)}>
          <div className={css(styles.section4WrapperLeft)}>
            <div class="fb-page" data-href="https://www.facebook.com/KrizniStabRS/" data-tabs="timeline" data-width="500" data-height="600" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false"><blockquote cite="https://www.facebook.com/KrizniStabRS/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/KrizniStabRS/">Krizni štab Republike Slovenije</a></blockquote></div>
          </div>
          <div className={css(styles.section4WrapperRight)}>
            <a class="twitter-timeline" href="https://twitter.com/KrizniStabRS?ref_src=twsrc%5Etfw" data-height="600">Tweeter @KrizniStabRS</a> 
          </div>
        </div>*/}

        <div className={css(styles.blackBack)}>
          <div className={css(styles.section5Wrapper)}>
            <div className={css(styles.section5Text)}>
              <span className={css(styles.highlited)}>Prijavi kršiteje</span>, ki ne upoštevajo prepovedi neposredne prodaje blaga in storitev.  
            </div>
            <div className={css(styles.section5Button)}>
              PRIJAVI TUKAJ!
            </div>
          </div>
        </div>

        <div className={css(styles.section6Wrapper)}>
          <img src="./assets/logoFooter.jpg" alt="krizni štab republike Slovenije" className={css(styles.section6Logo)} />
          <div className={css(styles.section6Text)}>
            Podporna stran Kriznega štaba vlade Republike Slovenije. Kontakt: <a className={css(styles.mailto)} href="mailto:krizni-stab@gov.si"> krizni-stab@gov.si</a>
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
    backgroundImage: "url('./assets/hero.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width:"100%",
  },
  h1:{
    fontWeight:400,
    fontSize:"50px",
    color:"#fff",
    '@media (max-width: 800px)': {
      fontSize:38,
    },
    '@media (max-width: 600px)': {
      fontSize:38,
      maxWidth:360,
    },
    '@media (max-width: 400px)': {
      fontSize:32,
      maxWidth:300,
    },
  },
  titleWrapper:{
    height:220,
    display:"flex",
    width:"100%",
    alignItems:"center",
    width:"calc(100% - 80px)",
    maxWidth:1200,
    margin:"0 auto",
    position:"relative",
    '@media (max-width: 950px)': {
      paddingBottom:40,
      height:180,
    },
    '@media (max-width: 500px)': {
      width:"calc(100% - 50px)",
    },
  },
  logo:{
    position:"absolute",
    right:0,
    bottom:20,
    width:180,
    '@media (max-width: 600px)': {
      width:140,
    },
    '@media (max-width: 400px)': {
      width:120,
    },
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
    paddingBottom:80,
    '@media (max-width: 1000px)': {
      flexDirection:"column",
    },
    '@media (max-width: 500px)': {
      width:"calc(100% - 50px)",
    },
  },
  section1Left:{
    width:"calc(100% - 400px)",
    maxWidth:760,
    '@media (max-width: 1000px)': {
      width:"100%",
      maxWidth:1000,
    },
  },
  krogci:{
    display:"flex",
    marginTop:14,
    justifyContent:"space-between",
    '@media (max-width: 1000px)': {
      maxWidth:650,
      margin:"0 auto",
      justifyContent:"space-between",
    },
    '@media (max-width: 600px)': {
      flexWrap:"wrap",
      maxWidth:400,
    },
  },
  krogec:{
    width:140,
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    '@media (max-width: 600px)': {
      marginBottom:40,
    },
    '@media (max-width: 400px)': {
      width:120,
    },
  },
  krogecCounter:{
    borderRadius:"50%",
    width:90,
    height:90,
    background:"#fff",
    border:"5px rgb(7,236,236) solid",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  krogecText:{
    marginTop:20,
    fontSize:12,
    fontWeight:600,
    textAlign:"center",
  },
  zemljevid:{
    marginTop:50,
    '@media (max-width: 1000px)': {
      maxWidth:650,
      margin:"0 auto",
      marginTop:50,
    },
    '@media (max-width: 600px)': {
      marginTop:20,
    },
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
    '@media (max-width: 1000px)': {
      margin:"0 auto",
      marginTop:40,
    },
    '@media (max-width: 400px)': {
      width:"100%",
    },
  },
  alarm:{
    width:"calc(100% - 80px)",
    padding:40,
    margin:"0 auto",
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center",
    background:"#fff",
    '@media (max-width: 400px)': {
      padding:20,
      width:"calc(100% - 40px)",
    },
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
    '@media (max-width: 400px)': {
      fontSize:24,
    },
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








  section2Wrapper:{
    width:"calc(100% - 80px)",
    maxWidth:1200,
    margin:"0 auto",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    paddingTop:80,
    paddingBottom:80,
    '@media (max-width: 500px)': {
      width:"calc(100% - 50px)",
    },
    '@media (max-width: 480px)': {
      paddingBottom:40,
    },
  },
  section2Title:{
    marginBottom:40,
    fontSize:24,
  },
  simptomi:{
    display:"flex",
    width:"100%",
    '@media (max-width: 1000px)': {
      justifyContent:"space-between",
    },
    '@media (max-width: 480px)': {
      flexDirection:"column",
      alignItems:"center",
    },
  },
  simptom:{
    width:250,
    marginLeft:40,
    marginRight:40,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    '@media (max-width: 1000px)': {
      marginLeft:0,
      marginRight:0,
    },
    '@media (max-width: 800px)': {
      width:170,
    },
    '@media (max-width: 480px)': {
      marginBottom:40,
    },
  },
  simptomImg1:{
    width:210,
    '@media (max-width: 800px)': {
      width:155,
    },
    '@media (max-width: 600px)': {
      width:122,
    },
    '@media (max-width: 480px)': {
      width:155,
    },
  },
  simptomImg:{
    width:200,
    '@media (max-width: 800px)': {
      width:150,
    },
    '@media (max-width: 600px)': {
      width:120,
    },
    '@media (max-width: 480px)': {
     width:150,
    },
  },
  simptomText1:{
    '@media (max-width: 600px)': {
      fontSize:14,
    },
  },
  simptomText:{
    marginTop:10,
    textAlign:"center",
    '@media (max-width: 600px)': {
      fontSize:14,
    },
  },





  section3Wrapper:{
    width:"calc(100% - 80px)",
    maxWidth:1200,
    margin:"0 auto",
    paddingTop:50,
    paddingBottom:60,
  },
  oknca:{
    display:"flex",
    justifyContent:"space-between",
  },
  oknce:{
    border:"5px rgb(0,0,0) solid",
    padding:10,
    height:100,
    width:"23%",
    userSelect:"none",
    minWidth:300,
    fontSize:24,
    background:"#fff",
    transition:"0.2s",
    cursor:"pointer",
    textAlign:"center",
    position:"relative",
    ":hover":{
      border:"5px rgb(7,236,236) solid",
    }
  },
  oknceActive:{
    userSelect:"none",
    border:"5px rgb(7,236,236) solid",
    padding:10,
    height:100,
    width:"23%",
    minWidth:300,
    fontSize:24,
    background:"#fff",
    transition:"0.2s",
    cursor:"pointer",
    textAlign:"center",
    position:"relative",
  },
  oknceText:{
    paddingRight:56,
    textAlign:"left",
  },
  arrDown:{
    width:50,
    marginTop:15,
  },
  arrDown3:{
    width:50,
    marginTop:45,
  },
  textWrapper:{
    paddingTop:30,
  },
  text:{
    overflow:"hidden",
    maxHeight:0,
    transition:"0.2s",
  },
  textActive:{
    overflow:"hidden",
    maxHeight:800,
    transition:"0.7s 0.3s",
  },








  section4Wrapper:{
    width:"calc(100% - 80px)",
    maxWidth:1200,
    margin:"0 auto",
    display:"flex",
    justifyContent:"space-between",
    paddingTop:50,
    paddingBottom:80,
    minHeight:600,
  },
  section4WrapperLeft:{
    width:"calc(50% - 40px)",
  },
  section4WrapperRight:{
    width:"calc(50% - 40px)",
  },



  blackBack:{
    background:"#333333",
  },
  section5Wrapper:{
    width:"calc(100% - 80px)",
    maxWidth:1200,
    margin:"0 auto",
    display:"flex",
    justifyContent:"space-between",
    paddingTop:50,
    alignItems:"center",
    paddingBottom:50,
  },
  section5Text:{
    fontSize:30,
    maxWidth:600,
    lineHeight:1.4,
    color:"#fff",
  },
  section5Button:{
    color:"#fff",
    padding:"15px 30px",
    fontWeight:500,
    border:"4px solid rgb(7,236,236)",
    cursor:"pointer",
    transition:"0.2s",
    ":hover":{
      boxShadow: "0px 2px 24px rgba(21, 23, 54, 0.15)",
    }
  },




  section6Wrapper:{
    width:"calc(100% - 80px)",
    maxWidth:1200,
    margin:"0 auto",
    display:"flex",
    justifyContent:"center",
    paddingTop:30,
    alignItems:"center",
    paddingBottom:50,
  },
  section6Logo:{
    width:100,
  },
  section6Text:{
    marginLeft:30,
  },

  mailto:{
    color:"#000",
  },









});

export default HomePage;
