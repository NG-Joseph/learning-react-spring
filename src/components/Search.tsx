
import { useState } from "react";
import { BiCheck, BiSearch} from "react-icons/bi"; 
import { animated, useSpring } from "react-spring";



export const Search = ({query, onQueryChange, searchActive, setSearchActive}) => {
    
    const searchStyles = useSpring({
        to: { y: 0 },
        duration: 500,
        from: { y: -50 },
      });
      
    
    
    return (
        <div>
             <input
                  onChange={(e) => {onQueryChange(e.target.value)}}
                  className="shadow appearance-none border rounded w-half py-1/2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline select-none"
                  id="query"
                  type="text"
                  name="query"
                  placeholder="Search"
                  value={query}
                  hidden={!searchActive}
                />

                <animated.a
                  onClick={() => setSearchActive(!searchActive)}
                  style={searchStyles}
                  className="pl-3 inline-block no-underline hover:text-black"
                >
                  <svg
                    className="fill-current hover:text-black  "
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                  </svg>
                </animated.a>
        </div>
        /*<div className="py-5 pl-6">
        <div className="mt-1 relative rounded-md ">
        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
            <BiSearch />
            <label htmlFor="query" className="sr-only" />
          </div>
          
          <input onChange={(event) => {onQueryChange(event.target.value)}} type="text" name="query" id="query" value={query}
            className=" pl-5 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 sm:text-sm border-gray-300" placeholder="Search" />
          <div className="absolute inset-y-0 right-1/2 flex items-center">
            
          </div>
        </div>
      </div>*/
    )
}