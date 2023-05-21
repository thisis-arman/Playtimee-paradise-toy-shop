import React, { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../../Provider/AuthProvider";
const ProductsCard = ({ product }) => {
  const {user} =useContext(AuthContext)

  const notify = () => toast("You Can't see Details without Login");

  
//   console.log(" fetching data useing loader", loaddedproducts);

//   console.log(product);
console.log(product)
  const {_id, description, imageUrl, price, ratings, title, category } =
    product;
  return (
    <div className="p-4 card-compact w-96 bg-base-100 shadow-2xl">
      <figure>
        <img className="h-52 object-cover w-full" src={imageUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <p>Description: {description}</p>
        <p>Price : ${price}</p>
        <p>Ratings: {ratings}</p>
        {/* <p>{ratings}</p> */}
        <div className="card-actions justify-end">
            {(user?.email) ?<>
          <button  className="btn btn-primary">
              <Link to={`/products/${_id}`}>Details</Link>
            </button>
            </>
            :<>
            <button onClick={notify} className="btn btn-primary">
              <Link to={`/products/${_id}`}>Details</Link>
            </button>
           
            </>
            }
            <ToastContainer/>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
