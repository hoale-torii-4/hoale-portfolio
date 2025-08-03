import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const skillCategories = [
        {
            title: "Programming Languages",
            icon: "💻",
            skills: [
                {
                    name: "C",
                    level: "Beginner",
                    stars: 2,
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
                    description: "System Programming, Data Structures"
                },
                {
                    name: "Java",
                    level: "Intermediate",
                    stars: 3,
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
                    description: "OOP, Web Applications, Spring Framework"
                },
                {
                    name: "JavaScript",
                    level: "Intermediate",
                    stars: 3,
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                    description: "ES6+, Async/Await, DOM Manipulation"
                }
            ]
        },
        {
            title: "Frameworks & Libraries",
            icon: "🚀",
            skills: [
                {
                    name: "React.js",
                    level: "Intermediate",
                    stars: 3,
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                    description: "Hooks, Context, State Management"
                },
                {
                    name: "Node.js",
                    level: "Intermediate",
                    stars: 3,
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                    description: "Express.js, REST APIs, Middlewares"
                },
                {
                    name: "TailwindCSS",
                    level: "Beginner",
                    stars: 2,
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
                    description: "Responsive Design, Utility Classes"
                }
            ]
        },
        {
            title: "Tools & Technologies",
            icon: "🛠️",
            skills: [
                {
                    name: "Git",
                    level: "Intermediate",
                    stars: 3,
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                    description: "Version Control, Collaboration, GitHub"
                },
                {
                    name: "Docker",
                    level: "Beginner",
                    stars: 2,
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
                    description: "Containerization, Basic Deployment"
                },
                {
                    name: "MySQL",
                    level: "Intermediate",
                    stars: 3,
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                    description: "Database Design, SQL Queries"
                },
                {
                    name: "TestNG",
                    level: "beginner",
                    stars: 2,
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
                    description: "Unit Testing, Test Automation"
                }
            ]
        }
    ];

    const getLevelColor = (level) => {
        switch (level) {
            case 'Expert': return 'text-green-600 bg-green-100';
            case 'Advanced': return 'text-blue-600 bg-blue-100';
            case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
            case 'Beginner': return 'text-gray-600 bg-gray-100';
            default: return 'text-gray-600 bg-gray-100';
        }
    };

    const StarRating = ({ stars, isVisible, delay }) => (
        <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
                <div
                    key={index}
                    className={`w-3 h-3 sm:w-4 sm:h-4 transition-all duration-500 ${index < stars ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                    style={{
                        transitionDelay: isVisible ? `${delay + index * 100}ms` : '0ms',
                        transform: isVisible && index < stars ? 'scale(1)' : 'scale(0)'
                    }}
                >
                    ⭐
                </div>
            ))}
        </div>
    );

    const SkillCard = ({ skill, index, isVisible }) => (
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100">
            <div className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300 flex-shrink-0">
                    <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML = `<span class="text-xl sm:text-2xl">⚙️</span>`;
                        }}
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 text-base sm:text-lg mb-1">{skill.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{skill.description}</p>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <span className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${getLevelColor(skill.level)}`}>
                    {skill.level}
                </span>
                <StarRating
                    stars={skill.stars}
                    isVisible={isVisible}
                    delay={index * 200}
                />
            </div>
        </div>
    );

    return (
        <section id="skills" ref={sectionRef} className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        My Skills
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full" />
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Technologies and programming languages I use to build high-quality applications
                    </p>
                </div>

                {/* Skills Grid - Mobile optimized */}
                <div className="grid gap-6 sm:gap-8 mb-16 md:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-center mb-6 sm:mb-8">
                                <div className="text-3xl sm:text-4xl mb-4">{category.icon}</div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                                    {category.title}
                                </h3>
                                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                            </div>

                            <div className="space-y-4 sm:space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <SkillCard
                                        key={skillIndex}
                                        skill={skill}
                                        index={categoryIndex * 4 + skillIndex}
                                        isVisible={isVisible}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Skill Level Legend */}
                <div className="mb-16 text-center">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6">Skill Levels</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { level: 'Expert', description: '5+ years', color: 'text-green-600 bg-green-100' },
                            { level: 'Advanced', description: '2-5 years', color: 'text-blue-600 bg-blue-100' },
                            { level: 'Intermediate', description: '1-2 years', color: 'text-yellow-600 bg-yellow-100' },
                            { level: 'Beginner', description: 'Learning', color: 'text-gray-600 bg-gray-100' }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 bg-white px-4 py-3 rounded-full shadow-sm">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${item.color}`}>
                                    {item.level}
                                </span>
                                <span className="text-xs sm:text-sm text-gray-600">{item.description}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-16">
                    {[
                        { number: "3.16", label: "Current GPA", icon: "🎯" },
                        { number: "5+", label: "Major Projects", icon: "🚀" },
                        { number: "2022", label: "Study Started", icon: "📅" },
                        { number: "24/7", label: "Always Learning", icon: "📚" }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="text-2xl sm:text-3xl mb-2">{stat.icon}</div>
                            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                                {stat.number}
                            </div>
                            <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 sm:p-8 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4">
                        Ready to work with the latest technologies
                    </h3>
                    <p className="text-base sm:text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                        I'm always updating and learning new technologies to bring the best value to projects
                    </p>
                    <button
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        className="px-6 sm:px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                    >
                        Start Project
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Skills;