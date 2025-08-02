import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const footerSections = [
        {
            title: "Quick Links",
            links: [
                { label: "Home", action: () => scrollToSection('home') },
                { label: "About", action: () => scrollToSection('about') },
                { label: "Skills", action: () => scrollToSection('skills') },
                { label: "Projects", action: () => scrollToSection('projects') },
                { label: "Activities", action: () => scrollToSection('activities') },
                { label: "Contact", action: () => scrollToSection('contact') }
            ]
        },
        {
            title: "Core Skills",
            links: [
                { label: "Java ", external: false },
                { label: "JavaScript & React", external: false },
                { label: "Node.js Development", external: false },
                { label: "System Programming (C)", external: false },
                { label: "Database Management", external: false }
            ]
        },
        {
            title: "Featured Projects",
            links: [
                { label: "Car Rental Management", external: false },
                { label: "Drug Prevention System", external: false },
                { label: "Portfolio Website", external: false },
                { label: "University Projects", external: false }
            ]
        }
    ];

    const socialLinks = [
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            name: 'GitHub',
            url: 'https://github.com/hoale-torii-4',
            color: 'hover:bg-gray-800'
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
            name: 'LinkedIn',
            url: 'https://linkedin.com',
            color: 'hover:bg-blue-600'
        },
        {
            icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
            name: 'Email',
            url: 'mailto:leanhhoa30012004@gmail.com',
            color: 'hover:bg-red-500'
        }
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-16">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                        {/* Brand Section */}
                        <div className="lg:col-span-1">
                            <h3 className="text-2xl font-bold mb-4">
                                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                                    Lê Anh Hòa
                                </span>
                            </h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Software Engineer Intern passionate about creating high-quality applications with
                                modern programming languages. Currently studying at FPT University.
                            </p>

                            {/* Social Links */}
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 transform hover:scale-110 ${social.color} hover:text-white p-2`}
                                        title={social.name}
                                    >
                                        <img
                                            src={social.icon}
                                            alt={social.name}
                                            className="w-full h-full object-contain filter invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentNode.innerHTML = `<span class="text-sm">${social.name.charAt(0)}</span>`;
                                            }}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Footer Sections */}
                        {footerSections.map((section, index) => (
                            <div key={index}>
                                <h4 className="text-lg font-semibold mb-6 text-white">
                                    {section.title}
                                </h4>
                                <ul className="space-y-3">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            {link.action ? (
                                                <button
                                                    onClick={link.action}
                                                    className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                                                >
                                                    {link.label}
                                                </button>
                                            ) : (
                                                <span className="text-gray-300 cursor-default">
                                                    {link.label}
                                                </span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <div className="text-gray-400 text-center md:text-left">
                            <p>&copy; {currentYear} Lê Anh Hòa. All rights reserved.</p>
                            <p className="text-sm mt-1">
                                Built with ❤️ using React & TailwindCSS
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="text-gray-400 text-center md:text-right text-sm">
                            <p>📧 leanhhoa30012004@gmail.com</p>
                            <p>📱 +84 384 311 751</p>
                        </div>

                        {/* Scroll to Top Button */}
                        <button
                            onClick={scrollToTop}
                            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center z-50"
                            title="Back to top"
                        >
                            <span className="text-lg">↑</span>
                        </button>
                    </div>
                </div>

                {/* Tech Stack Attribution */}
                <div className="border-t border-gray-800 py-4">
                    <div className="text-center text-gray-500 text-sm">
                        <p>
                            Powered by{' '}
                            <span className="text-blue-400 font-medium">React</span>,{' '}
                            <span className="text-blue-400 font-medium">TailwindCSS</span>,{' '}
                            <span className="text-blue-400 font-medium">Vite</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
