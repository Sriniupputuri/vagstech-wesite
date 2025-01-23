// "use client";

// import { motion } from "framer-motion";
// import FadeIn from "../animations/FadeIn";

// const stats = [
//   { number: "500+", label: "Projects Completed" },
//   { number: "98%", label: "Client Satisfaction" },
//   { number: "15+", label: "Years Experience" },
//   { number: "50+", label: "Team Members" },
// ];

// export default function StatsSection() {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* <FadeIn>
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
//             <span className="gradient-text">Our Impact in Numbers</span>
//           </h2>
//         </FadeIn> */}
        
//         {/* <div className="stats-grid">
//           {stats.map((stat, index) => (
//             <FadeIn key={index} delay={index * 0.1}>
//               <div className="stat-card">
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <h3 className="text-3xl md:text-4xl font-bold text-[var(--dark-color)] mb-2">
//                     {stat.number}
//                   </h3>
//                   <p className="text-gray-600">{stat.label}</p>
//                 </motion.div>
//               </div>
//             </FadeIn>
//           ))}
//         </div> */}
//       </div>
//     </section>
//   );
// }