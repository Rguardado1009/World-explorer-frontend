import {React, useState, useEffect} from 'react'
import { Container, Grid } from "@material-ui/core";
import FlightsCard from './FlightsCard';

// import {useParams} from "react-router-dom"
const Flights = () => {
const [flights, setFlights] = useState([]);

useEffect(()=>{
  fetch('http://localhost:3000/flights')
  .then((r) => r.json())
  .then((flights) => setFlights(flights));
}, [])

    return (
      <Container className="App-header" >
        <Grid container spacing="3">
{flights.map(flight =>(
    <Grid item lg= {4} md={4} key={flight.id}>
      <FlightsCard flights={flight}/>
                
      </Grid>
    ))}
  </Grid>
        </Container>
    )}
// {airline.flights.map((flight) => (flight.from))}
export default Flights
