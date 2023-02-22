import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./service.css";

const Service = () => {
  gsap.registerPlugin(ScrollTrigger);
  let Publicationtitle,
    publication_content,
    allPublications = useRef();

  const publications3 = [
    {
      Title: "Featured In DOHA NEWS",
      FeaturedImage: "/unnamed.jpg",
      Description: ` Professor Khaled A. Beydoun is Featured in Doha News`,
      link: "https://dohanews.co/author/khaled-a-beydoun/",
      // WebsiteLogo: "/unnamed.jpg",
    },
    {
      Title: "Featured In SubStack",
      FeaturedImage: "/substack.png",
      Description: ` Professor Khaled A. Beydoun is Featured in Substack`,
      link: "https://substack.com/profile/54430975-khaled-beydoun",
      // WebsiteLogo: "/unnamed.jpg",
    },
    {
      Title: "ESPN: The Undefeated",
      FeaturedImage: "/tu-logo.webp",
      Description: "Featured Columnist on Sports and Culture",
      link: "https://andscape.com/contributors/khaled-a-beydoun/",
    },
    // {
    //   Title: "The Islamic Monthly",
    //   FeaturedImage: "/tim-logo.jpg",
    //   Description: "Senior Editor",
    //   link: "https://www.theislamicmonthly.com/author/khaledbey/",
    // },

    // {
    //   Title: "Time Magazine",
    //   FeaturedImage: "/time-logo-white.png",
    //   Description:
    //     "3 Olympic Athletes Show the Positive Power of Islam | Featured In TIMES",
    //   date: "August 18, 2016",
    //   // img: "/the_islamic_monthly (1).png",
    //   link: "https://time.com/author/khaled-a-beydoun/",
    // },
  ];
  // const publications2 = [
  //   {
  //     name: "The New York Times",
  //     logo: "/icons8-new-york-times-100.png",
  //     desc: "To Be Poor and Ignored During Ramadan",
  //     date: "June 13, 2018",
  //     img: "/the_islamic_monthly (1).png",
  //     link: "https://www.nytimes.com/2018/06/13/opinion/ramadan-muslim-charity-poverty.html",
  //   },
  //   {
  //     name: "The Washington Post",
  //     logo: "/unnamed.png",
  //     desc: "‘Lone wolf’: Our stunning double standard when it comes to race and religion",
  //     date: "June 13, 2018",
  //     img: "/the_islamic_monthly (1).png",
  //     link: "https://www.washingtonpost.com/news/acts-of-faith/wp/2017/10/02/lone-wolf-our-stunning-double-standard-when-it-comes-to-race-and-religion/?arc404=true",
  //   },
  //   {
  //     name: "The Washington Post",
  //     logo: "/unnamed.png",
  //     desc: "America banned Muslims long before Donald Trump",
  //     date: "August 18, 2016",
  //     img: "/the_islamic_monthly (1).png",
  //     link: "https://www.washingtonpost.com/opinions/trumps-anti-muslim-stance-echoes-a-us-law-from-the-1700s/2016/08/18/6da7b486-6585-11e6-8b27-bb8ba39497a2_story.html?noredirect=on",
  //   },
  //   {
  //     name: "Time Magazine",
  //     logo: "/download (1).png",
  //     desc: "3 Olympic Athletes Show the Positive Power of Islam",
  //     date: "August 18, 2016",
  //     img: "/the_islamic_monthly (1).png",
  //     link: "https://time.com/4452401/olympic-athletes-islam/",
  //   },
  // ];
  useEffect(() => {
    // eslint-disable-next-line
    gsap.fromTo(
      Publicationtitle,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: Publicationtitle,
          toggleActions: "play none none none",
          start: "20px 90%",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      publication_content,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        // delay: 0.3,
        scrollTrigger: {
          trigger: publication_content,
          toggleActions: "play none none none",
          start: "100% 80%",
          // markers: true,
        },
      },
      "this is 2nd animation"
    );
    gsap.fromTo(
      allPublications.children,
      {
        opacity: 0,
      },
      {
        opacity: 1,

        stagger: 0.3,
        scrollTrigger: {
          trigger: allPublications,
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
      <div
        id="publications"
        className="edina_tm_title bg-[#F9F9FC] px-10 py-10 relative overflow-hidden"
      >
        <h3 ref={(elem) => (Publicationtitle = elem)}>Media Publications</h3>
        <div className="relative overflow-hidden">
          {/* <p ref={(elem) => (publication_content = elem)}>
            Professor Beydoun’s insight has been featured in the Washington
            Post, the New York Times, San Francisco Chronicle, Time, Salon, and
            ESPN; and television and radio news programming including CNN, the
            BBC, Fox, NBC and ABC News.
          </p> */}
        </div>
        <div
          ref={(elem) => (allPublications = elem)}
          className="publications mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10"
        >
          {publications3.map((elem, index) => {
            return (
              <a
                href={elem.link}
                target={"_blank"}
                key={index}
                rel="noreferrer"
              >
                <div className="relative card max-w-sm bg-white rounded-lg overflow-hidden">
                  <div className="profileImage  relative">
                    <img
                      src={elem.FeaturedImage}
                      alt=""
                      style={{ objectFit: "revert" }}
                      className="w-full object-center bg-no-repeat h-[200px] md:h-[200px]"
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
                  <div className="px-5 py-5 flex flex-col space-y-6">
                    <h1 className="font-bold text-3xl">{elem.Title}</h1>
                    {/* <p className="py-5">
                    {elem.Description.length > 100
                      ? elem.Description.substring(0, 100)
                      : elem.Description}{" "}
                    ...
                  </p> */}
                    {/* eslint-disable-next-line */}
                    <a href={elem.link} target={"_blank"}>
                      <button className="bg-transparent text-lg hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full">
                        Visit Page
                      </button>
                    </a>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <Link to={"/allpublications"}>
            <button className="bg-blue-500 text-lg hover:bg-blue-500 text-white font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent rounded w-fit px-16 ">
              View ALL
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
