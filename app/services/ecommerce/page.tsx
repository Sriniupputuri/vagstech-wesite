"use client";

import FadeIn from "@/components/animations/FadeIn";
import { ShoppingCart, CreditCard, BarChart } from "lucide-react";

export default function Ecommerce() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="gradient-text">E-commerce Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Building powerful online stores that drive sales
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: ShoppingCart,
              title: "Online Stores",
              description: "Custom e-commerce platforms with intuitive shopping experiences."
            },
            {
              icon: CreditCard,
              title: "Payment Integration",
              description: "Secure payment gateways and multiple payment options."
            },
            {
              icon: BarChart,
              title: "Analytics",
              description: "Detailed insights and reporting for business growth."
            }
          ].map((service, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="service-card">
                <service.icon className="h-12 w-12 text-[var(--dark-color)] mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-[var(--dark-color)]">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}