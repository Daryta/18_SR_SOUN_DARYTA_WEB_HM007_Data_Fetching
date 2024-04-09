import CardComponent from "@/components/CardComponent";
import HeaderComponent from "@/components/HeaderComponent";
import NavbarComponent from "@/components/NavbarComponent";
import { getAllMovieService } from "@/services/movies.service";

export default async function Home() {
  const movies = await getAllMovieService();
  const action = await getAllMovieService("Action")
  const anime  = await getAllMovieService("Anime")
  
  return (
    <main className="bg-[#561C24] w-full">
      <section>
         <HeaderComponent />
      </section>

      <section className="mt-[606px]">
        <button className="text-2xl text-white font-bold my-6 m-11 ">
          All Movie  &gt;
        </button>
      <CardComponent movies={movies}/>
      </section>
      <button className="text-2xl text-white font-bold my-6 m-11 ">
          Action Movie  &gt;
        </button>
      <CardComponent movies={action}/>
      <button className="text-2xl text-white font-bold my-6 m-11 ">
          Anime Movie   &gt;
        </button>
      <CardComponent movies={anime}/>


    </main>
  );
}
