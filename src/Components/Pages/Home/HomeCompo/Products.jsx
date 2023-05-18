import React from "react";

const ProductsCard = ({product}) => {
    console.log(product)
    const {description,id ,imageUrl,price,ratings,title,category}=product;
  return (
   

<div className="p-2 card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className="h-52 object-cover w-full" src={imageUrl} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <p>{price}</p>
    <p>{ratings}</p>
    {/* <p>{ratings}</p> */}
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>















  
  );
};

export default ProductsCard;
