import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-1/3 my-2 ">
        <div id="item1" className="carousel-item w-full h-2/3 ">
          <img
            src="https://i.ibb.co/Cw6nyPt/child-having-fun-during-playtime-23-2149382696.jpg"
            className="w-full rounded-xl h-[500px] object-cover bg-gradient-to-r from-gray-700 to-gray-200"
          />
          <div className="absolute top-1/2 p-10 bg-gradient-to-r from-[#413b3b54] to-gray-100">
            <h2 className="text-7xl font-extrabold ">
                HAVE FUN!!
            </h2>
            <p className="text-2xl ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum alias labore officiis nemo hic corporis ipsa? Fuga non dolorem nostrum.</p>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full bg-gradient-to-r from-cyan-300 to-blue-100 ">
          <img
            src="https://i.ibb.co/gyKWvRc/child-having-fun-during-playtime-23-2149382693.jpg"
            className="w-full rounded-xl h-[500px] object-cover"
          />
        </div>
        <div id="item3" className="carousel-item w-full bg-gradient-to-r from-cyan-300 to-blue-100">
          <img
            src="https://i.ibb.co/9yjDBKx/wepik-export-20230518085442e-Hm-B.png"
            className="w-full rounded-xl h-[500px] object-cover"
          />
        </div>
        <div id="item4" className="carousel-item w-full bg-gradient-to-r from-cyan-300 to-blue-100">
          <img
            src="https://i.ibb.co/8PFgsK9/wepik-export-2023051808561574-Cx.png"
            className="w-full rounded-xl h-[500px] object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
