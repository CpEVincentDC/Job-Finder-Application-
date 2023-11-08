import React from "react";

// Imported icons
import { BiTimeFive } from "react-icons/bi";

//  imported images
import logo1 from "../../assets/logo (1).jpg";
import logo2 from "../../assets/logo (1).png";
import logo3 from "../../assets/logo (2).png";
import logo4 from "../../assets/logo (3).png";
import logo5 from "../../assets/logo (4).png";
import logo6 from "../../assets/logo (5).png";
import logo7 from "../../assets/logo (6).png";
import logo8 from "../../assets/logo (7).png";
import logo9 from "../../assets/logo (8).png";
import logo10 from "../../assets/logo (9).png";

// Array method mapping properties

const Data = [
  {
    id: 1,
    image: logo1,
    title: "Software Dev",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perferendis consectetur autem saepe neque est veniam,",
    company: "Novac Linus Co.",
  },
  {
    id: 2,
    image: logo2,
    title: "Web Developer",
    time: "Now",
    location: "USA",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perferendis consectetur autem saepe neque est veniam,",
    company: "Novac Linus Co.",
  },
  {
    id: 3,
    image: logo3,
    title: "Computer Engr.",
    time: "Now",
    location: "Philippines",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perferendis consectetur autem saepe neque est veniam,",
    company: "Novac Linus Co.",
  },
  {
    id: 4,
    image: logo4,
    title: "Data Analyst",
    time: "Now",
    location: "Korea",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perferendis consectetur autem saepe neque est veniam,",
    company: "Novac Linus Co.",
  },
  {
    id: 5,
    image: logo5,
    title: "IT Support",
    time: "Now",
    location: "Japan",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perferendis consectetur autem saepe neque est veniam,",
    company: "Novac Linus Co.",
  },
  {
    id: 6,
    image: logo6,
    title: "System Engr.",
    time: "Now",
    location: "USA",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perferendis consectetur autem saepe neque est veniam,",
    company: "Novac Linus Co.",
  },
  {
    id: 8,
    image: logo7,
    title: "Hotdog Vendor",
    time: "Now",
    location: "California",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perferendis consectetur autem saepe neque est veniam,",
    company: "Novac Linus Co.",
  },
  {
    id: 9,
    image: logo8,
    title: "Lambanog",
    time: "Now",
    location: "Visayas",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perferendis consectetur autem saepe neque est veniam,",
    company: "Novac Linus Co.",
  },
  {
    id: 10,
    image: logo9,
    title: "Data Science",
    time: "Now",
    location: "Earth",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perferendis consectetur autem saepe neque est veniam,",
    company: "Novac Linus Co.",
  },
  {
    id: 11,
    image: logo10,
    title: "PHP Back End",
    time: "Now",
    location: "Mars",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perferendis consectetur autem saepe neque est veniam,",
    company: "Novac Linus Co.",
  },
];

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            // Return all the single job post based on the ID
            <div
              key={id}
              className="group group/item singleJob w-[250px] p-[20px] bg-cardColor rounded-[10px] hover:bg-hoverCard shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive /> {time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>
              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white ">
                {desc}
              </p>

              <div className="company flex items-center gap-2">
                <img src={image} alt="Company Logo" className="w-[10%]" />
                <span className="text-[14px] py-[1rem] block group:hover:text-white">
                  {company}
                </span>
              </div>
              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
