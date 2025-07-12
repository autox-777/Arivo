import { FaAlgolia } from "react-icons/fa6";
import { TbHomeSearch } from "react-icons/tb";
import { IoBalloonOutline,IoReorderThree  } from "react-icons/io5";
import { MdElectricalServices } from "react-icons/md";
import { FiGlobe,FiSearch } from "react-icons/fi";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";

export default function LandingPage(){

    return<>
    {/* Header Starting */}
    <div className="bg-[#FBFBFB]  border-b-[1px] border-gray-200">

            <div className="px-4 md:px-10 flex justify-between items-center pt-5 pb-5">

                <div className="text-[#FF385C] w-[50%] sm:w-[20%]   flex justify-start items-center">
                    <FaAlgolia size={25}/>
                    <span className="text-[22px] font-semibold"> &nbsp;arivo</span>
                </div>


                <div className="sm:flex justify-between bg-white hidden  text-[14px]  mt-2  items-center w-[60%] border-gray-300 md:w-[40%] lg:w-[30%] rounded-full border-[1px] shadow-sm px-0 py-4">

                   <button className="flex gap-1 w-[32%] text-[#FF385C] hover:text-[#FF385C] hover:cursor-pointer justify-center items-center hover:scale-[1.05] transition-all ease-in-out">
                    <TbHomeSearch size={18} className="hidden md:inline-flex"/>
                        <span >Homes</span>
                   </button>


                   <button className="flex gap-1 w-[32%] hover:scale-[1.05] transition-all ease-in-out  hover:text-[#FF385C] hover:cursor-pointer justify-center items-center">
                        <IoBalloonOutline size={18} className="hidden md:inline-flex"/>
                    <span>Experiences</span>
                   </button>


                   <button className="flex gap-1 w-[32%] hover:scale-[1.05] transition-all ease-in-out hover:text-[#FF385C] hover:cursor-pointer justify-center items-center">
                        <MdElectricalServices size={20} className="hidden md:inline-flex"/>
                    <span>Services</span>
                   </button>

                   

                   
                </div>


                <div className="flex justify-end sm:w-[20%] w-[50%]   items-center gap-3 text-[15px]">
                    <button  className="hover:bg-[#EBEBEB] hidden lg:flex px-3 py-1 hover:cursor-pointer rounded-full">Become a host </button>
                    
                    <button className="bg-[#EBEBEB] hover:bg-gray-300 hover:cursor-pointer hover:scale-[1.1] px-2 py-2 rounded-full">
                        <FiGlobe size={18}/>
                    </button>

                    <button className="bg-[#EBEBEB] hover:cursor-pointer hover:scale-[1.1] hover:bg-gray-300 px-2 py-2 rounded-full  ">
                       <PiDotsThreeVerticalBold size={20}/>
                    </button>
                </div>

            </div>

            <div className="lg:flex hidden justify-center items-center">

                    <div className="rounded-full bg-white w-[60%] border-[1px] ] border-gray-300  flex justify-center items-center text-[12.5px] z-1 mb-8 mt-4 overflow-hidden shadow-sm  ">

                        <div className="flex w-[25%] hover:border-[1px] border-gray-300 flex-col z-0 pl-7 rounded-full py-3 ronuded-sm hover:bg-[#EBEBEB] hover:cursor-pointer  justify-center text-[12.5px]">
                            <span>Where</span>
                            <input type="text" placeholder="Search destinition" className="outline-0 text-[14px]" required />
                        </div>


                         <div className="flex pl-5 rounded-full border-gray-300 hover:border-[1px] flex-col z-0 px-3 w-[20%]  py-3 ronuded-sm hover:bg-[#EBEBEB] hover:cursor-pointer  justify-center text-[12.5px]">
                            <span>Check In</span>
                             <span className="text-gray-500">Select date</span>
                        </div>


                         <div className="flex flex-col z-0 border-gray-300 hover:border-[1px] pl-5 rounded-full w-[20%] py-3 ronuded-sm hover:bg-[#EBEBEB] hover:cursor-pointer  justify-center text-[12.5px]">
                            <span>Check Out</span>
                             <span className="text-gray-500">Select date</span>
                        </div>


                         <div className="flex w-[25%] border-gray-300 rounded-full hover:border-[1px] flex-col z-0 pl-5 py-3 ronuded-sm hover:bg-[#EBEBEB] hover:cursor-pointer  justify-center text-[12.5px]">
                            <span>Who</span>
                            <span className="text-gray-500">Select guest details</span>
                        </div>


                       <div className="flex w-[10%]  z-0 pl-5 py-3   hover:cursor-pointer  justify-center items-center text-[12.5px]">
                           <button className="bg-[#FF385C] px-2 py-2 rounded-full hover:cursor-pointer">
                            <FiSearch size={25} color="white"/>
                           </button>
                        </div>

                        

                    </div>

            </div>

    </div>
    {/* Closing of header. */}
    </>
}