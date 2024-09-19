"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Feather, Shield, Zap, MessageCircle } from "lucide-react"
import Link from 'next/link'
import Header from "@/components/ui/header"


export default function EnhancedDermAILanding() {



  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#a0e7ff] via-[#98FF98] to-[#b48fde] text-[#36454F]">
     <Header />
      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#ADD8E6] via-[#98FF98] to-[#E6E6FA]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-[#2F4F4F]">
                  Meet DermAI: Your Personal Skincare Assistant
                </h1>
                <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-[#36454F]">
                  Get expert skincare advice anytime, anywhere. DermAI uses advanced AI to provide personalized skincare recommendations.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/home">
                <Button className="bg-[#FF7F50] text-white hover:bg-white hover:text-[#FF7F50] hover:border-[#FF7F0] transition-colors">Start Chatting</Button>
                </Link>
                <Button variant="outline" className="text-[#FF7F50] hover:bg-[#FF7F50] hover:text-white transition-colors">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#FF7F50]">Why Choose DermAI?</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center p-6 bg-[#ADD8E6]/20 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <Shield className="h-16 w-16 text-[#FF7F50]" />
                <h3 className="text-2xl font-bold text-[#FF7F50]">Expert Knowledge</h3>
                <p className="text-[#36454F]">
                  Powered by the latest dermatological research and AI technology.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center p-6 bg-[#98FF98]/20 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <Zap className="h-16 w-16 text-[#FF7F50]" />
                <h3 className="text-2xl font-bold text-[#FF7F50]">Instant Responses</h3>
                <p className="text-[#36454F]">
                  Get immediate answers to your skincare questions, 24/7.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center p-6 bg-[#E6E6FA]/20 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <MessageCircle className="h-16 w-16 text-[#FF7F50]" />
                <h3 className="text-2xl font-bold text-[#FF7F50]">Personalized Advice</h3>
                <p className="text-[#36454F]">
                  Receive tailored recommendations based on your unique skin type and concerns.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#ADD8E6] via-[#98FF98] to-[#E6E6FA]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#2F4F4F]">Ready to Transform Your Skincare Routine?</h2>
                <p className="mx-auto max-w-[600px] text-xl text-[#36454F]">
                  Start chatting with DermAI now and discover your path to healthier, more radiant skin.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                {/* <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-white text-[#36454F] placeholder-[#B0C4DE]" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="bg-[#FF7F50] text-white hover:bg-[#FFC0CB] transition-colors">Get Started</Button>
                </form> */}
                <p className="text-xs text-[#36454F]">
                  You should not be required to login but if you do, use the following Email: test@hotmail.com Password: testtest
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-[#36454F]">© 2023 DermAI. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-xs hover:text-[#FF7F50] transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:text-[#FF7F50] transition-colors" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}