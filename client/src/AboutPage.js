import React from "react";
// import React, {useEffect} from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPTs } from "./ptsSlice";
import ptPic5 from './ptPic5.jpg'; 
import ptPic6 from './ptPic6.gif'; 
import ptPic7 from './ptPic7.gif'; 
// import { selectUser } from "./userSlice";


function AboutPage(){

  // const allPTs = useSelector((state) => state.pts.entities);

  // const user = useSelector(selectUser);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchPTs());
  // }, [dispatch]);

  // const showAllPTs = allPTs.map((pt) => {  
  //   return (
  //   <div key={pt.id}>
  //     <img style={{height:"100px", width:"100px"}} src={pt.image} alt="pt" />
  //     <p>Name: {pt.name}</p>
  //     <p>Email: {pt.email}</p>
  //   </div>
  //   )})
  
  return (
    <>
      <h1>About Us</h1>

      <img src={ptPic6} alt="ptPic1" />

      <h2>Optimized schedule along with allowing patients\therapist to view their appointments and therapist can communicate various information that consist of inspirational emails, workouts, store recommendations.</h2>

      <h2>Everyday: 9am-5pm <br/> Treatment session: 1hr</h2>

      <h3>Muscles Treated</h3>
      <h3>
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

      <img src={ptPic7} alt="ptPic7" />

      <br/>
      <br/>


      <h4>Therapist Available</h4>
      {/* {user ? showAllPTs : ""} */}
      {/* {allPTs.map((pt) => (
        <div key={pt.id}>
          <img style={{height:"100px", width:"100px"}} src={pt.image} alt="pt" />
          <p>Name: {pt.name}</p>
          <p>Email: {pt.email}</p>
        </div>
      ))} */}

      <br/>
      <br/>
      <br/>
      <br/>


      <img style={{height:"600px", width:"600px"}} src={ptPic5} alt="ptPic5" />


    </>
  );
}
export default AboutPage;