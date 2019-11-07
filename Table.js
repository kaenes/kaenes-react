import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Table extends React.Component {

  
  render(){
  const { characterData, removeCharacter } = this.props;
  console.log(this.props);
    const TableHead = () => {
        return(
             <thead>
        <tr> 
          <th>Name </th>
          <th>Job </th>
        </tr>
      </thead>
        );
    };
    const TableBody = props => {
      const rows = props.characterData.map((row,index) => {
        return(
        <tr key={index}>
        <td> {row.name} </td>
        <td> {row.job} </td>
        <td> <button onClick={ () => props.removeCharacter(index)}>Delete </button> </td>
        </tr>
        );
     
      });
      return <tbody>{rows}</tbody>
      
    }
    return(
      <div>
      <table className="table table-hover bg-color-red">
      <TableHead />
      <TableBody characterData = {characterData} removeCharacter = { removeCharacter}/>
      </table>
      </div>
    );
  }
}

export default Table;
