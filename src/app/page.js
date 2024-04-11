import CardComponent from "@/components/CardComponent";
import HeaderComponent from "@/components/HeaderComponent";
import NavbarComponent from "@/components/NavbarComponent";
import { getAllMovieService } from "@/services/movies.service";

export default async function Home() {
  const movies = await getAllMovieService();
  const action = await getAllMovieService("Action");
  const anime = await getAllMovieService("Anime");
  const hollywood = await getAllMovieService("Hollywood");
  const drama = await getAllMovieService("Drama");
  const scifi = await getAllMovieService("Science Fiction");

  return (
    <main className="bg-[#561C24] w-full">
      <section>
        <HeaderComponent />
      </section>

      {/* All Movies */}
      <section className="mt-[606px]">
        <button className="text-2xl text-white font-bold my-6 m-11 ">
          All Movie &gt;
        </button>
        <CardComponent movies={movies} />
      </section>

      {/* Action Movie */}
      <section>
        <button className="text-2xl text-white font-bold my-6 m-11 ">
          Action Movie &gt;
        </button>
        <CardComponent movies={action} />
      </section>
 
      {/* Drama Movie */}
      <section>
        <button className="text-2xl text-white font-bold my-6 m-11 ">
          Drama Movie &gt;
        </button>
        <CardComponent movies={drama} />
      </section>

      {/* Anime Movie */}
      <section>
        <button className="text-2xl text-white font-bold my-6 m-11 ">
          Anime Movie &gt;
        </button>
        <CardComponent movies={anime} />
      </section>

      {/* Hollywood Movie */}
      <section>
        <button className="text-2xl text-white font-bold my-6 m-11 ">
          Hollywood Movie &gt;
        </button>
        <CardComponent movies={hollywood} />
      </section>

      {/* Science Fiction Movie */}
      <section>
        <button className="text-2xl text-white font-bold my-6 m-11 ">
          Science Fiction Movie &gt;
        </button>
        <CardComponent movies={scifi} />
      </section>
    </main>
  );
}
