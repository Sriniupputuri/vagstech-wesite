"use client";

import FadeIn from "@/components/animations/FadeIn";
import { ShoppingCart, CreditCard, BarChart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GameImg from '../../public/images/game_course_img.png'

export default function Cources() {
  return (
    <div className="pt-8 Pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="gradient-text">Courses</span>
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Building powerful online stores that drive sales
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: ShoppingCart,
              image: GameImg,
              title: "Master HTML5 Game Development: From Beginner to Intermediate",
              description: "Learn to create interactive, responsive HTML5 games from scratch in just 45 days!",
              Duration: '45 days!',
              keyPoints: 'Understand HTML5, CSS, and JavaScript essentials for game development Learn core principles of game mechanics, dynamics, and aesthetics. Build 2 interactive games using the Cocos game engine.Work with game assets, animations, and detect collisions in Cocos. Implement gravity, velocity, and acceleration for realistic gameplay. Explore Cocos Creator for efficient game development and scene management. Ensure fast performance and smooth gameplay across devices. Make games adaptable for mobile, tablet, and desktop platforms. Focus on hands-on learning by creating 2 complete games from scratch.'
            },
            {
              icon: CreditCard,
              image: 'https://i.ytimg.com/vi/Jm44dLXdarQ/maxresdefault.jpg',
              title: "Master Power BI: From Beginner to Intermediate",
              description: "Learn to create interactive, dynamic, and visually appealing business dashboards and reports in just 45 days!",
              Duration: '45 days!',
              keyPoints: 'Understand the essentials of Power BI, including data modeling, DAX, and visualization techniques. Learn core principles of data analysis, storytelling, and dashboard design. Build 2 interactive dashboards using Power BI Desktop. Work with data transformation, cleaning, and shaping using Power Query. Implement advanced DAX formulas for calculated columns, measures, and time intelligence. Explore Power BI Service for sharing, collaboration, and publishing reports. Ensure optimal performance and responsiveness for large datasets. Create adaptable dashboards for desktop, mobile, and tablet views. Focus on hands-on learning by creating 2 complete business intelligence projects from scratch.'
            },
            
          ].map((service, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="course-card">
                <div className="relative w-full h-52 rounded">
                    <Image 
                    src={service.image} 
                    alt="cover image"
                    layout="fill" 
                    objectFit="cover" 
                    />
                </div>
                <div className="p-4">
                    <p className="text-md font-semibold mb-4 text-[var(--dark-color)]">{service.title}</p>
                    <p className="text-gray-500">{service.description}</p>
                </div>
                    <div className="flex justify-end mt-auto p-2">
                        <Link href={`/know-more?title=${encodeURIComponent(service.title)}`} className="text-[var(--dark-color)] text-sm py-1">Know More..</Link>
                    </div>
                    {/* <ul className="p-2">
                        <li><span className="text-[var(--dark-color)] pr-2">➤</span>Responsive design</li>
                        <li><span className="text-[var(--dark-color)] pr-2">➤</span>Fast performance</li>
                        <li><span className="text-[var(--dark-color)] pr-2">➤</span>Easy customization</li>
                    </ul> */}
                {/* <service.icon className="h-12 w-12 text-[var(--dark-color)] mb-6" /> */}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}