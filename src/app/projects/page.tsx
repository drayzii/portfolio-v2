import Header from "@/components/Header"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "CityMoshi",
    description:
      "A social discovery mobile app that helps users explore local events and connect with like-minded people. Features include personalized event recommendations, interactive maps, real-time chat, and an AI-powered suggestion system based on user preferences and behavior.",
    image: "/citymoshi.png",
    tags: ["React Native", "React", "Tailwind", "NestJS", "PostgreSQL", "Socket.io", "AWS"],
    websiteUrl: "https://citymoshi.com",
    demoUrl: null,
    githubUrl: null,
  },
  {
    title: "Ingoma",
    description:
      "A music streaming platform dedicated to preserving and sharing rare local music from the past. Features include digitization of vintage recordings, cultural context and history for each track, and a growing archive of previously hard-to-find traditional and historical local music.",
    image: "/ingoma.png",
    tags: ["React Native", "React", "Tailwind", "Express.js", "MongoDB", "WebSocket", "AWS"],
    websiteUrl: "https://ingoma.app",
    demoUrl: null,
    githubUrl: null,
  }
]

export default function Projects() {
  return (
    <main>
      <Header />
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.websiteUrl && (
                    <Link
                      href={project.websiteUrl}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-500"
                    >
                      Website
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </Link>
                  )}
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-500"
                    >
                      Live Demo
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-500"
                    >
                      GitHub
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 