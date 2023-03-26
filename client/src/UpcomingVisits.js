import React from "react";
import { selectUser } from "./userSlice";
import { useSelector } from "react-redux";



function UpcomingVisits() {
    
  const user = useSelector(selectUser);

  // console.log(user)
  // console.log(user.appointments)
  // console.log(user.physical_therapists)

  
  const showAppt = user.appointments.map((appt) => {
    const ptName = user.physical_therapists.map((pt) => {
      if(pt.id === appt.physical_therapist_id)
      return pt.name
    })

    const uniqueNames = [...new Set(ptName)];

    return (
      <section key={appt.id}>
        <h2>______________</h2>
        <h4>PT Treatment</h4>
        <h4>{appt.date}</h4>
        <h4>Starts at: {appt.time}</h4>
        <h4>Physical Therapist: {uniqueNames}</h4>
      </section>
    )

  })


  return (
    <div>
      {showAppt}
    </div>
  );
}


export default UpcomingVisits;