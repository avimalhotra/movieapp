import Link from "next/link";

export default function Nav() {
     return (
         <nav className="bg-gray-800 text-white py-4">
             <div className="container mx-auto flex justify-between items-center p-2">
                 <h1 className="text-4xl font-bold">Next JS Movie App</h1>
                 <div>
                     <Link href="/" className="px-3 py-2 hover:bg-gray-700 rounded">Home</Link>
                     <Link href="/about" className="px-3 py-2 hover:bg-gray-700 rounded">About</Link>
                 </div>
             </div>
         </nav>
     );
}