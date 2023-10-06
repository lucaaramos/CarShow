import React from 'react'
import GetCar from '../hooks/getCar'
import CarList from '../components/carList'

export default function Home() {
    const { cars } = GetCar()
  return (
    <div>
    <h1>Car Show</h1>
    <CarList cars={cars}/>
    </div>
  )
}
