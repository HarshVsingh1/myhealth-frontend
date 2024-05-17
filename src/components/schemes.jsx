
import { Button } from '@mui/material'
import './schemes.css'
export default function() {
    return (
        <>
          <div id='schemesContainer' >
          <div>
                           
                           <div id="title" >
                            <div id="block" >
                                    
                            </div>
                            <div id='titleText' >
                            Schemes
                            </div>
                     </div>
                     <div id="subTitleAndTime" >
                            <div id='subTitleAndTitleText' >
                            Schemes provided by the Goverment of India
                            </div>
                     </div> 
                      </div>
              <div className='schemeCardContainer' >
                      <div className='schemesCard' >
                              <div className='schemeTitle' >
                              Ayushman Bharat Yojana
                              </div> 
                              <div>
                              Ayushman Bharat or Pradhan Mantri Jan Arogya Yojana (PMJAY) is designed to provide financial assistance to low-income households for health care.

The scheme will provide coverage for secondary and tertiary hospital care to promote healthcare holistically. The scheme has two major initiatives: development of Health and Wellness Centres (HWCs) and the Pradhan Mantri Jan Arogya Yojana (PM-JAY).  

It covers the cost of hospitalization including pre- and post-hospitalization (recovery and follow-up treatment) and medical expenses. Every family under the scheme can claim up to Rs.5 lakh in a year.
                              </div> 
                              <div>
                              <Button  onClick={() => {window.open('https://nha.gov.in/PM-JAY#:~:text=Ayushman%20Bharat%20PM%2DJAY%20is,the%20bottom%2040%25%20of%20the', '_blank')}} sx={{fontSize : "10px" , height : "20px" }} variant="contained">Learn more </Button>
                              </div>
                      </div> 
                

               

                
                      <div className='schemesCard' >
                              <div className='schemeTitle' >
                              Biju Swasthya Kalyan Yojana
                              </div> 
                              <div>
                              The Biju Swasthya Kalyan Yojana (BSKY) was launched to provide Universal Health coverage to economically vulnerable families.
                               The scheme was introduced on 15 August 2018 by the Chief Minister of Odisha, Shri Naveen Patnaik.
                                The plan has two components, and there are 183 private hospitals empaneled within and outside the state under this scheme.
                                 Here are some more details that you should know about Biju Swasthya Kalyan Yojana.
                              </div> 
                              <div>
                              <Button  onClick={() => {window.open('https://bsky.odisha.gov.in/bsky/home', '_blank')}} sx={{fontSize : "10px" , height : "20px" }} variant="contained">Learn more </Button>
                              </div>
                      </div>

                      <div className='schemesCard' >
                              <div className='schemeTitle' >
                              Rashtriya Swasthya Bima Yojana Health Scheme
                              </div> 
                              <div>
                              The Rashtriya Swasthya Bima Yojana provides a health insurance cover to individuals or families who are below the poverty line and workers belonging to unorganised sectors.
                               The scheme offers a sum insured of Rs.30,000 on a floater basis.
                              </div> 
                              <div>
                              <Button  onClick={() => {window.open('https://nha.gov.in/PM-JAY#:~:text=Ayushman%20Bharat%20PM%2DJAY%20is,the%20bottom%2040%25%20of%20the', '_blank')}} sx={{fontSize : "10px" , height : "20px" }} variant="contained">Learn more </Button>
                              </div>
                      </div> 

              </div>      
          </div>
        </>
    )
}