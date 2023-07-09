import React from "react";
import{
    Link,
  }
  from "react-router-dom";

export  function Footer(){
   return(
    <>
    <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 created by <a href="https://github.com/princesswG" class="hover:underline">princesswG</a>.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link to={"/helsinkifinland"} class="mr-4 hover:underline md:mr-6 ">Monrovia, Liberia</Link>
        </li>
        <li>
            <Link to={"/addguests"} class="mr-4 hover:underline md:mr-6"> 
     Add guests</Link>
        </li>
    </ul>
</footer>
    </>
   )
}