import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../Hook/useTitle';

const AllToy = () => {
    useTitle('All Toys')
    const [searchQuery, setSearchQuery] = useState('');
    const products =useLoaderData()
    console.log(products)

    const limitProducts = (data, limit) => {
        return data.slice(0, limit);
      };
    
      // Function to handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
      const limitedProducts = limitProducts(filteredProducts, 20);
    
    return (
        <div>
            <div className="form-control my-4 w-full text-center md:mx-10">
  <div className="input-group mx-auto">
    <input 
    type="text" 
    placeholder="Search by title" 
    className="input bg-gray-200  w-1/3"
    value={searchQuery}
    onChange={handleSearchChange} />
    <button className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
           <div className="overflow-x-auto my-8">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>Title</th> 
        <th>Seller</th> 
        <th>Category</th> 
        <th>Price</th> 
        <th>Quantity</th> 
        <th>Details</th>
      </tr>
    </thead> 


    <tbody>

     
     {/*  <tr>
        <th>4</th> 
        <td>Marjy Ferencz</td> 
        <td>Office Assistant I</td> 
        <td>Rowe-Schoen</td> 
        <td>Russia</td> 
        <td>3/25/2021</td> 
        <td>Crimson</td>
      </tr> */}
      {
        limitedProducts.map((product,i) => (
          <tr key={product.id}>
            <th scope="row">{1+i}</th> 
            <td>{product.title}</td> 
            <td>{product.sellerName}</td> 
            <td>{product.category}</td> 
            <td>{product.price}</td> 
            <td>{product.quantity}</td> 
            <td><button className='btn btn-xs btn-outline btn-success'><Link to={`toy/${product._id}`}>Details</Link></button></td>
          </tr>
        ))
      }
    </tbody> 
  </table>
</div>
        </div>
    );
};

export default AllToy;