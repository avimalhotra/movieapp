export default function Footer() {
     return (
         <footer className="py-4 bg-gray-800 text-white">
             <div className="container mx-auto text-center">
                 <p>&copy; {new Date().getFullYear()} Next JS Movie App. All rights reserved.</p>
             </div>
         </footer>
     );
}   