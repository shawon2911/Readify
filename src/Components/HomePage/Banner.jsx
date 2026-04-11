import React from "react";
import bannerImg from "../../assets/banner-img.png"

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[60vh] max-w-7xl mx-auto py-10 md:px-25 rounded-3xl">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between ">
          <img
            src={bannerImg}
          />
          <div>
            <h1 className="text-[48px] md:text-[56px] font-bold">Books to freshen up <br /> your bookshelf</h1>
            
            
            <div className="flex justify-center md:justify-start">
              <button className="btn bg-[#23BE0A] text-white py-7 px-8  md:py-9 md:px-10 mt-10 rounded-lg"><span className="text-2xl"> View The List</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
