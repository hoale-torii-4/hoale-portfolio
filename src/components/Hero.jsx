import React from 'react';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const programmingLanguages = ['C', 'Java', 'JavaScript', 'Node.js', 'React'];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Hello, I'm{' '}
                            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                                Lê Anh Hòa
                            </span>
                        </h1>

                        <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-200 mb-6 font-light">
                            Software Engineer Intern
                        </h2>

                        <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
                            I am currently learning full-stack web development with React and Node.js, and I am looking for an internship where I can apply my knowledge to real-world projects. My goal is to gain hands-on experience, understand how software teams operate in a professional environment, and grow both technically and professionally.
                        </p>

                        {/* Programming Languages */}
                        <div className="mb-8">
                            <p className="text-gray-400 mb-4">Specialized in:</p>
                            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                {programmingLanguages.map((lang, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                                    >
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                View Projects
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
                            >
                                Contact Me
                            </button>
                        </div>
                    </div>

                    {/* Image/Avatar Section */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 animate-pulse">
                                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                                    <img
                                        src="/hoale-portfolio/images/avatar.jpg"
                                        alt="Lê Anh Hòa - Software Engineer Intern"
                                        className="w-full h-full object-cover rounded-full"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentNode.innerHTML = `
                                                <div class="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center rounded-full">
                                                    <div class="text-6xl sm:text-7xl lg:text-8xl text-gray-400 font-bold">
                                                        LAH
                                                    </div>
                                                </div>
                                            `;
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce">
                                {'{ }'}
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold animate-pulse">
                                &lt;/&gt;
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center animate-bounce">
                <div className="flex flex-col items-center">
                    <span className="text-sm mb-2">Scroll down</span>
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
