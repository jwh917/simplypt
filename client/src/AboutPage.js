import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPTs } from "./ptsSlice";
import ptPic5 from './ptPic5.jpg'; 
import ptPic6 from './ptPic6.gif'; 
import ptPic7 from './ptPic7.gif'; 


function AboutPage(){

  const allPTs = useSelector((state) => state.pts.entities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPTs());
  }, [dispatch]);

  // console.log(allPTs)
  
  return (
    <>
      <h1>About</h1>

      <img src={ptPic6} alt="ptPic1" />

      <h2>Optimized schedule along with allowing patients\therapist to view their appointments and therapist can communicate various information that consist of inspirational emails, workouts, store recommendations.</h2>
      
      <h3>Muscles Treated</h3>
      <h3>
        <ul>
          <li>abdominals</li>
          <li>abductors</li>
          <li>adductors</li>
          <li>biceps</li>
          <li>calves</li>
          <li>chest</li>
          <li>forearms</li>
          <li>glutes</li>
          <li>hamstrings</li>
          <li>lower back</li>
          <li>middle back</li>
          <li>neck</li>
          <li>quadriceps</li>
          <li>traps</li>
          <li>triceps</li>
        </ul>
      </h3>

      <img src={ptPic7} alt="ptPic7" />


      <br/>
      <br/>


      <h4>Therapist Available</h4>
      {allPTs.map((pt) => (
        <div key={pt.id}>
          <img style={{height:"100px", width:"100px"}} src={pt.image} alt="pt" />
          <p>Name: {pt.name}</p>
          <p>Email: {pt.email}</p>
        </div>
      ))}

      <br/>
      <br/>
      <br/>
      <br/>


      <img style={{height:"600px", width:"600px"}} src={ptPic5} alt="ptPic5" />


    </>
  );
}
export default AboutPage;