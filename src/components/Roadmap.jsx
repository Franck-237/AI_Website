import React from "react";

import Heading from "./Heading";
import roadmap1 from "../assets/Roadmap/image-1.png";
import roadmap2 from "../assets/Roadmap/image-2.png";
import roadmap3 from "../assets/Roadmap/image-3.png";
import roadmap4 from "../assets/Roadmap/image-4.png";
import grid from "../assets/img/grid.png";
import Tagline from "./design/Tagline";
import check2 from "../assets/img/check-02.svg";
import loading1 from "../assets/img/loading-01.svg";
import Button from "./Button";

const Roadmap = () => {
  const roadmap = [
    {
      id: "0",
      title: "Voice recognition",
      text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Gamification",
      text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Chatbot customization",
      text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "Integration with APIs",
      text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap4,
    },
  ];
  return (
    <div className="overflow-hidden">
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="What we're working on" />
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((data) => {
            const status = data.status === "done" ? "Done" : "In progress";

            return (
              <div
                key={data.id}
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  data.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      src={grid}
                      alt="Grid"
                      className="w-full"
                      width={550}
                      height={550}
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Tagline>{data.date}</Tagline>
                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          src={data.status === "done" ? check2 : loading1}
                          alt={data.status}
                          className="mr-2.5"
                          width={16}
                          height={16}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>
                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        src={data.imageUrl}
                        alt={data.title}
                        className="w-full"
                        width={630}
                        height={420}
                      />
                    </div>
                    <h4 className="h4 mb-4">{data.title}</h4>
                    <p className="body-2 text-n-4">{data.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="/roadmap">Our roadmap</Button>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
