import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
    let review = props.review;
    return (
        // <div className="flex flex-col md:relative">
        //     {/* <div className="absolute top-[-7rem] z-10 mx-auto ">
        //         <img src={review.image} alt="" className="aspect-square rounded-full w-[140px] h-[140px] z-25" />
        //         <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
        //     </div> */}
        //      <div className="absolute top-[-1rem] z-10 mx-auto ">
        //         <img src={review.image} alt="" className="aspect-square rounded-full w-[140px] h-[140px] z-25" />
        //         <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
        //     </div>

        //     <div className="text-center mt-7">
        //         <p className="font-bold text-2xl capitalize leading-3">{review.name}</p>
        //     </div>

        //     <div className="text-center mt-4">
        //         <p className="text-violet-300 text-sm uppercase">{review.job}</p>
        //     </div>

        //     <div className="text-violet-400 mx-auto mt-5">
        //         <FaQuoteLeft />
        //     </div>

        //     <div className="text-center mt-4 text-slate-500 ">{review.text}</div>

        //     <div className="text-violet-400 mx-auto mt-5">
        //         <FaQuoteRight />
        //     </div>

        // </div>
       
        <div className="flex flex-col items-center relative md:relative w-full px-4 md:px-0">
        
        <div className="absolute top-[-1rem] sm:top-[-2rem] lg:top-[-3rem] mx-auto">
            <img
                src={review.image}
                alt=""
                className="aspect-square rounded-full w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] lg:w-[160px] lg:h-[160px] z-25"
            />
            <div className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] lg:w-[160px] lg:h-[160px] bg-violet-500 rounded-full absolute top-[-4px] sm:top-[-6px] lg:top-[-8px] z-[-10] left-[8px] sm:left-[10px] lg:left-[12px]"></div>
        </div>
     
        <div className="text-center mt-24 sm:mt-28 lg:mt-32">
            <p className="font-bold text-xl sm:text-2xl capitalize leading-tight">{review.name}</p>
        </div>
     
        <div className="text-center mt-2">
            <p className="text-violet-300 text-xs sm:text-sm uppercase">{review.job}</p>
        </div>
     
        <div className="text-violet-400 mx-auto mt-4">
            <FaQuoteLeft size={20} />
        </div>
     
        <div className="text-center mt-4 text-slate-500 px-4 text-sm sm:text-base leading-relaxed">
            {review.text}
        </div>
     
        <div className="text-violet-400 mx-auto mt-4">
            <FaQuoteRight size={20} />
        </div>
    </div>
    

    );
};

export default Card;
