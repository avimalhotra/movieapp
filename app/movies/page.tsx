import Header from "../header";
import Footer from "../footer";

export default async function Movies() {
     
     fetch("http://localhost:3000/api/movie?search=avengers")
     .then(response => response.text())
     .then(data => console.log(data))
     .catch(error => console.error('Error fetching movies:', error));

     return (
         <div className="container mx-auto">
                <Header />
                <main className="py-8">
                    <h2 className="text-3xl font-bold mb-4">Movies Page</h2>
                    <p className="text-lg mb-4">This is the movies page where you can find information about the latest movies, reviews, and more. Stay tuned for updates!</p>
                    
                </main>
                <Footer />
         </div>
     );
}