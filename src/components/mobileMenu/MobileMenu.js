import React, { useState } from "react";

const MobileMenu = () => {
  const [showmenu, setshowmenu] = useState(false);
  return (
    <div className="md:hidden bg-white h-[70px] flex justify-between items-center px-7 w-screen fixed z-[1000]">
      <div className="logo flex-2">
        <h3>KHALED A.</h3>
      </div>
      <div className="flex-1">
        <div
          onClick={() => {
            setshowmenu(!showmenu);
          }}
          className="float-right w-[50px] h-[40px] flex items-center justify-center flex-col space-y-[6px] border-2 rounded-md cursor-pointer md:hidden"
        >
          <div className="h-[3px] w-[30px] bg-black block"></div>
          <div className="h-[3px] w-[30px] bg-black"></div>
          <div className="h-[3px] w-[30px] bg-black block"></div>
        </div>
        <div
          className={`${
            showmenu ? "block" : "hidden"
          } bg-white absolute top-full left-0 w-screen`}
        >
          <ul className="px-10 py-5 space-y-2 font-semibold">
            <li>
              <a href="/" onClick={() => setshowmenu(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="/#about" onClick={() => setshowmenu(false)}>
                About
              </a>
            </li>
            <li>
              <a href="/#publications" onClick={() => setshowmenu(false)}>
                Media Publcation
              </a>
            </li>
            <li>
              <a
                href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=2295370"
                target={"_blank"}
                rel="noreferrer"
                onClick={() => setshowmenu(false)}
              >
                Research
              </a>
            </li>
            <li>
              <a href="/#Blog" onClick={() => setshowmenu(false)}>
                Recent News
              </a>
            </li>
            <li>
              <a href="/#contact" onClick={() => setshowmenu(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
