"use client";

import { Typewriter } from "react-simple-typewriter";

export default function aboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Intro / Hero */}
      <h2 className="text-2xl text-center sm:text-3xl md:text-4xl font-bold text-pink-500 mb-3">
        <Typewriter
          words={["Hi, I'm Md Musarraf Hosen "]}
          loop={Infinity}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>
      <h3 className="text-sm sm:text-base md:text-lg text-gray-600 text-center mb-4">
        💻 Frontend Developer | MERN Stack Learner | Future Full-Stack Developer
      </h3>
      <p className="text-sm sm:text-base md:text-lg text-gray-400 text-center mb-8">
        Sylhet, Bangladesh | freelancermca52@gmail.com
      </p>

      {/* About Me Section */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 text-center mb-6 mt-12">
        About Me
      </h2>
      <p className="text-gray-600 text-base sm:text-lg md:text-lg leading-relaxed text-justify mb-4">
        I’m building Full Stack and MERN Stack projects to strengthen my skills
        and create practical digital experiences. From crafting UI with HTML,
        CSS, Tailwind, and JavaScript, I progressed to React and backend
        technologies like Node.js, Express.js, Firebase, and MongoDB. I’m now
        diving into TypeScript and Next.js to build smoother, faster, and more
        scalable apps.
      </p>
      <p className="text-gray-600 text-base sm:text-lg md:text-lg leading-relaxed text-justify mb-8">
        I’m passionate about crafting beautiful, intuitive user interfaces and
        developing web applications that solve meaningful problems. If you have
        questions about React, Firebase, MongoDB, or API integration, don’t
        hesitate to reach out — I love helping others grow.
      </p>

      {/* Skills & Technologies Section */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 text-center mb-6 mt-12">
        🧠 Skills & Technologies
      </h2>
      <p className="text-gray-600 text-base sm:text-lg md:text-lg text-center mb-12">
        <span className="block">
          <strong>Frontend:</strong> HTML, CSS, Tailwind CSS, JavaScript,
          React.js
        </span>
        <span className="block">
          <strong>Backend:</strong> Node.js, Express.js
        </span>
        <span className="block">
          <strong>Database:</strong> MongoDB, Firebase
        </span>
        <span className="block">
          <strong>Other:</strong> Next.js
        </span>
      </p>

      {/* Deployment & Tools Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 text-center mb-8">
          ⚙️ Deployment & Tools
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <div className="flex flex-col items-center gap-2 p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-600 font-semibold text-lg">Firebase</p>
          </div>

          <div className="flex flex-col items-center gap-2 p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-600 font-semibold text-lg">Vercel</p>
          </div>

          <div className="flex flex-col items-center gap-2 p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-600 font-semibold text-lg">Netlify</p>
          </div>
        </div>
      </section>
    </div>
  );
}
