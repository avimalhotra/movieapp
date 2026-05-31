import Header from "../../header";
import Footer from "../../footer";
import Link from "next/link";

import { Movies } from "@/services/api";

export default async function MoviePage({params}){
     const {id}=await params; 

     const data=await Movies(id);

     return (
          <div className="container mx-auto">
          <Header></Header>
           <main className="py-8 px-2">
               <h2 className="text-3xl font-bold">Result for {id}</h2>
               <div className="grid grid-cols-2 gap-4">
               {
                    data?.description.map((elem,ind)=>(
                         <div className="border rounded shadow p-4" key={ind}>
                              <Link className="block" href={`/movie/${elem["#IMDB_ID"]}`}>

                                   <img className="float-end" src={elem["#IMG_POSTER"]} alt={elem["#TITLE"]} width={200}/>
                                   <h3 className="text-2xl font-bold">{elem["#TITLE"]}</h3>
                                   <p className="my-2">YEAR: {elem["#YEAR"]}</p>
                                   <p>ACTORS: {elem["#ACTORS"]}</p>
                                   <div className="clear-both"></div>
                              </Link>
                         </div>
                    ))
               }
               </div>
           </main>
          <Footer></Footer>
          </div>
     )
}