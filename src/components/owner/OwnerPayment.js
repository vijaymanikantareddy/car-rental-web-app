import React from 'react'

function OwnerPayment() {
    
  return (
    <div className='container'><center>
        <h1>Payments Page</h1>
        <table className="table table-striped table-dark">
    <thead>
      <tr>
        <th scope="col" variant='light'>S. No</th>
        <th scope="col">Model Name</th>
        <th scope="col">Model Number</th>
        <th scope="col">Bill</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Rolls Royce</td>
        <td>125</td>
        <td>45200</td>
      </tr>
      <tr>
      <th scope="row">2</th>
        <td>Benz</td>
        <td>654</td>
        <td>41300</td>
      </tr>
      <tr>
      <th scope="row">3</th>
        <td>Hyundai</td>
        <td>354</td>
        <td>9580</td>
      </tr>
      <tr>
      <th scope="row">4</th>
        <td>Suzuki</td>
        <td>123</td>
        <td>9990</td>
      </tr>
    </tbody>
  </table>
  </center></div>
  )
}

export default OwnerPayment