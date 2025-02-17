"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Dummy blog posts (Replace with API data)
const blogPosts = [
  {
    id: 1,
    title: "Understanding Next.js 14: What's New?",
    description: "Explore the latest features in Next.js 14 and how they improve performance and development experience.",
    image: "https://www.letsdogre.com/wp-content/uploads/2024/10/computer.png",
    link: "/blog/nextjs-14"
  },
  {
    id: 2,
    title: "Building a Full-Stack App with Next.js & Prisma",
    description: "A step-by-step guide to integrating Prisma with Next.js for a powerful full-stack experience.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-ciAYVH8UlH3ZaZC3NkN3ow9CrG36O5crg&s",
    link: "/blog/nextjs-prisma"
  },
  {
    id: 3,
    title: "Mastering ShadCN Components for UI",
    description: "Learn how to efficiently style and build reusable UI components with ShadCN and Tailwind CSS.",
    image: "/shadcn.jpg",
    link: "/blog/shadcn"
  }
];

// Dummy categories (Replace with actual categories)
const categories = ["All", "Web Development", "AI & Machine Learning", "Cloud Computing", "Cybersecurity", "Blockchain"];

const HomePage = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold">Welcome to Our NextBlog</h1>
        <p className="text-lg text-gray-600 mt-5">
          Stay updated with the latest trends in development, AI, and cybersecurity, Health care and many more.
        </p>
        <Link href="/blog">
          <Button className="mt-6">Explore Articles</Button>
        </Link>
      </section>

        {/* Categories Section */}
        <section className="mt-12 text-center">
        <h2 className="text-3xl font-semibold">Explore Topics</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {categories.map((category, index) => (
            <Button key={index} variant="secondary" className="px-4 py-2">
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-center">Latest Articles</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition border-2">
              <CardHeader className="p-0">
                <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-t-lg" />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle>{post.title}</CardTitle>
                <p className="text-gray-600 text-sm mt-2">{post.description}</p>
                <Link href={post.link}>
                  <Button variant="outline" className="mt-4">Read More</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

    

      {/* About Section */}
      {/* <section className="mt-12 text-center">
        <h2 className="text-3xl font-semibold">About This Blog</h2>
        <div className="border-2 border-slate-500 rounded-lg p-6 mt-4">
          <p className="text-gray-700">
            Our blog is dedicated to sharing insights, tutorials, and deep dives into modern technology trends.
            Whether you're a developer, designer, or tech enthusiast, you'll find valuable content here.
          </p>
        </div>
      </section> */}

    </div>
  );
}

export default HomePage