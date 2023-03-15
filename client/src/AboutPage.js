import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPTs } from "./ptsSlice";


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

      <h4>Therapist Available</h4>
      {allPTs.map((pt) => (
        <div key={pt.id}>
          <img src={pt.image} alt="pt" />
          <p>Name: {pt.name}</p>
          <p>Email: {pt.email}</p>
        </div>
      ))}

    </>
  );
}
export default AboutPage;