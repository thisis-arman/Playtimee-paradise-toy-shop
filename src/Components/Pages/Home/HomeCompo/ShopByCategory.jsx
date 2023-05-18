import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import data from '../../../../../public/toysproducts.json';
import ProductsCard from './Products';



const ShopByCategory = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    console.log(selectedCategory)
  
    const handleTabSelect = (index) => {
      // Get the selected category from the JSON data
      const categories = data.map((product) => product.category);
      setSelectedCategory(categories[index]);
    };
  
    // Filter products based on the selected category
    const filteredProducts = selectedCategory
      ? data.filter((product) => product.category === selectedCategory)
      : data;

     

    const filteredCategory = data.category.filter((product)=>
    
    product.category !==selectedCategory
    
    )
    return (
      <div>
        <h2>Shop by Category</h2>
        <Tabs onSelect={handleTabSelect}>
          <TabList>
            {data.map((product) => (
              <Tab key={product.category}>
                {product.category }
                </Tab>
            ))}
          </TabList>
  
          {data.map((product) => (
            <TabPanel key={product.category}>
              <div className="product-list grid grid-cols-1 md:grid-cols-3 gap-5">
                {filteredProducts.map((product) => 
                (
                  <ProductsCard
                  key={product.id}
                  product={product}
                                    
                  ></ProductsCard>
                  
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    );
  };
  
  export default ShopByCategory;
  