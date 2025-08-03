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
                    level: 30,
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
                    description: "System Programming, Data Structures"
                },
                {
                    name: "Java",
                    level: 55,
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
                    description: "OOP, Web applications"
                },
                {
                    name: "JavaScript",
                    level: 65,
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
                    level: 65,
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                    description: "Hooks, Context, State Management"
                },
                {
                    name: "Node.js",
                    level: 65,
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                    description: "Express, Middlewares"
                }
            ]
        },
        {
            title: "Tools & Technologies",
            icon: "🛠️",
            skills: [
                {
                    name: "Git",
                    level: 70,
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                    description: "Version Control, Collaboration"
                },
                {
                    name: "Docker",
                    level: 30,
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
                    description: "Containerization, Deployment"
                },
                {
                    name: "MySQL",
                    level: 60,
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                    description: "Relational Database, SQL Queries"
                },
            ]
        }
    ];

    const SkillBar = ({ skill, index, isVisible }) => (
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'inline';
                        }}
                    />
                    <span
                        className="text-2xl hidden group-hover:scale-110 transition-transform duration-300"
                    >
                        ⚙️
                    </span>
                    <div>
                        <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                        <p className="text-sm text-gray-600">{skill.description}</p>
                    </div>
                </div>
                {/* <span className="text-lg font-bold text-blue-600">{skill.level}%</span> */}
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                    style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                    }}
                />
            </div>
        </div>
    );

    return (
        <section id="skills" ref={sectionRef} className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        My Skills
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full" />
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Technologies and programming languages I use to build high-quality applications
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-center mb-8">
                                <div className="text-4xl mb-4">{category.icon}</div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    {category.title}
                                </h3>
                                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                            </div>

                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <SkillBar
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

                {/* Stats Section */}
                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { number: "3.16", label: "Current GPA", icon: "🎯" },
                        { number: "2+", label: "Major Projects", icon: "🚀" },
                        { number: "2022", label: "Study Started", icon: "📅" },
                        { number: "24/7", label: "Always Learning", icon: "📚" }
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
                <div className="mt-16 text-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">
                        Ready to work with the latest technologies
                    </h3>
                    <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                        I'm always updating and learning new technologies to bring the best value to projects
                    </p>
                    <button
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                    >
                        Start Project
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Skills;
