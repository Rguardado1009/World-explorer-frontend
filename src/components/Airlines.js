import {React, useState, useEffect} from 'react'
import { Container, Grid } from "@material-ui/core";
import AirlinesCard from './AirlinesCard';
// import {useParams} from "react-router-dom"
const Airlines = () => {
const [airlines, setAirlines] = useState([]);

useEffect(()=>{
  fetch('http://localhost:3000/airlines')
  .then((r) => r.json())
  .then((airlines) => setAirlines(airlines));
}, [])

    return (
      <Container className="App-header" >
        <Grid container spacing="2">
{airlines.map(airline =>(
    <Grid item md={4} key={airline.id}>
      <AirlinesCard airline={airline}/>
    </Grid>
    ))}
  </Grid>
        </Container>
    )}
// {airline.flights.map((flight) => (flight.from))}
export default Airlines
