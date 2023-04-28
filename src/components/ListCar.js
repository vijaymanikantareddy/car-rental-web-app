import React from 'react'
import Navibar from './Navbar'
import CarCard from './CarCard'
function ListCar() {
  return (
    <>
    <Navibar/>
    <center>
    <div className='container'>
        <div className='row'>
            <div className='col-md-3'> <CarCard/> </div>
            <div className='col-md-3'> <CarCard/> </div>
            <div className='col-md-3'> <CarCard/> </div>
            <div className='col-md-3'> <CarCard/> </div>
            
        </div>
    </div>
    </center>
    </>
  )
}

export default ListCar