import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { Recentews } from "../../news";

const Blog = () => {
  gsap.registerPlugin(ScrollTrigger);
  let Blogtitle,
    Blog_content,
    allBlogs = useRef();

  const News2 = Recentews.slice(0, 3);
  useEffect(() => {
    // eslint-disable-next-line
    gsap.fromTo(
      Blogtitle,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: Blogtitle,
          toggleActions: "play none none none",
          start: "20px 90%",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      Blog_content,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        // delay: 0.3,
        scrollTrigger: {
          trigger: Blog_content,
          toggleActions: "play none none none",
          start: "100% 80%",
          // markers: true,
        },
      },
      "this is 2nd animation"
    );
    gsap.fromTo(
      allBlogs.children,
      {
        opacity: 0,
      },
      {
        opacity: 1,

        stagger: 0.3,
        scrollTrigger: {
          trigger: allBlogs,
          toggleActions: "play none none none",
          start: "50px 80%",
          // markers: true,
        },
      },
      "this is cards animation"
    );
    // eslint-disable-next-line
  }, []);
  return (
    <div className="edina_tm_services ">
      <div id="Blog" className="edina_tm_title bg-[#F9F9FC] px-10 py-10">
        <div className="relative overflow-hidden">
          <h3 ref={(elem) => (Blogtitle = elem)}>Latest News</h3>
        </div>
        <div className="relative overflow-hidden"></div>
        <div
          ref={(elem) => (allBlogs = elem)}
          className="publications mt-5 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* <div className="hidden"></div> */}
          {News2.map((elem, index) => {
            return (
              <a
                href={elem.link}
                target={"_blank"}
                rel="noreferrer"
                key={index}
              >
                <div className="relative card max-w-sm bg-white rounded-lg overflow-hidden">
                  <div className="profileImage  relative">
                    <img
                      src={elem.FeaturedImage}
                      alt=""
                      className="w-full object-cover  h-[200px] md:h-[230px]"
                    />
                    {elem.WebsiteLogo && (
                      <div className="webLogo absolute top-2 left-2 rounded-xl h-16 w-16 object-cover">
                        <img
                          src={elem.WebsiteLogo}
                          alt=""
                          className="h-full w-full"
                        />
                      </div>
                    )}
                  </div>
                  <div className="px-5 py-5">
                    <h1 className="font-bold text-xl">{elem.Title}</h1>
                    <p className="py-5">
                      {elem.Description.length > 100
                        ? elem.Description.substring(0, 100)
                        : elem.Description}{" "}
                      ...
                    </p>
                    <a href={elem.link} target={"_blank"} rel="noreferrer">
                      <button className="w-full bg-transparent text-lg hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Read More
                      </button>
                    </a>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        <div className="mt-10 flex items-center justify-center">
          <Link to={"/allnews"}>
            <button className="bg-blue-500 text-lg hover:bg-blue-500 text-white font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent rounded w-fit px-16 ">
              View ALL
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
