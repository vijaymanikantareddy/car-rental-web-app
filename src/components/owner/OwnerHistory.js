import React from 'react'

function OwnerHistory() {
    
  return (
    <div className='container'><center>
        <h1>Cars History</h1>
        <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col" variant='light'>S. No</th>
        <th scope="col">Model Name</th>
        <th scope="col">Model Number</th>
        <th scope="col">From</th>
        <th scope="col">To</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Rolls Royce</td>
        <td>125</td>
        <td>12-12-22</td>
        <td>14-12-22</td>
      </tr>
      <tr>
      <th scope="row">2</th>
        <td>Benz</td>
        <td>654</td>
        <td>29-12-22</td>
        <td>04-02-23</td>
      </tr>
      <tr>
      <th scope="row">3</th>
        <td>Hyundai</td>
        <td>354</td>
        <td>11-11-22</td>
        <td>14-12-22</td>
      </tr>
      <tr>
      <th scope="row">4</th>
        <td>Suzuki</td>
        <td>123</td>
        <td>13-02-22</td>
        <td>14-05-22</td>
      </tr>
    </tbody>
  </table>
  </center></div>
  )
}

export default OwnerHistory