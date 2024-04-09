import MoiveId from "@/app/view-movie-details/[movId]/page";

export async function getAllMovieService(genre){
    const response = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api${ genre? `?genre=${genre}` : "/"}`, {catch:`no-store`});
    const data = response.json();
    return data;
}

export async function getMovieById(id){
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${id}`);
    const data = await res.json();
    // console.log("data", data)
    return data;
}