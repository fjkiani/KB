import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Headersecond = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hidden md:flex bg-white h-16 items-center justify-center ">
      <Link to={"/"}>
        <h1 className="font-bold">Khaled A. Beydoun</h1>
      </Link>
    </div>
  );
};

export default Headersecond;
