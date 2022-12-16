import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";



export default function OuluFinland(){
    return(
        <>
        <Navbar/>
       
        <div className=" flex justify-between">
         <h1 className="text-dark
              mb-6
              Sentencecase
              ml-10  items-center font-bold pb-0">Stay in Oulu, Finland</h1> 
              <p className="text-align:right mr-20">12+ stays</p></div>
             
        <div className="px-4 md:px-20 md:py-0 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        <div className=" overflow-hidden rounded-lg" >
    <div className="w-full"> <img  className="rounded-t-lg"  src="Oulu1.jpg" alt="" width="600" height="600"/></div>
        <div className="px-4 py-2 ">
<div className="flex justify-between">
                <p className="border border-[#B2B2B2]  p-2 text-sm  rounded-full " >SUPER HOST</p>
                <p className=" p-2 grow-0 text-sm">Entire apartment.2beds</p>
               <img className="size={5} " src="rate.jpg" alt="" width="20" height="20"/>
               <p className="text-sm p-2">4.40</p>
            </div>
       
                <h4 className="py-2 md:py-4 font-bold">
                  Stylist apartment in center of the city
                    </h4>
                        </div> </div>


                        <div className=" overflow-hidden rounded-lg" >
    <div className="w-full"> <img  className="rounded-t-lg"  src="oulu2.jpg" alt="" width="600" height="600"/></div>
        <div className="px-4 py-2 ">
<div className="flex justify-between">
                <p className=" p-2 text-sm">Private room</p>
               <img className="ml-40" src="rate.jpg" alt="" width="20" height="20"/>
               <p className="text-sm p-2">4.25</p>
            </div>
        <h4 className="py-2 md:py-4 font-bold">
        Cozy, peaceful and private room with...
                    </h4>
                        </div> </div>

                         </div>
                         </div>

                         <div className="px-4 md:px-20 md:py-0 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        <div className=" overflow-hidden rounded-lg" >
    <div className="w-full"> <img  className="rounded-t-lg"  src="oulu3.jpg" alt="" width="600" height="600"/></div>
        <div className="px-4 py-2 ">
<div className="flex justify-between">
                <p className="border border-[#B2B2B2]  p-2 text-sm  rounded-full " >SUPER HOST</p>
                <p className=" p-2 grow-0 text-sm">Entire apartment.2beds</p>
               <img className="size={5} " src="rate.jpg" alt="" width="20" height="20"/>
               <p className="text-sm p-2">4.40</p>
            </div>
       
                <h4 className="py-2 md:py-4 font-bold">
                  Stylist apartment in center of the city
                    </h4>
                        </div> </div>


                        <div className=" overflow-hidden rounded-lg" >
    <div className="w-full"> <img  className="rounded-t-lg"  src="oulu4.jpg" alt="" width="600" height="600"/></div>
        <div className="px-4 py-2 ">
<div className="flex justify-between">
                <p className=" p-2 text-sm">Private room</p>
               <img className="ml-40" src="rate.jpg" alt="" width="20" height="20"/>
               <p className="text-sm p-2">4.25</p>
            </div>
        <h4 className="py-2 md:py-4 font-bold">
        Cozy, peaceful and private room with...
                    </h4>
                        </div> </div>

                         </div>
                         </div>
    
        
                         <Footer/>
    

                        
  
        </>
    )
}
