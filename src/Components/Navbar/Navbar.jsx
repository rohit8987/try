import React  from "react";
import { NavbarMenu } from "../mockdata/data"
import { IoMdSearch } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { CiDumbbell } from "react-icons/ci";
import ResponsiveMenu from "../ResponsiveMenu";



const Navbar = () => {
    const [open, setOpen] = React.useState(false);
  return (

 <>
   <nav>
        <div className="container flex items-center justify-between p-5 py-8 ">
            <div className="flex items-center gap-2 text-2xl font-bold uppercase ">
            <CiDumbbell/>
            <p>Coders</p>
            <p className="text-secondary">Gym</p>
            </div>
            <div className="hidden md:block ">
                <ul className="flex items-center gap-6 text-gray-600">
                    { NavbarMenu.map((item)=>{
                            return(
                                <li key={item.id} >
                                    <a href={item.link} className="inline-block px-3 py-1 font-semibold hover:text-primary" > { item.title}</a>
                                    </li>
                            )
                        }) }
                </ul>
            </div>
                        <div className="flex items-center gap-4">
                            <button className="p-2 text-2xl duration-200 rounded-full hover:bg-primary hover:text-white">
                                <IoMdSearch/>
                            </button>
                            <button className="p-2 text-2xl duration-200 rounded-full hover:bg-primary hover:text-white">
                                <MdShoppingCart/>
                            </button>
                            <button className="hidden px-6 py-2 font-semibold duration-200 border-2 rounded-md hover:bg-primary text-primary hover:text-white border-primary md:block">Login</button>
                        </div>
                        <div className="md:hidden" onClick={()=>setOpen(!open)} >
                            <IoMdMenu className="text-4xl"/>
                        </div>
        </div>
    </nav>
    <ResponsiveMenu open={open}/>
    </>
  )
}

export default Navbar
