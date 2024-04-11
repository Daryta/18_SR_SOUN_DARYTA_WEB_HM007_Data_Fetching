import React from "react";
import Link from "next/link";



const NavbarComponent = () => {
  return (
    <main>
    <header className="h-24 sm:h-32 flex items-center w-full relative">
        <div className="container mx-auto p-1 flex items-center z-10 justify-between">

            {/* Logo */}
            <Link href={"/"}>
            <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
              <img src="https://www.legend.com.kh/_ipx/s_117x44/legend-cinema-logo.png" alt="img not found" width={120} height={100}/>
               {/* <span className="text-xl">រោងភាពយន្ត លេជេន</span> */}
            </div>
            </Link>
            
            <div className="flex items-center">
                <nav className="font-sen text-gray-100 dark:text-white uppercase text-lg lg:flex items-center hidden">
                    <a href="/" className="py-2 px-6 flex hover:bg-slate-200 hover:text-gray-800 hover:rounded-md" >
                        Home
                    </a>
                    <a href="#" className="py-2 px-6 flex hover:bg-slate-200 hover:text-gray-800 hover:rounded-md">
                        Action 
                    </a>
                    <a href="#" className="py-2 px-6 flex hover:bg-slate-200 hover:text-gray-800 hover:rounded-md">
                        Anime
                    </a>
                    <a href="#" className="py-2 px-6 flex hover:bg-slate-200 hover:text-gray-800 hover:rounded-md">
                        Drama
                    </a>
                    <a href="#" className="py-2 px-6 flex hover:bg-slate-200 hover:text-gray-800 hover:rounded-md">
                        Science Fiction
                    </a>
                    <input type="text" name="search" id="search" className="rounded-md ml-4 py-2 px-6 flex text-black" placeholder="Type here to search..."/>
                </nav>
                <button className="lg:hidden flex flex-col ml-4">
                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                </button>
            </div>
        </div>
    </header>
    
</main>
);
};

export default NavbarComponent;
