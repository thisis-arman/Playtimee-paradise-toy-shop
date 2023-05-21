import React from "react";
import { useForm } from "react-hook-form";
import useTitle from "../../Hook/useTitle";
import Swal from "sweetalert2";

const AddToy = () => {
    useTitle('Add product');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); 
  const onSubmit = (data) =>{ 
    data.price =parseFloat(data.price);
    console.log(data)
    fetch('https://playtime-paradise.vercel.app/toyproduct',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data =>{

      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Product Added Successfully!',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    }
    )
      
  }
  console.log(errors);
 

  return (
    <div className="md:p-20 flex mx-auto shadow-2xl bg-base-200 my-4  border">
      <div className="flex mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-3xl font-bold mb-8 text-center ">ADD NEW PRODUCT__</h2>
<div className="md:flex justify-between my-4 gap-5">
<label >Title
        <input 
        className="pr-20 pl-4 py-2 bg-gray-200 block"
        type="text" 
        placeholder="Title" 
        {...register("title", {})} />
</label>
<label htmlFor="">Seller Name
        <input
        className="pr-20 pl-4 py-2 bg-gray-200 block"
          type="text"
          placeholder="Seller Name"
          {...register("sellerName", {})}
        />
        </label>
        
</div>
     
     <div className="md:flex justify-between my-4 gap-5">
     <label htmlFor="">Seller Email
        <input
        className="pr-20 pl-4 py-2 bg-gray-200 block"
          type="email"
          placeholder="Seller Email"
          {...register("sellerEmail", {})}
        />
        </label>
<label htmlFor="">Price   
   <input className="pr-20 pl-4 py-2 bg-gray-200 block" type="number" placeholder="Price" {...register("price", {})} />
   </label>
     </div>
  

<div className="md:flex justify-between my-4 gap-5">
<label htmlFor="">category
        <select className="pr-20 pl-4 py-2 bg-gray-200  block" {...register("category")}>
          <option value="Animal Toys">Animal Toys</option>
          <option value="Plush Toys">Plush Toys</option>
          <option value="Mythical Creatures">Mythical Creatures</option>
          <option value="Prehistoric Toys">Prehistoric Toys</option>
          <option value="Plush Toy">Plush Toy</option>
        </select>
        </label>

        <label htmlFor="">Quantity
        <input
        className="pr-20 pl-4 py-2 bg-gray-200 block"
          type="number"
          placeholder="Quanity"
          {...register("quanity", {})}
        />
        </label>
        
</div>
       
       <div className="md:flex justify-between my-4 gap-5">
       <label htmlFor="">Description 
        <textarea className="pr-20 pl-4 py-2 bg-gray-200 block" {...register("description", {})} />
        </label>
       <label htmlFor="">Image
        <input
        className="pr-20 pl-4 py-2 bg-gray-200 block"
          type="text"
          placeholder="Image Url"
          {...register("imageUrl", {})}
        />
        </label>
        
       </div>

        <div className="flex justify-center ">
        <input className="btn btn-accent my-4 w-full" type="submit" value='Add Product' />
        </div>
      </form>
      </div>
    </div>
  );

};

export default AddToy;
