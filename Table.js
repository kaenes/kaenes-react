import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Table extends React.Component {
  
  render(){
    let myArray = ["John","Mick","Jane","Lola"];
    let myName = myArray.map( (name) =>  <li>{name}</li>);
    return(
      <div>
      <ul>
        {myName}  
      </ul>

      <table className="table table-hover bg-color-red">
      <thead>
      <tr>
      <th>Name</th>
      <th>Job</th>
      </tr>
      </thead>
      <tbody>
      <tr>
            <td className="text-danger">Charlie</td>
            <td>Janitor</td>
          </tr>
          <tr>
            <td>Mac</td>
            <td>Bouncer</td>
          </tr>
          <tr>
            <td>Dee</td>
            <td>Aspiring actress</td>
          </tr>
          <tr>
            <td>Dennis</td>
            <td>Bartender</td>
          </tr>
      </tbody>
      </table>
      </div>
    );
  }
}

export default Table;
