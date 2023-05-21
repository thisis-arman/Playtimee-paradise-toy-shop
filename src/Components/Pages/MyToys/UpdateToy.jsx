import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useTitle from "../../Hook/useTitle";
import Swal from "sweetalert2";

const UpdateToy = () => {
    const mytoys = useLoaderData()
    console.log(mytoys)

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm(); 
      const onSubmit = (data) =>{ 
        console.log(data)
      }

      const handleUpdateProduct=(id)=>{
        console.log(id)
        fetch(`https://playtime-paradise.vercel.app/mytoys/${id}`,{
          method:'PATCH',
          headers:{
            'Content-Type':'application/json', 
          },
          body:JSON.stringify({status:updated})
        })
        /* .then(res=>res.json())
        .then(data => console.log(data)) */
      
      }
    
    return (
        <div>
           <div className="md:p-20 flex mx-auto shadow-2xl bg-base-200 my-4  border">
      <div className="flex mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-3xl font-bold mb-8 text-center ">UPDATE PRODUCT__</h2>
<div className="md:flex justify-between my-4 gap-5">
<label >Title
        <input 
        defaultValue={mytoys?.title}
        className="pr-20 pl-4 py-2 bg-gray-200 block"
        type="text" 
        placeholder="Title" 
        {...register("title", {})} />
</label>
<label htmlFor="">Seller Name
        <input
        defaultValue={mytoys?.sellerName}
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
        defaultValue={mytoys?.sellerEmail}
        className="pr-20 pl-4 py-2 bg-gray-200 block"
          type="email"
          placeholder="Seller Email"
          {...register("sellerEmail", {})}
        />
        </label>
<label htmlFor="">Price   
   <input defaultValue={mytoys?.price} className="pr-20 pl-4 py-2 bg-gray-200 block" type="number" placeholder="Price" {...register("price", {})} />
   </label>
     </div>
  

<div className="md:flex justify-between my-4 gap-5">
<label htmlFor="">category
        <select defaultValue={mytoys?.category} className="pr-20 pl-4 py-2 bg-gray-200  block" {...register("category")}>
          <option value="Animal Toys">Animal Toys</option>
          <option value="Plush Toys">Plush Toys</option>
          <option value="Mythical Creatures">Mythical Creatures</option>
          <option value="Prehistoric Toys">Prehistoric Toys</option>
          <option value="Plush Toy">Plush Toy</option>
        </select>
        </label>

        <label htmlFor="">Quantity
        <input
        defaultValue={mytoys?.quantity}
        className="pr-20 pl-4 py-2 bg-gray-200 block"
          type="number"
          placeholder="Quanity"
          {...register("quanity", {})}
        />
        </label>
        
</div>
       
       <div className="md:flex justify-between my-4 gap-5">
       <label htmlFor="">Description 
        <textarea 
        defaultValue={mytoys?.description}
        className="pr-20 pl-4 py-2 bg-gray-200 block" {...register("description", {})} />
        </label>
       <label htmlFor="">Image
        <input
        defaultValue={mytoys?.imageUrl}
        className="pr-20 pl-4 py-2 bg-gray-200 block"
          type="text"
          placeholder="Image Url"
          {...register("imageUrl", {})}
        />
        </label>
        
       </div>

        <div className="flex justify-center ">
        <input onClick={()=>handleUpdateProduct(mytoys?._id)} className="btn btn-accent my-4 w-full" type="submit" value='Update Product' />
        </div>
      </form>
      </div>
    </div>
        </div>
    );
};

export default UpdateToy;