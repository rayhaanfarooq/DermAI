import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Header from "@/components/ui/header";
import { CheckCircle2 } from "lucide-react";

const PricingTier = ({ title, description, features }) => (
  <Card className="w-full max-w-sm mx-auto backdrop-blur-lg bg-white/30 shadow-xl transition-transform hover:scale-105">
    <CardHeader>
      <CardTitle className="text-2xl font-bold text-center text-[#2F4F4F]">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-center mb-4 text-[#2F4F4F]">{description}</p>
      <p className="text-3xl font-bold text-center mb-6 text-[#4CAF50]">Free</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-[#2F4F4F]">
            <CheckCircle2 className="h-5 w-5 mr-2 text-[#4CAF50]" />
            {feature}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const PricingPage = () => {
  const tiers = [
    {
      title: "Basic",
      description: "Perfect for getting started with skincare",
      features: [
        "Access to skincare information database",
        "Basic skin type analysis",
        "Product recommendations",
      ],
    },
    {
      title: "Advanced",
      description: "For those looking to dive deeper into skincare",
      features: [
        "All Basic features",
        "Personalized skincare routines",
        "Ingredient analysis",
        "Skin concerns tracking",
      ],
    },
    {
      title: "Expert",
      description: "Comprehensive skincare knowledge and tools",
      features: [
        "All Advanced features",
        "AI-powered skin analysis",
        "Virtual skincare consultations",
        "Exclusive educational content",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#a0e7ff] via-[#98FF98] to-[#b48fde]">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-[#2F4F4F] mb-8">
          Pricing Plans
        </h1>
        <p className="text-xl text-center text-[#2F4F4F] mb-12 max-w-2xl">
          At DermAI, we believe everyone deserves access to quality skincare information. 
          Thats why all our plans are completely free, empowering you to make informed decisions about your skin health.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {tiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>
        <p className="mt-12 text-center text-[#2F4F4F] max-w-2xl">
          We understand the struggle of finding reliable skincare information. 
          Thats why weve made it our mission to provide comprehensive, accessible resources to everyone, free of charge. 
          Your journey to healthier skin starts here!
        </p>
      </main>
    </div>
  );
};

export default PricingPage;