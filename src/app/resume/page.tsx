import Header from "@/components/Header"
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const experiences = [
  {
    company: "ArtistHub",
    positions: [
      {
        title: "Lead Software Engineer",
        period: "OCTOBER 2024 - PRESENT",
        responsibilities: [
          "Direct the design and development of interactive and responsive UI components using Vue.js, ensuring seamless integration with backend systems through GraphQL API calls",
          "Design and maintain a scalable GraphQL API for authentication and core functionalities, ensuring robust performance",
          "Optimize database performance and manage complex queries by leveraging Hasura's capabilities",
          "Oversee deployment and hosting strategies, delivering a scalable and high-performance solution",
          "Mentor and collaborate with a team of developers and designers, fostering best practices and ensuring project alignment with business goals"
        ]
      },
      {
        title: "Software Engineer",
        period: "APRIL 2021 - SEPTEMBER 2024",
        responsibilities: [
          "Worked collaboratively with other developers and designers to build a high-quality software application using Vue.js, Node.js, Hasura, and Braintree",
          "Built interactive and responsive UI components using Vue.js and integrated them with the backend using GraphQL API calls",
          "Implemented Braintree for payment processing, including subscriptions and one-time payments",
          "Designed and developed a GraphQL API for authentication and other functionality",
          "Utilized Hasura to handle complex database queries and optimize database performance",
          "Utilized Vercel for deploying the web application, ensuring optimal performance and scalability of the hosting solution"
        ]
      }
    ]
  },
  {
    company: "Nvoko",
    positions: [
      {
        title: "Full Stack Engineer",
        period: "SEPTEMBER 2020 - JULY 2023",
        responsibilities: [
          "Contributed to the development team in building a web application for Nvoko",
          "Collaborated with the development team to identify and fix bugs, and implemented new features to improve the functionality of the web application",
          "Integrated a payment processing system using Stripe for the web application, which included setting up and managing subscriptions"
        ]
      }
    ]
  },
  {
    company: "Andela",
    positions: [
      {
        title: "Associate Software Engineer",
        period: "AUGUST 2019 - APRIL 2020",
        responsibilities: [
          "Collaborated with a remote team of developers to build and maintain custom software solutions for a client in the healthcare industry",
          "Contributed to the development of various web applications using technologies such as React.js, Node.js, GraphQL, and other related technologies"
        ]
      }
    ]
  },
  {
    company: "Lifestores Pharmacy",
    positions: [
      {
        title: "Apprentice Software Engineer",
        period: "JANUARY 2020 - APRIL 2020",
        responsibilities: [
          "Worked on a pharmacy management platform that helps streamline pharmacy operations",
          "Built interactive and responsive UI components using React.js and integrated them with the backend using GraphQL API calls",
          "Conducted thorough code reviews to ensure adherence to best practices and maintain high code quality standards"
        ]
      }
    ]
  },
  {
    company: "Imperium",
    positions: [
      {
        title: "Full Stack Software Developer",
        period: "FEBRUARY 2019 - AUGUST 2019",
        responsibilities: [
          "Designed and developed software applications using React.js, Node.js, Express.js, PostgreSQL, and MongoDB",
          "Worked with multiple AWS services such as S3, Elastic Beanstalk, Lambda, SES, and others",
          "Worked with various deployment platforms including Vercel, Netlify, and Heroku"
        ]
      }
    ]
  }
]

export default function Resume() {
  return (
    <main>
      <Header />
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Resume</h1>
          <Link
            href="/resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500"
          >
            <ArrowDownTrayIcon className="h-5 w-5" />
            Download PDF
          </Link>
        </div>

        <div className="space-y-12">
          {/* Skills Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium mb-3">Frontend Development</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>React & React Native</li>
                  <li>Next.js & Nuxt.js</li>
                  <li>Vue.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Bootstrap</li>
                  <li>Material UI</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-3">Backend Development</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Node.js</li>
                  <li>Nest.js</li>
                  <li>Express.js</li>
                  <li>RESTful APIs</li>
                  <li>GraphQL</li>
                  <li>Hasura</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-3">Database & Cloud</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                  <li>DynamoDB</li>
                  <li>AWS Services</li>
                  <li>Vercel & Netlify</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="space-y-6">
                  <h3 className="text-xl font-medium">{exp.company}</h3>
                  {exp.positions.map((position, posIndex) => (
                    <div key={posIndex} className="ml-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-2">
                        <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400">
                          {position.title}
                        </h4>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {position.period}
                        </span>
                      </div>
                      <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600 dark:text-gray-400">
                        {position.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 