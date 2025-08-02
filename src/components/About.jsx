import React from 'react';

const About = () => {
    const highlights = [
        {
            icon: "🎯",
            title: "Problem Solver",
            description: "Solving complex problems with logical thinking and creativity"
        },
        {
            icon: "💡",
            title: "Innovation Driven",
            description: "Always seeking new and most efficient approaches"
        },
        {
            icon: "🚀",
            title: "Performance Focused",
            description: "Optimizing code and application performance in every project"
        },
        {
            icon: "🤝",
            title: "Team Player",
            description: "Working effectively in teams and sharing knowledge"
        }
    ];

    const experiences = [
        {
            title: "Backend Development",
            technologies: ["Java", "Node.js"],
            description: "Building powerful and scalable APIs"
        },
        {
            title: "Frontend Development",
            technologies: ["React", "JavaScript"],
            description: "Creating modern and responsive user interfaces"
        },
        {
            title: "System Programming",
            technologies: ["C", "Data Structures", "Algorithms"],
            description: "System programming and performance optimization"
        }
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full" />
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Passionate Developer with experience in multiple programming languages and technologies
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left Column - Text Content */}
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">
                            Software Developer with passion for{' '}
                            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">technology</span>
                        </h3>

                        <div className="space-y-6 text-gray-600 leading-relaxed">
                            <p>
                                I'm currently a student at <strong className="text-gray-800">FPT University Ho Chi Minh Campus</strong>
                                (September 2022 - now, GPA: 3.16) learning full-stack web development with React and Node.js.
                                I specialize in <strong className="text-gray-800">C, Java, JavaScript</strong> and modern frameworks.
                            </p>

                            <p>
                                Through university projects like Car Rental Management System and Drug Use Prevention System,
                                I've gained hands-on experience in MVC Design Pattern, database management, and team collaboration.
                                I'm passionate about applying theoretical knowledge to real-world applications.
                            </p>

                            <p>
                                I'm looking for an <strong className="text-gray-800">internship opportunity</strong> where I can
                                grow both technically and professionally in a collaborative environment. I believe in
                                <strong className="text-gray-800"> continuous learning</strong> and writing
                                <strong className="text-gray-800"> clean, maintainable code</strong>.
                            </p>
                        </div>

                        <div className="mt-8">
                            <button
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                Contact Me
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg group"
                            >
                                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Experience Section */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Areas of Expertise
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                            >
                                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                    {exp.title}
                                </h4>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {exp.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-600 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <div className="text-4xl font-bold">0</div>
                            <div className="text-lg opacity-90">Years Experience</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl font-bold">0</div>
                            <div className="text-lg opacity-90">Projects Completed</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl font-bold">3+</div>
                            <div className="text-lg opacity-90">Programming Languages</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl font-bold">100%</div>
                            <div className="text-lg opacity-90">Passion for Technology</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
