
const url=`https://imdb.iamidiotareyoutoo.com/search`;


export async function Movies(movie:string){

     const movies=await fetch(`${url}?q=${movie}`);
     const data=await movies.json();
     return data ;

}

export async function Movie(id:string){
     const movie=await fetch(`${url}?id=${id}`);
     const data=await movie.json();
     return data;
}