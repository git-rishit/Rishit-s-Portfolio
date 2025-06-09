import React from "react";

const ProjectCard = ({ title, description, tech, category, gradient }) => (
  <div
    className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
  >
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
          <div className="w-6 h-6 bg-white/60 rounded" />
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200 text-white text-sm">
            Live Demo
          </button>
          <button className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200 text-white text-sm">
            GitHub
          </button>
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/80 text-sm mb-4 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-white/20 text-white text-xs rounded-full backdrop-blur-sm"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur-sm">
          {category}
        </span>
      </div>
    </div>
  </div>
);

export default function Projects() {
  const cloneProjects = [
    {
      title: "Amazon Clone",
      description:
        "Complete e-commerce frontend with product listings, shopping cart, and user interface mimicking Amazon's design.",
      tech: ["HTML5", "CSS3", "Responsive Design"],
      category: "Clone",
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "Flipkart Clone",
      description:
        "Indian e-commerce platform replica with product categories, filters, and mobile-first responsive design.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      category: "Clone",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Meesho Clone",
      description:
        "Social commerce platform clone with seller dashboard, product catalog, and modern UI design.",
      tech: ["HTML5", "CSS3", "Flexbox"],
      category: "Clone",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      title: "Myntra Clone",
      description:
        "Fashion e-commerce site with product galleries, wishlist features, and trendy UI design.",
      tech: ["HTML5", "CSS3", "CSS Animations"],
      category: "Clone",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Netflix Clone",
      description:
        "Streaming platform UI with movie carousels, hero sections, and Netflix's signature dark theme.",
      tech: ["HTML5", "CSS3", "Grid Layout"],
      category: "Clone",
      gradient: "from-red-600 to-black",
    },
    {
      title: "Spotify Clone",
      description:
        "Music streaming interface with playlists, player controls, and Spotify's green accent theme.",
      tech: ["HTML5", "CSS3", "Flexbox"],
      category: "Clone",
      gradient: "from-green-500 to-black",
    },
    {
      title: "Zomato Clone",
      description:
        "Food delivery platform with restaurant listings, menu displays, and location-based features.",
      tech: ["HTML5", "CSS3", "Media Queries"],
      category: "Clone",
      gradient: "from-red-500 to-orange-600",
    },
  ];

  const bigProjects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured online shopping platform with user authentication, cart management, and payment integration.",
      tech: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
      category: "Web App",
      gradient: "from-purple-600 to-blue-600",
    },
    {
      title: "Number Guessing Game",
      description:
        "Interactive guessing game with multiple difficulty levels, score tracking, and engaging user feedback.",
      tech: ["JavaScript", "HTML5", "CSS3"],
      category: "Game",
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "QR Code Generator",
      description:
        "Generate custom QR codes for text, URLs, and contact information with downloadable options.",
      tech: ["JavaScript", "QR API", "Canvas"],
      category: "Utility",
      gradient: "from-gray-600 to-gray-800",
    },
    {
      title: "Smart Dictionary",
      description:
        "Comprehensive dictionary app with word definitions, pronunciations, synonyms, and etymology.",
      tech: ["JavaScript", "Dictionary API", "CSS3"],
      category: "Utility",
      gradient: "from-indigo-600 to-purple-600",
    },
    {
      title: "Stone Paper Scissors",
      description:
        "Classic game with computer AI, score tracking, animations, and multiple game modes.",
      tech: ["JavaScript", "CSS Animations", "HTML5"],
      category: "Game",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      title: "Smart Todo List",
      description:
        "Task management app with categories, due dates, priority levels, and local data persistence.",
      tech: ["JavaScript", "Local Storage", "CSS Grid"],
      category: "Productivity",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      title: "Random Joke Generator",
      description:
        "Humor app that fetches jokes from multiple APIs with categories, favorites, and sharing features.",
      tech: ["JavaScript", "REST API", "CSS3"],
      category: "Entertainment",
      gradient: "from-pink-500 to-red-500",
    },
    {
      title: "Lyrics Finder",
      description:
        "Music app to search and display song lyrics with artist information and album details.",
      tech: ["JavaScript", "Lyrics API", "CSS3"],
      category: "Entertainment",
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  const reactProjects = [
    {
      title: "Personal Portfolio",
      description:
        "Modern, responsive portfolio website showcasing my projects, skills, and professional journey.",
      tech: ["React.js", "Tailwind CSS", "React Router"],
      category: "Portfolio",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Password Generator Pro",
      description:
        "Advanced password generator with customizable length, character sets, and security strength indicators.",
      tech: ["React.js", "Tailwind CSS", "Crypto API"],
      category: "Security",
      gradient: "from-emerald-500 to-green-600",
    },
    {
      title: "AI Knowledge Bot",
      description:
        "Intelligent chatbot powered by OpenAI API that can answer questions and provide helpful information on any topic.",
      tech: ["React.js", "OpenAI API", "Tailwind CSS"],
      category: "AI/ML",
      gradient: "from-violet-600 to-purple-700",
    },
    {
      title: "Restaurant Explorer",
      description:
        "Comprehensive restaurant guide with detailed menus, ratings, reviews, and location-based recommendations.",
      tech: ["React.js", "Restaurant API", "Tailwind CSS", "Geolocation"],
      category: "Food & Dining",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 px-6 pt-24 pb-16">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6">
              My Projects
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              A showcase of my journey through web development, from
              pixel-perfect clones to innovative applications
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-white/10 text-white rounded-full backdrop-blur-sm border border-white/20">
                25+ Projects Completed
              </span>
              <span className="px-6 py-3 bg-white/10 text-white rounded-full backdrop-blur-sm border border-white/20">
                Multiple Technologies
              </span>
              <span className="px-6 py-3 bg-white/10 text-white rounded-full backdrop-blur-sm border border-white/20">
                Continuous Learning
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Website Clones Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Website Clones
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Pixel-perfect recreations of popular websites using HTML and CSS,
              focusing on responsive design and attention to detail
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloneProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Major Projects Section */}
      <section className="px-6 py-16 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Core Projects
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Interactive applications and games built with vanilla JavaScript,
              showcasing fundamental programming concepts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bigProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* React Projects Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              React Applications
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Modern web applications built with React.js and Tailwind CSS,
              featuring advanced functionality and API integrations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reactProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-16 bg-gradient-to-r from-purple-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            I'm always excited to work on new projects and explore cutting-edge
            technologies. Whether it's a simple website or a complex web
            application, I'm ready to bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/contact";
              }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/git-rishit"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
