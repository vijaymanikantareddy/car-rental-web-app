import "./table.css";

function View_All_Owners() {
  return (
    <div className="App">
      <h1 align="center">VIEW ALL USERS</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Receipt Id</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>N.Durga</td>
            <td>Prasad</td>
            <td>ndp@gmail.com</td>
            <td>32</td>
            <td>Male</td>
            <td>1001</td>
          </tr>
          <tr>
            <td>2</td>
          <td>Simhadri</td>
            <td>G</td>
            <td>Simhadri@gmail.com</td>
            <td>35</td>
            <td>Male</td>
            <td>1002</td>
          </tr>
          <tr>
            <td>3</td>
          <td>durgaprasad</td>
            <td>J</td>
            <td>durgaprasad@gmail.com</td>
            <td>33</td>
            <td>Male</td>
            <td>1003</td>
          </tr>
          <tr>
            <td>4</td>
          <td>Babji</td>
            <td>Neelam</td>
            <td>babjineelam@gmail.com</td>
            <td>37</td>
            <td>Male</td>
            <td>1004</td>
          </tr>
          <tr>
            <td>5</td>
          <td>Marni</td>
            <td>Srinu</td>
            <td>marnisrinu@gmail.com</td>
            <td>35</td>
            <td>Male</td>
            <td>1003</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default View_All_Owners;