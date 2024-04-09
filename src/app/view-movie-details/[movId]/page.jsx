import NavbarComponent from "@/components/NavbarComponent";
import ViewDetailComponent from "@/components/ViewDetailComponent";
import { getMovieById } from "@/services/movies.service";
import React from "react";

const MoiveId = async ({ params }) => {
  console.log("Param", params.movId);
  const data = await getMovieById(params.movId);
  console.log("Data", data);
  return (
    <div className=" text-white py-8 px-7">
      <div className=" px-4  lg:px-8">
        <div className="flex flex-col w-full md:flex-row -mx-4">
          <div className="md:flex-2 px-7">
            <div className="h-[520px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={data.payload.image}
                alt="Movie Image"
              />
            </div>
          </div>
          <div className="md:flex-1 px-4 ">
            <h2 className="text-2xl font-bold mb-2">
              {data.payload.director}
            </h2>
            <div className=" mb-4">
              <div className="mr-4">{data.payload.runtime} minutes</div>
              <div>{data.payload.genre}</div>
            </div>
            <div className="mb-4">
              {/* <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span> */}
              <div className="flex items-center mt-2">
                <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
              </div>
            </div>

            <div>
              <span className="font-bold text-2xl ">
                {data.payload.movie_title}
              </span>
              <p className=" text-sm mt-2">
                {data.payload.description}
              </p>
            </div>
            <div className="mt-14">{data.payload.posted_at}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoiveId;
