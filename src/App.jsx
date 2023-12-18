import React from 'react';

let table = ["Sr", "First Name", "Last Name"];
let datatable = [
  {
    sr: 1,
    firstName: "Subhan",
    lastname: "Mehmood",
  },
  {
    sr: 2,
    firstName: "Zain",
    lastname: "Mehmood",
  },
  {
    sr: 3,
    firstName: "Faizan",
    lastname: "Mehmood",
  },
];

const App = () => {
  return (
    <div>
      <table className='bg-light p-2 mb-3'>
        <thead>
          <tr>
            {table.map(t => <th style={{ textAlign: 'right' }}>{t}</th>)}
          </tr>
        </thead>
        <tbody>
          {datatable.map((dt) => (
            <tr key={dt.sr}>
              <td style={{ textAlign: 'right' }}>{dt.sr}</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dt.firstName}</td>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dt.lastname}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
