import React from "react";
import AllPublicationComponent from "./components/allpublications/AllPublicationComponent";
import Headersecond from "./components/Header2/Headersecond";

const AllPublications = () => {
  return (
    <>
      <div className=" w-full relative">
        <Headersecond />
        <AllPublicationComponent />
      </div>
    </>
  );
};

export default AllPublications;
