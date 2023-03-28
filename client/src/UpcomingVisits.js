import React from "react";
import { selectUser } from "./userSlice";
// import { selectUser, deleteAppointment, deletePhysicalTherapist } from "./userSlice";
// import { appointmentDelete } from "./appointmentSlice";
import { useSelector } from "react-redux";
// import { useSelector, useDispatch } from "react-redux";



function UpcomingVisits() {
    
  const user = useSelector(selectUser);

  // const dispatch = useDispatch();


  // console.log(user)
  // console.log(user.appointments)
  // console.log(user.physical_therapists)

  function handleDeleteAppointment(e){
    // const apptId = e.target.value
    // const ptId = e.target.name

    // console.log(apptId)
    // console.log(ptId)

    // dispatch(deleteAppointment(apptId));
    // dispatch(deletePhysicalTherapist(ptId));

    // dispatch(appointmentDelete(apptId));

  }

  
  const showAppt = user.appointments.map((appt) => {
    
    // eslint-disable-next-line
    const ptName = user.physical_therapists.map((pt) => {
      if(pt.id === appt.physical_therapist_id)
      return pt.name
    })

    // console.log(ptName)
    const uniqueNames = [...new Set(ptName)];
    // console.log(uniqueNames)


    return (
      <section key={appt.id}>
        <h2>______________</h2>
        <h4>PT Treatment</h4>
        <h4>{appt.date}</h4>
        <h4>Starts at: {appt.time}</h4>
        <h4>Duration: 1 hr</h4>
        <h4>Physical Therapist: {uniqueNames}</h4>
        <button value={appt.id} name={appt.physical_therapist_id} onClick={handleDeleteAppointment}>🗑</button>
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