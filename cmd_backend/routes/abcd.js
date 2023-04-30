// import React, { useState } from 'react';

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Report = () => {
//   const [data, setData] = useState([
//     {
//       id: 1,
//       college: 'ABC College',
//       building: 'Building A',
//       date: '2022-03-30',
//       status: 'Active',
//     },
//     {
//       id: 2,
//       college: 'XYZ College',
//       building: 'Building B',
//       date: '2022-03-31',
//       status: 'Inactive',
//     },
//     {
//       id: 3,
//       college: 'ABC College',
//       building: 'Building C',
//       date: '2022-04-01',
//       status: 'Active',
//     },
//   ]);
//   const [filteredData, setFilteredData] = useState(data);
//   const [collegeFilter, setCollegeFilter] = useState('');
//   const [buildingFilter, setBuildingFilter] = useState('');
//   const [fromDateFilter, setFromDateFilter] = useState('');
//   const [toDateFilter, setToDateFilter] = useState('');

//   const handleCollegeFilterChange = (event) => {
//     const { value } = event.target;
//     setCollegeFilter(value);
//     const filtered = data.filter((item) =>
//       item.college.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilteredData(filtered);
//   };

//   const handleBuildingFilterChange = (event) => {
//     const { value } = event.target;
//     setBuildingFilter(value);
//     const filtered = data.filter((item) =>
//       item.building.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilteredData(filtered);
//   };

//   const handleFromDateFilterChange = (event) => {
//     const { value } = event.target;
//     setFromDateFilter(value);
//     const filtered = data.filter(
//       (item) =>
//         item.date >= value &&
//         (toDateFilter === '' || item.date <= toDateFilter)
//     );
//     setFilteredData(filtered);
//   };

//   const handleToDateFilterChange = (event) => {
//     const { value } = event.target;
//     setToDateFilter(value);
//     const filtered = data.filter(
//       (item) =>
//         item.date <= value &&
//         (fromDateFilter === '' || item.date >= fromDateFilter)
//     );
//     setFilteredData(filtered);
//   };

//   return (
//     <>

//     <div>

      
//     </div>
//       <label style={{marginTop:'40px',marginLeft:'-500px'}}>
//         Filter by College:
//         <input type="text" value={collegeFilter} onChange={handleCollegeFilterChange} />
        
//       </label>
      
//       <label>
//         Filter by Building:
//         <input type="text" value={buildingFilter} onChange={handleBuildingFilterChange} />
//       </label>
//       <br />
//       <br/>
//       <label style={{marginTop:'40px',marginLeft:'-500px'}} >
//         Filter by From Date:
//         <input type="date" value={fromDateFilter} onChange={handleFromDateFilterChange} />
//       </label>
       
      
//       <br />

// <br></br>
// <br></br>
// <br></br>
// <br></br>
//         <div className='row' >
//           <div className='col-md-3'></div>
//          <div className='col-md-6' > <table style={{marginLeft:'40px'}}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>College</th>
//             <th>Building</th>
//             <th>Date</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.college}</td>
// <td>{item.building}</td>
// <td>{item.date}</td>
// <td>{item.status}</td>
// </tr>
// ))}
// </tbody>
// </table>

//     </div>
//           <div className='col-md-3'></div>
//         </div>


        


      
// </>
// );
// };

// export default Report;

import React,{useState, useEffect} from 'react';
import axios from 'axios';
const Report = () => {
  let [data,setData]=useState([]);
    
    useEffect(()=>{
      axios.get('http://localhost:1260/complaint_form').then((res)=>{
        setData(res.data)
      })
    },[])


  // const [data, setData] = useState([
  //   {
  //     id: 1,
  //     college: 'ABC College',
  //     building: 'Building A',
  //     date: '2022-03-30',
  //     status: 'Active',
  //   },
  //   {
  //     id: 2,
  //     college: 'XYZ College',
  //     building: 'Building B',
  //     date: '2022-03-31',
  //     status: 'Inactive',
  //   },
  //   {
  //     id: 3,
  //     college: 'XYZ College',
  //     building: 'Building B',
  //     date: '2022-03-31',
  //     status: 'Inactive',
  //   },
  //   {
  //     id: 4,
  //     college: 'ABC College',
  //     building: 'Building C',
  //     date: '2022-04-01',
  //     status: 'Active',
  //   },
  //   {
  //     id: 5,
  //     college: 'XYZ College',
  //     building: 'Building B',
  //     date: '2022-03-31',
  //     status: 'Inactive',
  //   },
  //   {
  //     id: 2,
  //     college: 'XYZ College',
  //     building: 'Building B',
  //     date: '2022-03-31',
  //     status: 'Inactive',
  //   },
  //   {
  //     id: 3,
  //     college: 'ABC College',
  //     building: 'Building C',
  //     date: '2022-04-01',
  //     status: 'Active',
  //   },
  //   {
  //     id: 2,
  //     college: 'XYZ College',
  //     building: 'Building B',
  //     date: '2022-03-31',
  //     status: 'Inactive',
  //   },
  //   {
  //     id: 3,
  //     college: 'XYZ College',
  //     building: 'Building B',
  //     date: '2022-03-31',
  //     status: 'Inactive',
  //   },
  //   {
  //     id: 4,
  //     college: 'ABC College',
  //     building: 'Building C',
  //     date: '2022-04-01',
  //     status: 'Active',
  //   },
  //   {
  //     id: 5,
  //     college: 'XYZ College',
  //     building: 'Building B',
  //     date: '2022-03-31',
  //     status: 'Inactive',
  //   },
  //   {
  //     id: 2,
  //     college: 'XYZ College',
  //     building: 'Building B',
  //     date: '2022-03-31',
  //     status: 'Inactive',
  //   },
  //   {
  //     id: 3,
  //     college: 'ABC College',
  //     building: 'Building C',
  //     date: '2022-04-01',
  //     status: 'Active',
  //   },
  //   {
  //     id: 2,
  //     college: 'XYZ College',
  //     building: 'Building B',
  //     date: '2022-03-31',
  //     status: 'Inactive',
  //   },
  //   {
  //     id: 3,
  //     college: 'XYZ College',
  //     building: 'Building B',
  //     date: '2022-03-31',
  //     status: 'Inactive',
  //   },
  //   {
  //     id: 4,
  //     college: 'ABC College',
  //     building: 'Building C',
  //     date: '2022-04-01',
  //     status: 'Active',
  //   },
  //   {
  //     id: 5,
  //     college: 'XYZ College',
  //     building: 'Building B',
  //     date: '2022-03-31',
  //     status: 'Inactive',
  //   },
  //   {
  //     id: 2,
  //     college: 'XYZ College',
  //     building: 'Building B',
  //     date: '2022-03-31',
  //     status: 'Inactive',
  //   },
  //   {
  //     id: 3,
  //     college: 'ABC College',
  //     building: 'Building C',
  //     date: '2022-04-01',
  //     status: 'Active',
  //   },
  // ]);
  const [filteredData, setFilteredData] = useState(data);
  const [collegeFilter, setCollegeFilter] = useState('');
  const [buildingFilter, setBuildingFilter] = useState('');
  const [typeofwork,setTypeofwork]=useState('');
  const [fromworkstatus, setFromworksstatus] = useState('');
  const [toDateFilter, setToDateFilter] = useState('');

  const handleCollegeFilterChange_college = (event) => {
    const { value } = event.target;
    setCollegeFilter(value);
    const filtered = data.filter((item) =>
      item.college.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleBuildingFilterChange_building = (event) => {
    const { value } = event.target;
    setBuildingFilter(value);
    const filtered = data.filter((item) =>
      item.building.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };
  const handleCollegeFilterChange_typeofwork = (event) => {
    const { value } = event.target;
    setTypeofwork(value);
    const filtered = data.filter((item) =>
      item.college.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleFromDateFilterChange_fromworkstatus = (event) => {
    const { value } = event.target;
    setFromworksstatus(value);
    const filtered = data.filter((item) =>
      item.college.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);

    // const { value } = event.target;
    // setFromworksstatus(value);
    // const filtered = data.filter(
    //   (item) =>
    //   const filtered = data.filter((item) =>
    //   item.college.toLowerCase().includes(value.toLowerCase())
    // );
    // setFilteredData(filtered);
  };

  const handleToDateFilterChange_datefilter = (event) => {
    const { value } = event.target;
    setToDateFilter(value);
    const filtered = data.filter(
      (item) =>
        item.date <= value &&
        (toDateFilter === '' || item.date >= toDateFilter)
    );
    setFilteredData(filtered);
  };

  return (
    <>
    <div style={{width:'1000px',border:'2px solid black',marginTop:'50px',marginLeft:'50px',padding:'10px',backgroundColor:'white',borderRadius:'50px'}}>
      <label style={{marginTop:'40px',color:'black'}}>
        Filter by College:
        <input type="text" value={collegeFilter} onChange={handleCollegeFilterChange_college} style={{border:'2px solid black'}}/>
        
      </label>
      <label style={{marginTop:'40px',color:'black'}}>
        Filter by Building:
        <input type="text" value={buildingFilter} onChange={ handleBuildingFilterChange_building} style={{border:'2px solid black'}}/>
        
      </label>
      <label style={{marginTop:'40px',color:'black'}}>
        Filter by Type of Work:
        <input type="text" value={typeofwork} onChange={handleCollegeFilterChange_typeofwork} style={{border:'2px solid black'}}/>
        
      </label>
      <label style={{marginTop:'40px',color:'black'}}>
        Filter by Work Status:
        <input type="text" value={fromworkstatus} onChange={handleFromDateFilterChange_fromworkstatus} style={{border:'2px solid black'}}/>
        
      </label>
      <label style={{marginTop:'40px',color:'black'}} >
        Filter by From Date:
        <input type="date" value={toDateFilter} onChange={handleToDateFilterChange_datefilter} style={{width:'150px',height:'50px',borderRadius:'10px',border:'2px solid black'}}/>
      </label>
      <br />
      <br/>
      
      </div>
       
      {/* <label>
        Filter by To Date:
        <input type="text" value={statusFilter} onChange={handleToDateFilterChange} />
      </label>  */}
      // <br />

{/* <br></br>
        <div className='row' >
          <div className='col-md-'></div>
         <div className='col-md-12' style={{overflow:'scroll',overflowY:'hidden',height:'1000px'}}> <table style={{marginLeft:'50px',width:'1000px',borderRadius:'20px'}}>
        <thead>
          <tr>
          <th>college</th>
            <th>bhavan</th>
            <th>location</th>
            <th>date</th>
            <th>Work</th>
            <th> priority</th>
            <th>Description</th>
            <th>remarks</th> */}
            {/* <th>Status</th> */}
        //   </tr>
        // </thead>
        {/* <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.college}</td>
<td>{item.building}</td>
<td>{item.date}</td>
<td>{item.status}</td>
</tr>
))}
</tbody> */}
{/* <tbody>
            {data.map((ele,index)=>{
              return (<tr>
                <td>{ele.college}</td>
                <td>{ele.building}</td>
                <td>{ele.location}</td>
                <td>{ele.date}</td>
                <td>{ele.work}</td>
                <td>{ele.priority}</td>
                <td>{ele.description}</td>
                <td>{ele.remarks}</td>
                
                </tr>)
            })}
          </tbody>
</table>

    </div>
          <div className='col-md-'></div>
        </div> */}


        


      
// </>
// );
// };

// export default Report;


