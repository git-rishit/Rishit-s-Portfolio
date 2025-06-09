import React from "react";
import { Link } from "react-router-dom";

export default function Education() {
  const educationData = [
    {
      id: 1,
      title: "Frontend Website Developer Course",
      institution: "The Prime Steps Institute, Indore",
      type: "Professional Course",
      duration: "6 months",
      description:
        "Comprehensive frontend development course covering HTML, CSS, JavaScript, React.js, Bootstrap, and Tailwind CSS",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Bootstrap",
        "Tailwind CSS",
      ],
      icon: "💻",
      color: "from-green-400 to-green-600",
    },
    {
      id: 2,
      title: "Master's Degree in English Literature",
      institution: "Barkatullah University,Bhopal", // Replace with actual university
      type: "Post Graduate",
      duration: "2023 - 2025", // Replace with actual duration
      percentage: "62%", // Replace with your actual percentage
      description: "Advanced studies in English literature focusing on critical analysis and research",
      skills: ["Literary Analysis", "Research Skills", "Critical Thinking"],
      icon: "🎓",
      color: "from-purple-400 to-purple-600",
    },
    {
      id: 3,
      title: "Bachelor's Degree in Computer Applications",
      institution: "Barkatullah University, Bhopal", // Replace with actual college
      type: "Under Graduate",
      duration: "2020 - 2023", // Replace with actual duration
      percentage: "69%", // Replace with your actual percentage
      description: "Bachelor's degree focusing on computer applications, programming languages, and software development",
      skills: ['Java', 'C++', 'Python', 'Database Management', 'Web Development'],
      icon: "📚",
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 4,
      title: "Higher Secondary Education",
      institution: "M.P. Board", // Replace with actual school
      type: "12th Grade",
      duration: "2019-2020", // Replace with actual year
      percentage: "74%", // Replace with your actual percentage
      description:
        "Higher secondary education with focus on science stream",
      skills: ["Mathematics", "Science", "English", "Biology"],
      icon: "📖",
      color: "from-orange-400 to-orange-600",
    },
    {
      id: 5,
      title: "High School Education",
      institution: "M.P. Board", // Replace with actual school
      type: "10th Grade",
      duration: "2017-2018", // Replace with actual year
      percentage: "75%", // Replace with your actual percentage
      description: "Foundation education covering all basic subjects",
      skills: ["General Studies", "Basic Mathematics", "Languages"],
      icon: "🏫",
      color: "from-red-400 to-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via -[#2d1b4e] via-[#4d376d] to-[#7b5ba6] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-600/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-purple-300/10 rounded-full blur-lg animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-200 bg-clip-text text-transparent">
              Education
            </span>
          </h1>
          <p className="text-xl text-purple-200/80 max-w-3xl mx-auto leading-relaxed">
            My academic journey and professional development path that shaped me
            into a frontend developer
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {educationData.map((education, index) => (
            <div key={education.id} className="group">
              <div className="relative">
                {/* Timeline line */}
                {index !== educationData.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-purple-400 to-transparent hidden lg:block"></div>
                )}

                {/* Education Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-[1.02] hover:bg-white/15">
                  <div className="grid lg:grid-cols-4 gap-8 items-center">
                    {/* Left side - Icon and Type */}
                    <div className="lg:col-span-1 text-center lg:text-left">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {education.icon}
                      </div>
                      <div className="space-y-2">
                        <p className="text-purple-300 font-medium">
                          {education.type}
                        </p>
                        <p className="text-purple-200/70 text-sm">
                          {education.duration}
                        </p>
                      </div>
                    </div>

                    {/* Middle - Content */}
                    <div className="lg:col-span-2 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
                          {education.title}
                        </h3>
                        <p className="text-purple-300 font-semibold text-lg">
                          {education.institution}
                        </p>
                      </div>

                      <p className="text-purple-100/80 leading-relaxed">
                        {education.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {education.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-purple-200 text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right side - Percentage */}
                    <div className="lg:col-span-1 text-center">
                      <div className="relative inline-block">
                        {/* Circular Progress */}
                        <div className="relative w-24 h-24 mx-auto">
                          <svg
                            className="w-24 h-24 transform -rotate-90"
                            viewBox="0 0 100 100"
                          >
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              stroke="currentColor"
                              strokeWidth="8"
                              fill="none"
                              className="text-white/20"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              stroke="url(#gradient)"
                              strokeWidth="8"
                              fill="none"
                              strokeLinecap="round"
                              strokeDasharray={`${
                                parseFloat(education.percentage) * 2.51
                              } 251`}
                              className="transition-all duration-1000 ease-out"
                            />
                            <defs>
                              <linearGradient
                                id="gradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                              >
                                <stop
                                  offset="0%"
                                  className="text-purple-400"
                                  stopColor="currentColor"
                                />
                                <stop
                                  offset="100%"
                                  className="text-purple-600"
                                  stopColor="currentColor"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">
                              {education.percentage}
                            </span>
                          </div>
                        </div>
                        <p className="text-purple-300 text-sm mt-2 font-medium">
                          Achievement
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-purple-200/80 mb-6">
              Let's discuss how my educational background and skills can
              contribute to your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">View My Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                to="/contact"
                className="group px-8 py-4 border-2 border-purple-400 text-purple-300 font-semibold rounded-xl hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
