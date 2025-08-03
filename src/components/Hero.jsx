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
                {/* Mobile-first layout: text first, then image */}
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Text Content - Always first on mobile */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                            Hello, I'm{' '}
                            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                                Lê Anh Hòa
                            </span>
                        </h1>

                        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-blue-200 mb-4 lg:mb-6 font-light">
                            Software Engineer Intern
                        </h2>

                        <p className="text-base lg:text-lg text-gray-300 mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            I am currently learning full-stack web development with React and Node.js, and I am looking for an internship where I can apply my knowledge to real-world projects.
                        </p>

                        {/* Programming Languages */}
                        <div className="mb-6 lg:mb-8">
                            <p className="text-gray-400 mb-3 lg:mb-4 text-sm lg:text-base">Specialized in:</p>
                            <div className="flex flex-wrap gap-2 lg:gap-3 justify-center lg:justify-start">
                                {programmingLanguages.map((lang, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 lg:px-4 lg:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-sm lg:text-base"
                                    >
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm lg:text-base"
                            >
                                View Projects
                            </button>

                            <a
                                href="https://www.canva.com/design/DAGuzqUCnfQ/9ga4Are5YUhNM6vkNI0kLw/view?utm_content=DAGuzqUCnfQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2b2506a2ed"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-full hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm lg:text-base inline-flex items-center justify-center space-x-2"
                            >

                                <span>View Resume</span>
                            </a>

                            <button
                                onClick={() => scrollToSection('contact')}
                                className="px-6 py-3 lg:px-8 lg:py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm lg:text-base"
                            >
                                Contact Me
                            </button>
                        </div>
                    </div>

                    {/* Image/Avatar Section - Second on mobile, smaller size */}
                    <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                        <div className="relative">
                            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 animate-pulse">
                                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                                    <img
                                        src="/hoale-portfolio/images/avatar.jpg"
                                        alt="Lê Anh Hòa - Software Engineer Intern"
                                        className="w-full h-full object-cover rounded-full"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentNode.innerHTML = `
                                                <div class="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center rounded-full">
                                                    <div class="text-3xl sm:text-4xl lg:text-6xl xl:text-8xl text-gray-400 font-bold">
                                                        LAH
                                                    </div>
                                                </div>
                                            `;
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Floating elements - smaller on mobile */}
                            <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-12 h-12 lg:w-20 lg:h-20 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce">
                                <span className="text-xs lg:text-base">{'{ }'}</span>
                            </div>
                            <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 w-10 h-10 lg:w-16 lg:h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold animate-pulse">
                                <span className="text-xs lg:text-sm">&lt;/&gt;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center animate-bounce z-20">
                <div className="flex flex-col items-center cursor-pointer" onClick={() => scrollToSection('about')}>
                    <span className="text-xs lg:text-sm mb-2">Scroll down</span>
                    <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-white rounded-full flex justify-center hover:border-yellow-400 transition-colors duration-300">
                        <div className="w-1 h-2 lg:h-3 bg-white rounded-full mt-1 lg:mt-2 animate-bounce hover:bg-yellow-400 transition-colors duration-300"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
