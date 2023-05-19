import React from "react";
import { useForm } from "react-hook-form";

const AddToy = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="md:p-20 shadow-2xl bg-base-200 my-4 md:w-2/3 border">
      <form onSubmit={handleSubmit(onSubmit)}>
<div className="flex justify-between my-4 gap-5">
<label >Title
        <input 
        className="pr-20 pl-4 py-2 bg-gray-200 block"
        type="text" 
        placeholder="Title" 
        {...register("Title", {})} />
</label>
<label htmlFor="">Seller Name
        <input
        className="pr-20 pl-4 py-2 bg-gray-200 block"
          type="text"
          placeholder="Seller Name"
          {...register("Seller Name", {})}
        />
        </label>
        
</div>
     
     <div className="flex justify-between my-4 gap-5">
     <label htmlFor="">Seller Email
        <input
        className="pr-20 pl-4 py-2 bg-gray-200 block"
          type="email"
          placeholder="Seller Email"
          {...register("Seller Email", {})}
        />
        </label>
<label htmlFor="">Price   
   <input className="pr-20 pl-4 py-2 bg-gray-200 block" type="number" placeholder="Price" {...register("Price", {})} />
   </label>
     </div>
  

<div className="flex justify-between my-4 gap-5">
<label htmlFor="">category
        <select className="pr-20 pl-4 py-2 bg-gray-200  block" {...register("Category")}>
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
          {...register("Quanity", {})}
        />
        </label>
        
</div>
       
       <div className="flex justify-between my-4 gap-5">
       <label htmlFor="">Description 
        <textarea className="pr-20 pl-4 py-2 bg-gray-200 block" {...register("Description", {})} />
        </label>
       <label htmlFor="">Image
        <input
        className="pr-20 pl-4 py-2 bg-gray-200 block"
          type="text"
          placeholder="Image Url"
          {...register("Image Url", {})}
        />
        </label>
        
       </div>

        <input className="btn btn-accent" type="submit" value='Add Product' />
      </form>
    </div>
  );
};

export default AddToy;
