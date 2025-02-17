"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail } from "lucide-react";

// TODO: Change the links of GitHub and LinkedIn icons
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold">About Our Blog</h1>
        <div className="border-2 border-slate-500 rounded-lg p-6 mt-4">
          <p className="text-lg text-gray-600">
            A place where ideas come to life. Read insightful articles, tech deep-dives, and personal experiences from our contributors.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-semibold">Our Mission</h2>
        <div className="border-2 border-slate-500 rounded-lg p-6 mt-4">
          <p className="text-gray-700">
            Our goal is to provide high-quality, well-researched, and engaging content for developers, designers, and tech enthusiasts.
            We believe in the power of knowledge sharing and open discussions.
          </p>
        </div>
      </section>

      {/* Author Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-center">Meet the Creator</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center border-2 border-slate-500 rounded-lg p-6 mt-4 gap-6">
          {/* Author Card */}
          <Card className="w-full sm:w-80 text-center">
            <CardHeader>
              <Avatar className="mx-auto h-20 w-20">
                <AvatarImage src="/person.webp" alt="Author" />
                <AvatarFallback>MH</AvatarFallback>
              </Avatar>
              <CardTitle className="mt-4">Mohammed Hassan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Full-stack developer passionate about web technologies, AI, and Data Science.
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <a href="https://github.com/MohammedHassan07" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a href="mailto:your@email.com">
                  <Button variant="ghost">
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <h2 className="text-3xl font-semibold">Get in Touch</h2>
            <p className="text-gray-700 mt-4">
              If you're interested in collaborating, have valuable insights to share, or would like to suggest topics for our blog, we'd love to connect! 
              Feel free to reach out to us via social media or send us an email—we are always open to meaningful discussions and new ideas.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start">
              <Link href="/contact">
                <Button>Contact Me</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
