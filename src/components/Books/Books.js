import React, { useRef } from "react";
import "./books.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
const Books = () => {
  gsap.registerPlugin(ScrollTrigger);
  let BooksTitle,
    Books_content,
    allbooks = useRef();
  const Books = [
    {
      name: "The New Crusades: Islamophobia and the Global War on Muslims Hardcover",
      desc: "A poignant, powerful look at the twenty-first century and the crusades against Muslims created in the wake of the facile global war on terror. Khaled Beydoun's prose evokes James Baldwin and Edward Said, as does his moral imperative. The New Crusades is an intellectually rigorous history of global affairs, but it is also a series of moving narratives about what it is like to be human, Muslim, and betrayed.",
      img: "/51esVGJSOvL._SY291_BO1,204,203,200_QL40_FMwebp_.webp",
      new: true,
      url: "https://www.amazon.com/New-Crusades-Islamophobia-Global-Muslims/dp/0520356306/ref=sr_1_1?crid=1TYWDQBO3JOPT&keywords=The+New+Crusades+Beydoun&qid=1666672580&s=books&sprefix=the+new+crusades+beydoun%2Cstripbooks%2C102&sr=1-1",
    },
    {
      name: "AMERICAN ISLAMOPHOBIA: THE ROOTS AND RISE OF FEAR",
      uni: "University of California Press",
      desc: "This book explores the recent emergence of Islamophobia in the United States, and ties it to the embedded history of anti-Muslim bigotry that has prevailed for centuries. A scholar in the field, Beydoun interweaves his expertise with compelling narratives, personal stories, and intersectional analysis that illustrates the complexity and fluidity of Islamophobia.",
      img: "/book_lg (1).png",
      url: "https://www.ucpress.edu/book.php?isbn=9780520297791",
    },
  ];
  useEffect(() => {
    gsap.fromTo(
      BooksTitle,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: BooksTitle,
          toggleActions: "play none none none",
          start: "20px 90%",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      Books_content,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        // delay: 0.3,
        scrollTrigger: {
          trigger: Books_content,
          toggleActions: "play none none none",
          start: "100% 80%",
          // markers: true,
        },
      },
      "this is 2nd animation"
    );
    gsap.fromTo(
      allbooks.children,
      { opacity: 0 },
      {
        opacity: 1,

        stagger: 0.3,
        scrollTrigger: {
          trigger: allbooks,
          toggleActions: "play none none none",
          start: "50px 80%",
          // markers: true,
        },
      },
      "this is books cad animation"
    );
    // eslint-disable-next-line
  }, []);

  return (
    <div className="edina_tm_books ">
      <div id="books" className="edina_tm_title bg-white px-10 py-10">
        <div className="relative overflow-hidden">
          <h3 ref={(elem) => (BooksTitle = elem)}>Books</h3>
        </div>
        <div className="relative overflow-hidden">
          {/* <p
            ref={(elem) => (Books_content = elem)}
            className="min-w-[90%] text-justify"
          >
            Professor Beydoun’s insight has been featured in the Washington
            Post, the New York Times, San Francisco Chronicle, Time, Salon, and
            ESPN; and television and radio news programming including CNN, the
            BBC, Fox, NBC and ABC News.
          </p> */}
        </div>
        <div ref={(elem) => (allbooks = elem)}>
          {Books.map((elem, index) => {
            return (
              <a href={elem.url} target={"_blank"} rel="noreferrer">
                <div
                  key={index}
                  className="bg-[#F9F9FC] relative mt-7 md:flex px-5 py-5 md:px-10 md:py-10 rounded-lg shadow-md gap-12"
                >
                  {elem.new && (
                    <span className="hidden  absolute top-2 -left-12 h-[70px] w-[70px] md:inline-flex items-center justify-center px-3 py-3 text-sm font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full ">
                      Latest
                    </span>
                  )}

                  <div className="flex-[0.7] m-auto">
                    <img
                      src={elem.img}
                      alt=""
                      className="m-auto object-cover"
                    />
                  </div>
                  <div className="content flex-[1.3] space-y-3 mt-5 md:mt-0 text-center md:text-left flex flex-col  justify-center">
                    <h4 className="font-bold text-xl">{elem.name}</h4>
                    {/* <p className="text-justify">
                      {elem.desc.length > 100 ? (
                        <p>{elem.desc.substring(0, 100)} ...</p>
                      ) : (
                        elem.desc
                      )}
                    </p> */}
                    {/* eslint-disable-next-line */}
                    <a href={elem.url} target={"_blank"}>
                      <button className="mt-5 bg-transparent text-lg hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Available Now
                      </button>
                    </a>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Books;
