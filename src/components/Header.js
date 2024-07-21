import { useState } from "react";
import { Link } from "react-router-dom";



const Header= ()=> {

  let [btnName,setBtnName] = useState("login");

   

    return(
      <div className="flex justify-between bg-purple-200 shadow-md">
  
      <div className="logo-container">
      <img className="w-24" src="https://cdn.pixabay.com/photo/2017/02/17/17/33/food-2074638_1280.png" />
  
      </div>
      <div className = "nav-items items-center">
        <ul className="flex p-5">
            <li className="p-4">Home</li>
            <li className="p-4"><Link to="/About Us">About Us</Link></li>
            <li className="p-4"><Link to="/Contact Us">Contact Us</Link></li>
            <li className="p-4"><Link to="/Grocery">Grocery</Link></li>
            <li className="p-4">Cart</li>
            <li className="p-4"><button className="bg-lime-200 rounded-xl px-1 py-1 items-center"
            onClick={()=>{

              btnName === "login" ? setBtnName("logout") :setBtnName("login") ;
            }}>{btnName}</button></li>
  
        </ul>
  
      </div>
  
      </div>
  
  
    )
  
  }
  export default Header;