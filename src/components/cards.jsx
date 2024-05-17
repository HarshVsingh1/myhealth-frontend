import './cards.css'  
import clock from '../assets/clock.gif'
import care from '../assets/care.gif' 
import emergency from '../assets/emergency.gif'
export default function Card() {
    return (
        <> 
        <div id='mainCardContainer' >

        
            <div className='cardContainer' >
                              <div>  <img className='icon' src={clock} alt="icon" /> </div>
                              <div className='cardTitle' > 
                                24 Hours Service
                              </div>
                              <div className='cardDescription' >
                              Access healthcare anytime, anywhere. 
                               Our platform ensures you can schedule appointments at your convenience, day or night, for seamless medical care.
                              </div>
            </div>  

            <div className='cardContainer' >
                              <div>  <img className='icon' src={care} alt="icon" /> </div>
                              <div className='cardTitle' > 
                              Expert Care
                              </div>
                              <div className='cardDescription' >
                              Trust in our team of qualified doctors. 
                               Our professionals bring years of experience and expertise to every consultation, 
                               ensuring you receive the highest quality care for your health needs.
                              </div>
            </div>

            <div className='cardContainer' >
                              <div>  <img className='icon' src={emergency} alt="icon" /> </div>
                              <div className='cardTitle' > 
                              Emergency Services
                              </div>
                              <div className='cardDescription' >
                              When seconds count, rely on us for swift emergency care. 
                              Our dedicated team is equipped to handle urgent medical situations,
                               providing you with peace of mind in times of crisis.
                              </div>
            </div> 

            <div className='cardContainer' >
                              <div>  <img className='icon' src={emergency} alt="icon" /> </div>
                              <div className='cardTitle' > 
                              Quick Appointments
                              </div>
                              <div className='cardDescription' >
                              Skip the wait and secure your spot with just a click. 
                              Schedule your appointment swiftly for personalized care and convenience.
                               Your health matters, and we're here to make it easy for you.
                              </div>
            </div>
         </div>
        </>
    )
}