import React from "react";
import shooting from "../../public/images/shootingStar.webp";
import Image from "next/image";
import Link from "next/link";
import { getAllMovieService } from "@/services/movies.service";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CardComponent = async ({movies}) => {
  // console.log(movies);
  return (
    <main className="bg-[#561C24]">
      
      <Carousel className="w-[95%] m-auto">
        {/* <button className="text-2xl text-white font-bold my-6 mx-2  ">
          All Movie
        </button> */}
      
      <CarouselContent className=" flex gap-5 mx-1">
        {movies.payload.map((data) => (
          <CarouselItem key={data.movie_id} className="pl-1 md:basis-1/2 lg:basis-1/5">
            <div className=" bg-gray-100 rounded-xl">
            <Link href={`/view-movie-details/${data.movie_id}`}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg  p-7">
                <img src={data.image} alt="Mountain" className="w-full object-cover"/>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 line-clamp-1">{data.movie_title}</h2>
                  <p className="text-gray-700 leading-tight  line-clamp-2">
                    {data.description}
                  </p>
                </div>
              </div>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
    </Carousel>



      {/* All Movies */}
      {/* <section className="mx-10 ">
        
        <button className="text-2xl text-white font-bold my-6 ">
          All Movie
        </button>
        <Carousel>
          <CarouselContent>
        <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden gap-10">
          {movies.payload.map((data) => (

            //Card
            // <Link key={data.movie_id}>
              <a key={data.movie_id}
                className="p-8  border h-[300px] bg-white border-indigo-300 rounded-xl hover:shadow-md hover:shadow-gray-400 "
                href="viewDetails"
              >
                <img
                  height="100px"
                  src={data.image}
                  className="shadow rounded-sm overflow-hidden border"
                />
                <div className="mt-4">
                  <h4 className="font-bold text-xl">{data.movie_title}</h4>
                  <p className="mt-2 text-gray-600 line-clamp-2">
                    {data.description}
                  </p>
                </div>
              </a>
            // </Link>
          ))}
        </div>
        </CarouselContent>
        </Carousel>

      </section>

      <section className="mx-10">
        <button className="text-2xl text-white font-bold my-6 ml-2">
          Action Movie
        </button>
        <div></div>
      </section> */}

      {/* Action Movie */}
      {/* <section className="my-5 mx-10 w-72 ">
        <button className="text-2xl text-white font-bold my-6 ml-2">
          Action Movie
        </button>
        <a
          className="p-4 border bg-white border-indigo-300 rounded-xl hover:shadow-md hover:shadow-gray-400 flex flex-col items-center"
          href="#"
        >
          <Image
            src={shooting}
            className="shadow rounded-sm overflow-hidden border"
          />
          <div className="mt-4">
            <h4 className="font-bold text-xl">Exercises</h4>
            <p className="mt-2 text-gray-600">
              Create Exercises for any subject with the topics you and.
            </p>
          </div>
        </a>
      </section> */}




    </main>
  );
};

export default CardComponent;
