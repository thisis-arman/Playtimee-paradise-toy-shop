import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import ProductsCard from "./Products";

const ShopByCategory = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Animal Toys");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // console.log(products, categories, selectedCategory, filteredProducts);

  useEffect(() => {
    fetch("https://playtime-paradise.vercel.app/toyproduct")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [filteredProducts]);
  // console.log(products, data)

  useEffect(() => {
    // Get the unique categories from the data
    const uniqueCategories = [
      ...new Set(products.map((product) => product.category)),
    ];
    setCategories(uniqueCategories);
  }, [products]);

  useEffect(() => {
    // Filter products based on the selected category
    const filtered = products.filter(
      (product) => product.category === selectedCategory
    );
    setFilteredProducts(filtered);
  }, [selectedCategory]);

  const handleTabSelect = (index) => {
    setSelectedCategory(categories[index]);
  };
  


  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-4">Shop by Category</h2>
      <Tabs onSelect={handleTabSelect}>
        <TabList className="bg-base-200 text-lg font-semibold">
          {categories.map((category) => (
            // console.log({category})
            <Tab key={category}>{category}</Tab>
          ))}
        </TabList>

        {categories.map((category, index) => (
          <TabPanel key={category}>
            <div className="product-list grid grid-cols-1 md:grid-cols-3 gap-8 my-4">
              {filteredProducts.map((product) => (
                <ProductsCard key={product.id} product={product}></ProductsCard>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
