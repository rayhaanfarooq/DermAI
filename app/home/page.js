"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import Header from "../components/Header";
import Link from "next/link";
import Feather from "lucide-react";

export default function ChatbotPage() {
  const [user, loading] = useAuth();
  const scrollRef = useRef(null);
  const router = useRouter();
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hi! I'm the DermAI support assistant. How can I help you today?`,
    },
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (loading) return;
    if (!user) return router.push("/auth/login");
  }, [user, loading, router]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (input.trim() === "") return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: input },
      { role: "assistant", content: "" },
    ]);

    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([...messages, { role: "user", content: input }]),
      });

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const text = decoder.decode(value, { stream: true });
        setMessages((prevMessages) => {
          const lastMessage = prevMessages[prevMessages.length - 1];
          const otherMessages = prevMessages.slice(0, prevMessages.length - 1);
          return [
            ...otherMessages,
            { ...lastMessage, content: lastMessage.content + text },
          ];
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#ADD8E6] via-[#98FF98] to-[#E6E6FA]">
      {/* <header
        className={`fixed w-full px-4 lg:px-6 h-16 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "bg-white/70 backdrop-blur-lg shadow-md" : "bg-transparent"
        }`}
      >
        <Link className="flex items-center justify-center" href="#">
          <Feather className="h-8 w-8 mr-2 text-[#FF7F50]" />
          <span className="font-bold text-xl text-[#FF7F50]">DermAI</span>
        </Link>
        <nav className="flex gap-6">
          <Link
            href="/home"
            className="text-sm font-medium hover:text-[#FF7F50] transition-colors"
          >
            Features
          </Link>

          <Link
            className="text-sm font-medium hover:text-[#FF7F50] transition-colors"
            href="#"
          >
            About
          </Link>
          <Link
            href="/auth/signin"
            className="text-sm font-medium hover:text-[#FF7F50] transition-colors"
          >
            Sign In
          </Link>

          <Link
            href="/auth/signup"
            className="text-sm font-medium hover:text-[#FF7F50] transition-colors"
          >
            Sign Up
          </Link>
        </nav>
      </header> */}
      {/* <Header /> */}
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <Card className="w-full max-w-2xl mx-auto backdrop-blur-lg bg-white/30 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-[#2F4F4F]">
              DermAI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96 overflow-y-auto mb-4 p-4 border border-[#B0C4DE] rounded-md bg-white/50">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 p-2 rounded-lg ${
                    message.role === "user"
                      ? "bg-[#ADD8E6]/50 ml-auto"
                      : "bg-[#98FF98]/50"
                  } ${message.role === "user" ? "text-right" : "text-left"}`}
                  style={{ maxWidth: "70%" }}
                >
                  {message.content}
                </div>
              ))}
              <div ref={scrollRef} />
            </div>
            <div className="flex space-x-2">
              <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type your message..."
                className="flex-grow bg-white/50 border-[#B0C4DE] focus:ring-2 focus:ring-[#ADD8E6] focus:border-[#ADD8E6]"
              />
              <Button
                onClick={sendMessage}
                className="bg-[#ADD8E6] hover:bg-[#98FF98] focus:ring-[#E6E6FA] focus:ring-offset-[#F5F5DC] text-[#2F4F4F]"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
