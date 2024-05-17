

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
})); 







export default function AppointmentTables() {
  const [rows ,setRows] = useState([])

const userEmail = sessionStorage.getItem('email')

useEffect(() => { 

  const data = {
    userEmail
  }

  const fetch = async () => {
               
    const response = await axios.post('http://localhost:3000/user/appointments', data)
    setRows(response.data)
  console.log(response)


  } 

  fetch()

 
 
} ,[]) 

  
if(!rows) {
  return (
      <div>
                "hi"
      </div>
  )
} else {

  return (  
    <TableContainer  style={{overflowY : "scroll" , height : '400px'}}   component={Paper}>
      <Table sx={{ minWidth: 700  }} stickyHeader aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell>Docter Name</StyledTableCell>
            <StyledTableCell align="right">date</StyledTableCell>
            <StyledTableCell align="right">time</StyledTableCell>
            <StyledTableCell align="right">status</StyledTableCell> 
            
            
          </TableRow>
        </TableHead>
        <TableBody   >
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.doctorName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.time}</StyledTableCell>
              <StyledTableCell align="right">
              <div style={{display : "flex" , justifyContent : "flex-end"  , gap : "10px"}} > 

               {row.status ? (
                <div  >
                <Button variant="contained">PAY</Button>

                </div>

               ) : (  <div>
                <Button  sx={{backgroundColor : "red" , '&:hover' : {backgroundColor : "darkred"}}} variant="contained">Pending</Button>
                </div>
              ) }

                   
                  
                </div>
              </StyledTableCell>

             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
}