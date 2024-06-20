// import { useRouter } from 'next/navigation';
import Link from 'next/link';
import React from 'react'

const blogPage = () => {
    // const router = useRouter()
  return (
    <div className="p-24 grid grid-cols-3 gap-10">
      {blogs.map((blog) => (
        <div className="border-2 p-6 space-y-3" key={blog.id}>
          <h2 className="text-center font-bold text-lg">{blog.title}</h2>
          <p>{blog.snippet}</p>
          <button className="bg-white px-3 py-2 text-black">
            <Link href={`/blog/${blog.id}`}>View Details</Link>
          </button>
        </div>
      ))}
    </div>
  );
}

const blogs = [
  {
    id: 1,
    title: "Understanding JSON in Web Development",
    snippet:
      "Learn how JSON is used in web development and its benefits. We'll explore JSON syntax, data structures, and how to parse and generate JSON in different programming languages...",
    author: "Jane Doe",
    created_at: "2024-06-20T14:30:00Z",
    updated_at: "2024-06-20T14:30:00Z",
    tags: ["JSON", "Web Development"],
    comments_count: 5,
  },
  {
    id: 2,
    title: "A Guide to RESTful APIs",
    snippet:
      "Explore the principles of RESTful APIs and how to implement them. This guide covers the basics of HTTP methods, status codes, and best practices for designing scalable and secure APIs...",
    author: "John Smith",
    created_at: "2024-06-18T10:15:00Z",
    updated_at: "2024-06-18T10:15:00Z",
    tags: ["APIs", "REST", "Backend"],
    comments_count: 8,
  },
  {
    id: 3,
    title: "Getting Started with React",
    snippet:
      "This tutorial will help you get started with React, a popular JavaScript library for building user interfaces. Learn about components, state, props, and the basics of creating a React application...",
    author: "Emily Clark",
    created_at: "2024-06-15T08:00:00Z",
    updated_at: "2024-06-15T08:00:00Z",
    tags: ["React", "JavaScript", "Frontend"],
    comments_count: 10,
  },
  {
    id: 4,
    title: "CSS Grid Layout: A Comprehensive Guide",
    snippet:
      "Learn everything you need to know about CSS Grid Layout in this comprehensive guide. Understand grid containers, grid items, and how to create complex layouts with ease using CSS Grid...",
    author: "Michael Lee",
    created_at: "2024-06-10T12:45:00Z",
    updated_at: "2024-06-10T12:45:00Z",
    tags: ["CSS", "Web Design", "Frontend"],
    comments_count: 4,
  },
  {
    id: 5,
    title: "Understanding Asynchronous JavaScript",
    snippet:
      "Asynchronous JavaScript can be tricky, but this guide breaks it down into manageable chunks. Learn about callbacks, promises, async/await, and how to handle asynchronous operations effectively...",
    author: "Sarah Kim",
    created_at: "2024-06-05T16:30:00Z",
    updated_at: "2024-06-05T16:30:00Z",
    tags: ["JavaScript", "Asynchronous", "Programming"],
    comments_count: 6,
  },
  {
    id: 6,
    title: "Building a Node.js Application from Scratch",
    snippet:
      "Follow this step-by-step guide to building your first Node.js application. We cover setting up the environment, creating a server, handling routes, and connecting to a database...",
    author: "David Brown",
    created_at: "2024-05-30T09:00:00Z",
    updated_at: "2024-05-30T09:00:00Z",
    tags: ["Node.js", "Backend", "Programming"],
    comments_count: 12,
  },
  {
    id: 7,
    title: "Mastering Python for Data Science",
    snippet:
      "This article will take you through the essentials of Python for data science. Learn about libraries like NumPy, pandas, and Matplotlib, and how to manipulate data and create visualizations...",
    author: "Linda White",
    created_at: "2024-05-25T14:20:00Z",
    updated_at: "2024-05-25T14:20:00Z",
    tags: ["Python", "Data Science", "Programming"],
    comments_count: 7,
  },
  {
    id: 8,
    title: "The Importance of Web Accessibility",
    snippet:
      "Web accessibility is crucial for an inclusive internet. Learn how to make your site accessible to all users, including those with disabilities, by following best practices and guidelines...",
    author: "Chris Johnson",
    created_at: "2024-05-20T11:10:00Z",
    updated_at: "2024-05-20T11:10:00Z",
    tags: ["Accessibility", "Web Design"],
    comments_count: 3,
  },
  {
    id: 9,
    title: "Exploring the Vue.js Framework",
    snippet:
      "Vue.js is a versatile framework for building user interfaces. Discover its features, including the virtual DOM, reactivity, and component-based architecture, and see how it compares to other frameworks...",
    author: "Anna Wilson",
    created_at: "2024-05-15T13:50:00Z",
    updated_at: "2024-05-15T13:50:00Z",
    tags: ["Vue.js", "JavaScript", "Frontend"],
    comments_count: 5,
  },
  {
    id: 10,
    title: "Deploying Your Web Application",
    snippet:
      "Learn the steps involved in deploying a web application to the cloud. This guide covers various deployment options, CI/CD pipelines, and best practices for ensuring your application is secure and scalable...",
    author: "Mark Thompson",
    created_at: "2024-05-10T15:30:00Z",
    updated_at: "2024-05-10T15:30:00Z",
    tags: ["Deployment", "Cloud", "DevOps"],
    comments_count: 9,
  },
];


export default blogPage