import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-1/3 my-2 ">
        <div id="item1" className=" carousel-item min-w-full h-2/3 ">
          <img
            src="https://i.ibb.co/Cw6nyPt/child-having-fun-during-playtime-23-2149382696.jpg"
            className="w-full rounded-xl h-[500px] object-cover "
          />
          <span className="absolute text-white top-1/2    p-8 bg-gradient-to-r from-[#3f393965] to-[#4136369c] md:mr-20 mr-4 md:py-20 ">
            <h2 className="text-7xl font-extrabold ">
                HAVE FUN!!
            </h2>
            <p className="text-2xl ">Let your imagination soar as you embark on a journey through our magical aisles. </p>
          </span>
        </div>
        <div id="item2" className="carousel-item w-full  ">
          <img
            src="https://i.ibb.co/gyKWvRc/child-having-fun-during-playtime-23-2149382693.jpg"
            className="w-full rounded-xl h-[500px] object-cover"
          />
        </div>
        <div id="item3" className="carousel-item w-full ">
          <img
            src="https://i.ibb.co/9yjDBKx/wepik-export-20230518085442e-Hm-B.png"
            className="w-full rounded-xl h-[500px] object-cover"
          />
        </div>
        <div id="item4" className="carousel-item w-full ">
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
