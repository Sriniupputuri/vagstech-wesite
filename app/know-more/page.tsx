"use client";

import FadeIn from "@/components/animations/FadeIn";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import GameImg from '../../public/images/game_course_img.png'

const KnowMore = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "No Title Provided";

  let data = [
    {
      icon: 'ShoppingCart',
      image: GameImg,
      title: "Master HTML5 Game Development: From Beginner to Intermediate",
      description: "Learn to create interactive, responsive HTML5 games from scratch in just 45 days!",
      Duration: '45 days!',
      keyPoints: 'Understand HTML5, CSS, and JavaScript essentials for game development Learn core principles of game mechanics, dynamics, and aesthetics. Build 2 interactive games using the Cocos game engine.Work with game assets, animations, and detect collisions in Cocos. Implement gravity, velocity, and acceleration for realistic gameplay. Explore Cocos Creator for efficient game development and scene management. Ensure fast performance and smooth gameplay across devices. Make games adaptable for mobile, tablet, and desktop platforms. Focus on hands-on learning by creating 2 complete games from scratch.'
    },
    {
      icon: 'CreditCard',
      image: 'https://i.ytimg.com/vi/Jm44dLXdarQ/maxresdefault.jpg',
      title: "Master Power BI: From Beginner to Intermediate",
      description: "Learn to create interactive, dynamic, and visually appealing business dashboards and reports in just 45 days!",
      Duration: '45 days!',
      keyPoints: 'Understand the essentials of Power BI, including data modeling, DAX, and visualization techniques. Learn core principles of data analysis, storytelling, and dashboard design. Build 2 interactive dashboards using Power BI Desktop. Work with data transformation, cleaning, and shaping using Power Query. Implement advanced DAX formulas for calculated columns, measures, and time intelligence. Explore Power BI Service for sharing, collaboration, and publishing reports. Ensure optimal performance and responsiveness for large datasets. Create adaptable dashboards for desktop, mobile, and tablet views. Focus on hands-on learning by creating 2 complete business intelligence projects from scratch.'
    },
    
  ]

  data = data.filter((item) => item.title === title);

  return (
    <div className="Py-4">
      <div className="container my-auto mx-auto p-4">
        {data.map((item, index) => {
          return (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="h-20  flex justify-center items-center mb-2">
                <h2 className="text-lg text-[var(--dark-color)]">{item.title}</h2>
              </div>
              <div className="shadow-md rounded-sm md:flex">
                <div className="relative w-full h-[160px] md:w-1/2 md:h-auto rounded md:order-2">
                    <Image
                        src={item.image}
                        alt="cover image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <div className="p-4 md:w-3/4 md:order-1">
                  <h3 className="text-xl font-bold mb-4 text-[var(--dark-color)]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-thin">{item.description}</p>
                  <ul className="p-2">
                    {item.keyPoints.split(".").slice(0, -1).map((i) => {
                      return(
                        <FadeIn>
                          <li className="text-slate-500">
                            <span className="text-[var(--dark-color)] pr-2">➤</span>
                              {i}.
                          </li>
                        </FadeIn>
                      )
                    })}
                  </ul>
                </div>
                
                {/* <item.icon className="h-12 w-12 text-[var(--dark-color)] mb-6" /> */}
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
};

export default KnowMore;
