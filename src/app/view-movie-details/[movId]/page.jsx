import { getMovieById } from "@/services/movies.service";
import { FaStar} from "react-icons/fa";
import React from "react";

const StarRating = ({ rating }) => {
  const roundedRating = Math.round(rating);
  // const hasHalfStar = rating % 1 !== 0;
  const fullStarsArray = Array.from({ length: roundedRating }, (_, index) => (
    <FaStar key={index} />
  ));

  return (
    <div className="flex text-yellow-500">
      {fullStarsArray}
    </div>
  );
};


const MoiveId = async ({ params }) => {
  console.log("Param", params.movId);
  const data = await getMovieById(params.movId);
  console.log("Data", data);
  return (
    <div className=" text-white py-7 px-7">
      <div className=" px-4  lg:px-8">
        <div className="flex flex-col w-full md:flex-row -mx-4">

          {/* Image */}
          <div className="md:flex-2 px-7">
            <div className="h-[520px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={data.payload.image ? data.payload.image : "https://imgs.search.brave.com/r6cnIYBSgGol8Q_yxuiilQT36mGpkZjQGjKn8BJRhIs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9lcnJv/ci00MDQtcGFnZS1u/b3QtZm91bmQtMjkw/NTQ0OTkuanBn"}
                alt="Movie Image"
              />
            </div>
          </div>

          <div className="md:flex-1 px-4 ">
            {/* Director Name */} 
            <h2 className="text-2xl font-bold ">
              {data.payload.director}
            </h2>
            <div>
              {/* Runtime */}
              <div className="mr-4">{data.payload.runtime} minutes</div>
              {/* Genre */}
              <div><i>{data.payload.genre}</i></div>
            </div>

            {/* Rating */}
            <div className="mb-10">
              <div className="flex items-center">
                <StarRating rating={data.payload.rating} />
              </div>
            </div>
            <div>
              {/* Movie Title */}
              <span className="font-bold text-2xl ">
                {data.payload.movie_title}
              </span>

              {/* Description */}
              <p className=" text-sm mt-2">
                {data.payload.description}
              </p>
            </div>

            {/* Posted Date */}
            <div className="mt-14">{new Date(data.payload.posted_at).toLocaleString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
              hour12: true
            })}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoiveId;
