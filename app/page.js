"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Shield, Zap, MessageCircle } from "lucide-react"
import Link from 'next/link'
import Header from "@/components/ui/header"
import { Card, CardContent } from "@/components/ui/card"
import { Analytics } from "@vercel/analytics/react"

export default function EnhancedDermAILanding() {
  return (
    
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#a0e7ff] via-[#98FF98] to-[#b48fde] text-[#2F4F4F]">
      <Analytics />
      <Header />
      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-[#a0e7ff] via-[#98FF98] to-[#b48fde]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#FF7F50] via-[#4CAF50] to-[#b48fde]">
                Meet DermAI: Your Personal Skincare Assistant
              </h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-[#2F4F4F] backdrop-blur-sm bg-white/30 p-4 rounded-lg">
                Get expert skincare advice anytime, anywhere. DermAI uses advanced AI to provide personalized skincare recommendations.
              </p>
              <div className="space-x-4">
                <Link href="/home">
                <Button className="bg-gradient-to-r from-[#FF7F50] to-[#b48fde] hover:bg-white hover:bg-none text-white hover:text-[#FF7F50] text-lg py-6 px-8">
                    Start Chatting
                  </Button>
                </Link>
                <Button variant="outline" className="text-[#FF7F50] hover:bg-gradient-to-r hover:from-[#FF7F50] hover:to-[#b48fde] hover:text-white transition-all duration-300 text-lg py-6 px-8">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 backdrop-blur-lg bg-white/30">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#2F4F4F] via-[#4CAF50] to-[#b48fde]">
              Why Choose DermAI?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {[
                { icon: Shield, title: "Expert Knowledge", description: "Powered by the latest dermatological research and AI technology." },
                { icon: Zap, title: "Instant Responses", description: "Get immediate answers to your skincare questions, 24/7." },
                { icon: MessageCircle, title: "Personalized Advice", description: "Receive tailored recommendations based on your unique skin type and concerns." }
              ].map((feature, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm border-none">
                  <CardContent className="flex flex-col items-center space-y-4 p-6">
                    <feature.icon className="h-16 w-16 text-[#FF7F50] group-hover:text-[#b48fde] transition-colors duration-300" />
                    <h3 className="text-2xl font-bold text-[#2F4F4F] group-hover:text-[#FF7F50] transition-colors duration-300">{feature.title}</h3>
                    <p className="text-[#2F4F4F] text-center">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#a0e7ff] via-[#98FF98] to-[#b48fde]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#2F4F4F] via-[#4CAF50] to-[#b48fde]">
                Ready to Transform Your Skincare Routine?
              </h2>
              <p className="mx-auto max-w-[600px] text-xl text-[#2F4F4F] backdrop-blur-sm bg-white/30 p-4 rounded-lg">
                Start chatting with DermAI now and discover your path to healthier, more radiant skin.
              </p>
              <Link href="/home">
                <Button className="bg-gradient-to-r from-[#FF7F50] to-[#b48fde] hover:bg-white hover:bg-none text-white hover:text-[#FF7F50] text-lg py-6 px-8">
                    Get Started Now
                  </Button>
               
              </Link>
              <p className="text-sm text-[#2F4F4F] max-w-[600px] backdrop-blur-sm bg-white/30 p-2 rounded-lg">
                You should not be required to login but if you do, use the following Email: test@hotmail.com Password: testtest
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 px-4 md:px-6 bg-white backdrop-blur-sm border-t border-[#2F4F4F]/20">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-[#2F4F4F]">© 2025 DermAI. All rights reserved.</p>
          <nav className="flex gap-6 mt-4 sm:mt-0">
            <Link className="text-sm hover:text-[#FF7F50] transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:text-[#FF7F50] transition-colors" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
   
  )
}