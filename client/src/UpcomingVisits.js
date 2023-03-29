import React from "react";
import { selectUser, deleteAppointment, deletePhysicalTherapist } from "./userSlice";
import { appointmentDelete } from "./appointmentSlice";
import { useSelector, useDispatch } from "react-redux";



function UpcomingVisits() {
    
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  function handleDeleteAppointment(e){

    const apptId = parseInt(e.target.value) 
    const ptId = parseInt(e.target.name)

    // user function
    dispatch(deleteAppointment(apptId));

    // delete request
    dispatch(appointmentDelete(apptId));

    if(user.appointments.filter((appt) => (appt.physical_therapist_id === ptId)).length === 1){
      dispatch(deletePhysicalTherapist(ptId));
    }

  }

  
  const showAppt = user.appointments.map((appt) => {
    
    // eslint-disable-next-line
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