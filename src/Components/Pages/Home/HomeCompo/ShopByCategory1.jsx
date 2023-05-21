import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
const ShopByCategory1 = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allCollection")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-center text-5xl text-teal-800"> Shop by category</h1>

      <Tabs className="text-center mt-6 lg:border-4 lg:border-blue-300  lg:py-5">
        <TabList className="text-2xl text-purple-900">
          <Tab>Horse</Tab>
          <Tab>Dinosaur</Tab>
          <Tab>Cat</Tab>
        </TabList>
        <TabPanel className="mt-10">
          <div className="md:flex  md:flex-wrap  md:items-center md:justify-center gap-6">
            {category.filter((toy) => toy.category === "Horse").map((toy, index) => (
                <div
                  className="card w-96 bg-base-100 shadow-xl border-4 border-solid border-gray-200"
                  key={index}
                >
                  <figure className="px-10 pt-10">
                    <img
                      src={toy.img}
                      alt={toy.name}
                      className="rounded-xl w-96 h-60"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title text-blue-600">{toy.name}</h2>
                    <p className="text-green-700 font-normal">
                      Price: ${toy.price}
                    </p>
                    <div className="flex items-center">
                      <Rating
                        style={{ maxWidth: 150 }}
                        value={Math.round(toy?.ratings) || 0}
                        readOnly
                      />
                      <span className="ms-2"> {toy?.ratings}</span>
                    </div>
                    <div className="card-actions">
                      <Link to={`/categoryDetails/${toy._id}`}>
                        {" "}
                        <button className="btn btn-error">View Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="md:flex md:flex-wrap  md:items-center md:justify-center gap-6   ">
            {category
              .filter((toy) => toy.category === "Dinosaur")
              .map((toy, index) => (
                <div
                  className="card w-96 bg-base-100 shadow-xl border-4 border-solid border-gray-200"
                  key={index}
                >
                  <figure className="px-10 pt-10">
                    <img
                      src={toy.img}
                      alt={toy.name}
                      className="rounded-xl w-96 h-60"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title text-blue-600">{toy.name}</h2>
                    <p className="text-green-700 font-normal">
                      Price: $<span>{toy.price}</span>{" "}
                    </p>

                    <div className="flex items-center">
                      <Rating
                        style={{ maxWidth: 150 }}
                        value={Math.round(toy?.ratings) || 0}
                        readOnly
                      />
                      <span className="ms-2"> {toy?.ratings}</span>
                    </div>
                    <div className="card-actions">
                      <Link to={`/categoryDetails/${toy._id}`}>
                        {" "}
                        <button className="btn btn-error">View Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="md:flex md:flex-wrap md:items-center md:justify-center gap-6">
            {category
              .filter((toy) => toy.category === "Cat")
              .map((toy, index) => (
                <div
                  className="card w-96 bg-base-100 shadow-xl border-4 border-solid border-gray-200"
                  key={index}
                >
                  <figure className="px-10 pt-10">
                    <img
                      src={toy.img}
                      alt={toy.name}
                      className="rounded-xl w-96 h-60"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title text-blue-600">{toy.name}</h2>
                    <p className="text-green-700 font-normal">
                      Price: $<span>{toy.price}</span>{" "}
                    </p>

                    <div className="flex items-center">
                      <Rating
                        style={{ maxWidth: 150 }}
                        value={Math.round(toy?.ratings) || 0}
                        readOnly
                      />
                      <span className="ms-2"> {toy?.ratings}</span>
                    </div>
                    <div className="card-actions">
                      <Link to={`/categoryDetails/${toy._id}`}>
                        {" "}
                        <button className="btn btn-error">View Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory1;
