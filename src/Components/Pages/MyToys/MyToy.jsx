import React from 'react';

const MyToy = ({toy,index,handleDelete}) => {
    console.log(toy,index,handleDelete);
    return (
        <div>
           <tr>
        <th>1</th> 
        <td>{toy.title}</td> 
        <td>{toy.category}</td> 
        <td>{toy?.ratings}</td> 
        <td>{toy.quanity}</td> 
        <td><button className='btn btn-xs btn-ghost'>Update</button></td> 
        <td><button className='btn btn-xs btn-warning'>Delete</button></td>
      </tr>
        </div>
    );
};

export default MyToy;