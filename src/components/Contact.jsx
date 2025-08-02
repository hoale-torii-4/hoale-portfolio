import React from 'react';

const Contact = () => {
    const contactInfo = [
        {
            icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
            title: 'Email',
            value: 'leanhhoa30012004@gmail.com',
            link: 'mailto:leanhhoa30012004@gmail.com',
            description: 'I will respond within 24 hours'
        },
        {
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png',
            title: 'Phone',
            value: '+84 384 311 751',
            link: 'tel:+84384311751',
            description: 'Available 9:00 AM - 6:00 PM'
        },
        {
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/512px-Google_Maps_icon_%282020%29.svg.png',
            title: 'Location',
            value: 'Tăng Nhơn Phú ward, Ho Chi Minh City',
            link: 'https://maps.google.com/?q=Tang+Nhon+Phu+Ward+Ho+Chi+Minh+City',
            description: 'Available for remote work'
        },
        {
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png',
            title: 'Facebook',
            value: 'facebook.com/hoale.monkeyhoale',
            link: 'https://www.facebook.com/hoale.monkeyhoale/',
            description: 'Social networking'
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
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png',
            name: 'Facebook',
            url: 'https://www.facebook.com/hoale.monkeyhoale/',
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
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Contact Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full" />
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Let's connect and discuss exciting opportunities together!
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Contact Information Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {contactInfo.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg group"
                                target={item.link.startsWith('http') ? '_blank' : '_self'}
                                rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                            >
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 p-3">
                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        className="w-full h-full object-contain filter brightness-0 invert"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentNode.innerHTML = `<span class="text-white font-bold text-lg">${item.title.charAt(0)}</span>`;
                                        }}
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-blue-600 font-medium mb-2 break-all">{item.value}</p>
                                <p className="text-sm text-gray-500">{item.description}</p>
                            </a>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-center text-white">
                        <h3 className="text-2xl font-bold mb-4">
                            Ready to Start a Project?
                        </h3>
                        <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                            I'm always excited to work on new projects and collaborate with amazing people.
                            Let's turn your ideas into reality!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="mailto:leanhhoa30012004@gmail.com"
                                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
                            >
                                Send Email
                            </a>
                            <a
                                href="tel:+84384311751"
                                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
                            >
                                Call Now
                            </a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="text-center mt-12">
                        <h4 className="text-lg font-semibold text-gray-900 mb-6">Follow Me</h4>
                        <div className="flex justify-center space-x-6">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 transform hover:scale-110 ${social.color} hover:text-white p-3`}
                                    title={social.name}
                                >
                                    <img
                                        src={social.icon}
                                        alt={social.name}
                                        className="w-full h-full object-contain filter opacity-70 hover:opacity-100 transition-opacity duration-300"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentNode.innerHTML = `<span class="text-lg font-bold">${social.name.charAt(0)}</span>`;
                                        }}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-12 text-center">
                        <div className="bg-gray-50 rounded-xl p-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Availability</h4>
                            <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-600">
                                <div>
                                    <span className="font-medium text-green-600">✅ Open to Internships</span>
                                </div>
                                <div>
                                    <span className="font-medium text-blue-600">💼 Freelance Projects</span>
                                </div>
                                <div>
                                    <span className="font-medium text-purple-600">🤝 Collaborations</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
