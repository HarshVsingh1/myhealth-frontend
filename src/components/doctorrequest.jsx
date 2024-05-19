
import axios from 'axios';
import { useEffect, useState } from 'react';

import './clienthome.css'
import DoctorCard from './doctorcard';
import DoctorRequestCard from './doctorrequestcard';







export default function DoctorRequest() { 
 

    const [doctors , setDoctors] = useState([])
   
    useEffect(() => {
            const fetch = async() => {
                      const response = await axios.get('http://localhost:3000/doctors/application')
                      console.log(response)
                      if(response){
                       
                        console.log(response.data.doctors)
                        setDoctors(response.data.doctors) 
                      }
            } 

            fetch()
    },[]) 

    if(!doctors) {
        return (
            <div>

            </div>
        )
    } else {
        return (
            <div className='doctorCardContainer'  > 


      {/* Map over the doctors array and render DoctorCard for each doctor */}
      {doctors.map((doctor, index) => (
        <DoctorRequestCard key={index} doctor={doctor} />
      ))}
   

            </div>
        )
    }


}


