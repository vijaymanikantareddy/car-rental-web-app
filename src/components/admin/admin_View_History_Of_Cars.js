import "./table.css";

function view_History_Of_Cars() {
  return (
    <div className="App">
      <h1 text-align="center">VIEW ALL THE HISTORY OF CARS</h1>
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
            <td>rekha</td>
            <td>konjarla</td>
            <td>rekhakonjarla@gmail.com</td>
            <td>32</td>
            <td>Female</td>
            <td>1223</td>
          </tr>
          <tr>
            <td>2</td>
          <td>vijay</td>
            <td>satti</td>
            <td>vijaysatti@gmail.com</td>
            <td>35</td>
            <td>Male</td>
            <td>1250</td>
          </tr>
          <tr>
            <td>3</td>
          <td>divya</td>
            <td>divya</td>
            <td>rekhakonjarla@gmail.com</td>
            <td>33</td>
            <td>Female</td>
            <td>1262</td>
          </tr>
          <tr>
            <td>4</td>
          <td>durga</td>
            <td>prasad</td>
            <td>durgaprasad@gmail.com</td>
            <td>37</td>
            <td>Male</td>
            <td>1040</td>
          </tr>
          <tr>
            <td>5</td>
          <td>rama</td>
            <td>krishna</td>
            <td>ramakrishna@gmail.com</td>
            <td>35</td>
            <td>Male</td>
            <td>1253</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default view_History_Of_Cars;