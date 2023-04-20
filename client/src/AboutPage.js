import React from "react";
import ptPic5 from './ptPic5.jpg'; 
import ptPic6 from './ptPic6.gif'; 
import ptPic7 from './ptPic7.gif'; 


function AboutPage(){

  return (
    <>

      <div style={{height: "350px", width: "350px", marginLeft: "570px", marginTop: "50px", backgroundColor: "darkgray", textAlign: "center", borderRadius: "200px", color: "white", border: "2px solid rgba(255,255,255,0.1)", boxShadow: "0 0 40px rgba(8,7,16,0.6)"}}>
        <br/>
        <br/>
        <h1><u>About Us</u></h1>
        <img src={ptPic6} alt="ptPic1" />
      </div>

      <div style={{textAlign: "center", backgroundColor: "darkgray", position: "absolute",  marginTop: "-50px", color: "white", borderRadius: "50px", width: "75%", marginLeft: "200px", border: "2px solid rgba(255,255,255,0.1)", boxShadow: "0 0 40px rgba(8,7,16,0.6)"}}>
        <h2>Optimized schedule along with allowing patients\therapist to view their appointments and therapist can communicate various information that consist of inspirational emails, workouts, store recommendations.</h2>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <div className="categoryGrid3">
        <h2 style={{fontSize: "xxx-large", color: "white", marginTop: "70px", marginLeft: "50px",}}>Everyday: 9am-5pm <br/> <br/> Treatment session: 1hr</h2>

        <img src={ptPic7} alt="ptPic7" style={{height: "400px", width: "400px", borderRadius: "200px", marginTop: "18px"}}/>
      </div>


      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>



      <div className="categoryGrid4">
        <h3>
          Orthopedic Conditions Treated-
          <ul>
            <li>abductors</li>
            <li>abs</li>
            <li>adductors</li>
            <li>biceps</li>
            <li>calves</li>
            <li>cardiovascular system</li>
            <li>delts</li>
            <li>forearms</li>
            <li>glutes</li>
            <li>hamstrings</li>
            <li>lats</li>
            <li>levator scapulae</li>
            <li>pectorals</li>
            <li>quads</li>
            <li>serratus anterior</li>
            <li>spine</li>
            <li>traps</li>
            <li>triceps</li>
            <li>triceps</li>
          </ul>
        </h3>

        <img style={{height:"600px", width:"600px", borderRadius: "222px"}} src={ptPic5} alt="ptPic5" />

      </div>

    </>
  );
}
export default AboutPage;