import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../Hook/useTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToy from "./MyToy";
import Swal from "sweetalert2";

const MyToys = () => {
  /*  const {user} =useContext(AuthContext)
    const url =`https://playtime-paradise.vercel.app/toyproduct?email=${user?.email}`
    useEffect(()=>{
      fetch(url)
      .then(res=>res.json())
      .then(data => console.log(data))

    },[user,url]) */

  const [myToys, setMyToys] = useState([]);
  const { user } = useContext(AuthContext);
  const [sortOrder, setSortOrder] = useState("");
  useTitle("My Toys");

  useEffect(() => {
    fetch(`https://playtime-paradise.vercel.app/mytoys?email=${user?.email}&&sort=${sortOrder}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user, sortOrder]);

  const handleDelete = (id) => {
    console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/mytoys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
            }
            const remaining = myToys.filter((post) => post._id !== id);
            setMyToys(remaining);
          });
      }
    }); 
  };
const handleUpdateProduct=(id)=>{
  fetch(`https://playtime-paradise.vercel.app/mytoys/${id}`,{
    method:'PATCH',
    headers:{
      'Content-Type':'application/json',
      
    },
    body:JSON.stringify({status:updated})
  })
  .then(res=>res.json())
  .then(data => console.log(data))

}


  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.innerText);
  };

  useTitle("My Toys");
  return (
    <div className=" py-10 ">
      <div className="max-w-6xl mx-auto py-24">
        <h3 className="text-center mb-2 text-4xl font-semibold">My Toys</h3>
        <p className="text-center text-2xl mb-8">
          Welcome Back,<span className="font-bold">{user?.displayName}!</span> Your All Product that you've listed

        </p>
        <div className="my-5 text-black">
          <span className=" font-semibold text-md"> Sort By: </span>
          <select
            value={sortOrder}
            onChange={handleSortOrderChange}
            className="select select-primary  max-w-xs"
          >
            <option value="" disabled>
              Best Match
            </option>
            <option value="lowest">Price(Low to high)</option>
            <option value="highest">Price(High to low)</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>

            {/* table body */}
            <tbody>
              {myToys.map((toy,i) => (
                <tr key={toy._id}>
                  <th>{1+i}</th>
                  <td>{toy.title}</td>
                  <td>{toy.category}</td>
                  <td onChange={handleSortOrderChange}>$ {parseFloat(toy?.price)}</td> 
                  <td>{toy?.quantity}</td>
                  <td>
                    <button onClick={()=>handleUpdateProduct(toy?._id)} className="btn btn-xs btn-ghost">Update</button>
                  </td>
                  <td>
                    <button onClick={()=>handleDelete(toy._id)} className="btn btn-xs btn-warning">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
