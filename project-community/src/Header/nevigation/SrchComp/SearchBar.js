import { useState } from "react";
import { ReactComponent as SrLogo } from "./searchIcon.svg";
import { ReactComponent as CancelIcon } from "./cancelLogo.svg";

export default function SearchBar() {
  const [isClicked, Toggler] = useState(false);
  const clickHandler = () => {
    Toggler(!isClicked);
  };
  return (
    <div className="  grid grid-cols-6 h-full border border-1 border-white rounded-md ">
       <div className="col-span-5">
        <input placeholder="search" className=" outline-none pl-2 bg-slate-800  w-full h-full rounded-e-none rounded-s-md"></input>
       </div>
       <div className=" rounded-s-none rounded-e-md bg-slate-800 col-span-1">
        <button className=" align-middle p-2">
          <SrLogo ></SrLogo>
        </button>
        
       </div>
      {/* {isClicked ? <div className="grid col-span-4">
        <input className="rounded-md  p-1 " placeholder="search"></input>
      </div> : <div className="grid col-span-4"></div>}
      <div>
        {isClicked ? (
          <CancelIcon onClick={clickHandler} className="grid col-span-1 hover:opacity-50" />
        ) : (
          <SrLogo className="grid col-span-1" onClick={clickHandler} />
        )}
      </div> */}
    </div>

  );
}
