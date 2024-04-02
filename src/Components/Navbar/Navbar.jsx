import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import  { AuthContext } from "../../Provider/Provider";

const Navbar = () => {
  const {user,logOut,name} = useContext(AuthContext)


  const links = <>
    <li className="mx-2"> <NavLink to='/'>Home</NavLink></li>
    <li className="mx-2">  <NavLink to='/Login'>Log in</NavLink></li>
    <li className="mx-2">  <NavLink to='/resister'>Resister</NavLink></li>
    <li className="mx-2">  <NavLink to='/order'>Orders</NavLink></li>
  </>
const [logHave,setLogHave] = useState(false)
  const logOutToggle = ()=> {
    
    setLogHave(!logHave)


  }
    return (
        <div>
            <div className="navbar bg-[#b9c3ffbf]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Email Auth</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {
      links
     }
    </ul>
  </div>
  <div className="navbar-end">
   { 
    user ? <div className=" relative">
      <p onClick={logOutToggle}>{user.displayName || name}</p>
      <div onClick={() => { logOut(); logOutToggle(); }} className={`w-32 -right-2 min-h-12 absolute top-11 ${!logHave ? "hidden" :"flex"}   justify-center items-center  bg-white`}>
        <div className="text-medium underline hover:text-[#8b8b8b]">Log Out</div>

      </div>
    </div>
    :
    <div> <a className="btn">Button</a></div>
   }
  </div>
</div>
            
        </div>
    );
};

export default Navbar;