import Header from "./header";
import Footer from "./footer";

export default function Home() {



  return (
      <div className="container mx-auto">
        <Header />
        <main className="py-8">
            <h2 className="text-3xl font-bold mb-4">Welcome to Next JS Movie App</h2>
            <p className="text-lg">Discover the latest movies, reviews, and more!</p>
            <form className="mt-4" role="search" action="/movies" method="get">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                     <input
                  type="search"
                  required
                  pattern="[\w\s]{2,50}"
                  id="search"
                  aria-label="Search for movies"
                  name="search"
                placeholder="Search for movies..."
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />  
                  </div>
                  <div>
                      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Search
              </button>
                  </div>
              </div>
               
            
            </form>
        </main>
        <Footer />
      </div>
  );
}