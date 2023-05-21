import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../Hook/useTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToy from "./MyToy";

const MyToys = () => {
  /*  const {user} =useContext(AuthContext)
    const url =`http://localhost:5000/toyproduct?email=${user?.email}`
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
    fetch(`http://localhost:1500/toyproduct?email=${user?.email}&&sort=${sortOrder}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user, sortOrder]);

  const handleDelete = (id) => {
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
        fetch(`http://localhost:5000/toyproduct/${id}`, {
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

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.innerText);
  };

  useTitle("My Toys");
  return (
    <div className=" py-10 ">
      <div className="max-w-6xl mx-auto py-24">
        <h3 className="text-center mb-2 text-4xl font-semibold">My Toys</h3>
        <p className="text-center mb-8">
          This is my all toys products that's product i added
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
            <tbody>
              {myToys.map((toy,i) => (
                <tr>
                  <th>{1+i}</th>
                  <td>{toy.title}</td>
                  <td>{toy.category}</td>
                  <td onChange={handleSortOrderChange}>{parseFloat(toy?.price)}</td> 
                  <td>{toy.quantity}</td>
                  <td>
                    <button className="btn btn-xs btn-ghost">Update</button>
                  </td>
                  <td>
                    <button onClick={()=>handleDelete(toy._id)} className="btn btn-xs btn-warning">Delete</button>
                  </td>
                </tr>
              ))}

              {/*  {myToys.map((toy, i) => (
                  <MyToy
                    key={toy._id}
                    toy={toy}
                    index={i}
                    handleDelete={handleDelete}
                  />
                ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
