import React from "react";
import {
  Instagram,
  MessageCircle,
  Facebook,
  Linkedin,
  Github,
  Download,
  User,
  Users,
  MessageSquare,
  Lightbulb,
  Share2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/https.rishit07",
      color: "hover:text-pink-400",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/7610675640",
      color: "hover:text-green-400",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/rishit.kabra.7",
      color: "hover:text-blue-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/rishit-kabra-144297328/",
      color: "hover:text-blue-300",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/git-rishit",
      color: "hover:text-purple-300",
    },
  ];

  const skills = [
    {
      icon: Users,
      title: "Leadership Experience",
      description:
        "Proven ability to lead teams and projects, inspiring others to achieve common goals while fostering a collaborative environment.",
    },
    {
      icon: MessageSquare,
      title: "Communication Skills",
      description:
        "Excellent verbal and written communication abilities, capable of presenting complex ideas clearly to diverse audiences.",
    },
    {
      icon: User,
      title: "Collaboration Talent",
      description:
        "Strong team player with experience working across different departments and with people from various backgrounds.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description:
        "Creative problem-solver with analytical thinking skills, able to identify issues and develop effective solutions.",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description:
        "Active in managing social media platforms with understanding of digital marketing strategies and content creation.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via -[#2d1b4e] via-[#4d376d] to-[#7b5ba6] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-600/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-purple-300/10 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-200 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-purple-100/80 max-w-2xl mx-auto leading-relaxed">
            I'd love to hear from you! Whether you have a project in mind or
            just want to connect, feel free to reach out through any of the
            channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Contact Information Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-300" />
                  </div>
                  <span className="text-purple-100">
                    kabrarishit07@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Phone className="w-6 h-6 text-purple-300" />
                  </div>
                  <span className="text-purple-100">+91 7610675640</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-300" />
                  </div>
                  <span className="text-purple-100">
                    Indore, Madhya Pradesh
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media Links Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">
                Connect With Me
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:bg-white/10 ${social.color}`}
                  >
                    <social.icon className="w-8 h-8 mb-2 text-purple-200 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium text-purple-200">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* CV Download Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">
                Download My CV
              </h2>
              <p className="text-purple-100/80 mb-6 leading-relaxed">
                Get a detailed overview of my experience, skills, and
                achievements in frontend development.
              </p>
              <a href="./CV.pdf" download= "Rishit_Kabra_CV.pdf"><button
                className="group relative w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download CV</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button></a>

              <p className="text-sm text-purple-200/60 mt-3 text-center">
                PDF format • Updated recently
              </p>
            </div>
          </div>

          {/* Right Column - Skills Section */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-8">
                Additional Skills & Expertise
              </h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-400/30 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30 transition-colors duration-300">
                        <skill.icon className="w-6 h-6 text-purple-300" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">
                          {skill.title}
                        </h3>
                        <p className="text-purple-100/80 text-sm leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action Card */}
            <div className="bg-gradient-to-r from-purple-600/80 to-purple-500/80 backdrop-blur-lg rounded-3xl p-8 border border-purple-400/30 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-purple-100 mb-6 leading-relaxed">
                I'm always open to discussing new opportunities, creative
                projects, or just having a friendly chat about technology and
                innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:kabrarishit07@gmail.com"
                  className="group flex-1 bg-white/20 backdrop-blur-sm text-white py-3 px-6 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 text-center hover:scale-105"
                >
                  Send Email
                </a>
                <a
                  href="https://www.linkedin.com/in/rishit-kabra-144297328/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 border-2 border-white/40 text-white py-3 px-6 rounded-xl font-semibold hover:bg-white/10 hover:border-white/60 transition-all duration-300 text-center hover:scale-105"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Available Status */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-2xl">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">
                  Available for opportunities
                </span>
              </div>
              <p className="text-purple-200/80 text-sm text-center mt-2">
                Open to freelance projects and full-time positions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
export default Contact;
