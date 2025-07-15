import { Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-12 max-w-3xl mx-auto">
      {/* About Section */}
      <section className="mb-20">
        <h1 className="text-4xl font-bold mb-2">Joshua Ly</h1>
        <p className="text-lg text-gray-700">
          Final-year computer science student passionate about backend engineering. Seeking software engineering internships.
        </p>
      </section>

      {/* Projects Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-6">
          <li className="border p-4 rounded shadow">
            <h3 className="text-xl font-medium">Task Manager App</h3>
            <p className="text-gray-600">
              A full-stack task manager built with Next.js and MongoDB. Supports CRUD, user auth, and responsive UI.
            </p>
            <a className="text-blue-600" href="https://github.com/joshly/task-manager" target="_blank">
              View on GitHub
            </a>
          </li>
          <li className="border p-4 rounded shadow">
            <h3 className="text-xl font-medium">Portfolio Website</h3>
            <p className="text-gray-600">
              This personal portfolio, built with Next.js, Tailwind, and deployed on Vercel.
            </p>
            <a className="text-blue-600" href="https://github.com/joshly/portfolio" target="_blank">
              View on GitHub
            </a>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <div className="flex space-x-4">
          <a href="mailto:joshua@example.com" className="hover:text-blue-600">
            <Mail />
          </a>
          <a href="https://github.com/joshly" target="_blank" className="hover:text-blue-600">
            <Github />
          </a>
          <a href="https://linkedin.com/in/joshly" target="_blank" className="hover:text-blue-600">
            <Linkedin />
          </a>
        </div>
      </section>
    </main>
  );
}
