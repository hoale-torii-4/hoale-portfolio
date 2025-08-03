import React, { useState } from 'react';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "Car Rental Management System",
            description: "Web application implementing MVC Design Pattern using Java, SQL Server, JSP, Java Servlets, and JavaScript for car rental management",
            image: "🚗",
            technologies: ["Java", "JSP", "SQL Server", "JavaScript", "MVC Pattern"],
            category: "fullstack",
            liveUrl: "#",
            githubUrl: "https://github.com/hoale-torii-4/PRJ301_CarRentalManagementSystem",
            featured: true,
            highlights: ["MVC Architecture", "Database Design", "User Interface", "Team Leadership"],
            period: "January 2025 - April 2025",
            university: "FPT University"
        },
        {
            id: 2,
            title: "Drug Use Prevention Support System",
            description: "React JS, Node JS, MySQL, and Google Auth based system with three roles: Member, Consultant, and Manager for drug prevention support",
            image: "🏥",
            technologies: ["React", "Node.js", "MySQL", "Google Auth", "Docker"],
            category: "fullstack",
            liveUrl: "#",
            githubUrl: "https://github.com/hoale-torii-4/SWP391_DrugUsePreventionSupportSystem",
            featured: true,
            highlights: ["Role-based Access", "Risk Assessment", "Consultation System", "Community Features"],
            period: "May 2025 - July 2025",
            university: "FPT University"
        },
        {
            id: 3,
            title: "Unit Testing with TestNG",
            description: "Comprehensive unit testing framework implementation using TestNG for Java applications with test automation and reporting",
            image: "🧪",
            technologies: ["Java", "TestNG", "JUnit", "Maven", "Test Automation"],
            category: "testing",
            liveUrl: "#",
            githubUrl: "https://github.com/hoale-torii-4/UnitTestingWithTestNG",
            featured: false,
            highlights: ["Unit Testing", "Test Automation", "TestNG Framework", "Code Coverage"],
            period: "Testing Project",
            university: "FPT University"
        },
        {
            id: 4,
            title: "Automation Performance Testing",
            description: "Automated performance testing framework with GitHub Actions integration for continuous testing and monitoring",
            image: "⚡",
            technologies: ["GitHub Actions", "Performance Testing", "CI/CD", "Automation", "Monitoring"],
            category: "testing",
            liveUrl: "#",
            githubUrl: "https://github.com/hoale-torii-4/automation-performance-testing-with-github-action",
            featured: false,
            highlights: ["Performance Testing", "GitHub Actions", "CI/CD Pipeline", "Load Testing"],
            period: "Testing Project",
            university: "FPT University"
        },
        {
            id: 5,
            title: "Portfolio Website",
            description: "Personal portfolio website showcasing projects and skills using modern web technologies",
            image: "💼",
            technologies: ["React", "TailwindCSS", "Vite", "JavaScript"],
            category: "frontend",
            liveUrl: "#",
            githubUrl: "https://github.com/hoale-torii-4/hoale-portfolio",
            featured: true,
            highlights: ["Responsive Design", "Modern UI/UX", "Performance Optimized", "TailwindCSS"],
            period: "Personal Project",
            university: "Personal"
        }
    ];

    const categories = [
        { key: 'all', label: 'All Projects', icon: '🚀' },
        { key: 'fullstack', label: 'Full Stack', icon: '🌐' },
        { key: 'testing', label: 'Testing', icon: '🧪' },
        { key: 'frontend', label: 'Frontend', icon: '🎨' },
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        My Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full" />
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Projects showcasing programming skills, testing expertise, and real-world problem-solving capabilities
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map(category => (
                        <button
                            key={category.key}
                            onClick={() => setFilter(category.key)}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${filter === category.key
                                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                                : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md hover:shadow-lg'
                                }`}
                        >
                            <span>{category.icon}</span>
                            <span>{category.label}</span>
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
                    {filteredProjects.map(project => (
                        <div
                            key={project.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                        >
                            {project.featured && (
                                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-sm font-semibold px-4 py-2 text-center">
                                    ⭐ Featured Project
                                </div>
                            )}

                            {/* Project Image/Icon */}
                            <div className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center overflow-hidden">
                                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                                    {project.image}
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                                        {project.liveUrl !== "#" && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300"
                                                title="View demo"
                                            >
                                                🔗
                                            </a>
                                        )}
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 bg-white text-gray-800 rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors duration-300"
                                            title="Source code"
                                        >
                                            📁
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    {project.category === 'testing' && (
                                        <span className="text-green-600 text-sm font-semibold">🧪 Testing</span>
                                    )}
                                </div>

                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Project Info */}
                                <div className="mb-4 text-sm text-gray-500">
                                    <p><strong>Period:</strong> {project.period}</p>
                                    <p><strong>Organization:</strong> {project.university}</p>
                                </div>

                                {/* Highlights */}
                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.highlights.map((highlight, index) => (
                                            <span
                                                key={index}
                                                className={`text-xs px-2 py-1 rounded-full ${project.category === 'testing'
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-gray-100 text-gray-700'
                                                    }`}
                                            >
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className={`px-3 py-1 text-sm font-medium rounded-full ${project.category === 'testing'
                                                    ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700'
                                                    : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700'
                                                }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="grid md:grid-cols-4 gap-6 mb-16">
                    {[
                        { number: "5+", label: "Projects Completed", icon: "🚀" },
                        { number: "4", label: "Technologies Mastered", icon: "💻" },
                        { number: "2", label: "Testing Frameworks", icon: "🧪" },
                        { number: "100%", label: "Code Quality", icon: "✨" }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-600 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Want to see more projects?
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        I'm always working on new and exciting projects including testing automation,
                        full-stack development, and performance optimization. Follow my GitHub to stay updated.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://github.com/hoale-torii-4/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center justify-center space-x-2"
                        >
                            <span>📁</span>
                            <span>View GitHub</span>
                        </a>
                        <button
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3 border-2 border-blue-500 text-blue-600 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                        >
                            Discuss new projects
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
