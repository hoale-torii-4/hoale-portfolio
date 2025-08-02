import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => {
                setSubmitStatus('');
            }, 3000);
        }, 1000);
    };

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
            icon: 'https://tse1.mm.bing.net/th/id/OIP.nvBTi8xiSIzEQO9ZBJbMNgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
            title: 'Location',
            value: 'Tăng Nhơn Phú ward, Ho Chi Minh City',
            link: '#',
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
                        Let's get in touch to discuss your project or exciting collaboration opportunities!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Contact Information
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                I'm always ready to listen to new ideas and exciting collaboration opportunities.
                                Don't hesitate to contact me to discuss projects or just to say hello!
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 group"
                                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300 p-2">
                                        <img
                                            src={item.icon}
                                            alt={item.title}
                                            className="w-full h-full object-contain"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentNode.innerHTML = `<span class="text-sm text-white">${item.title.charAt(0)}</span>`;
                                            }}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                                        <p className="text-primary-600 font-medium mb-1">{item.value}</p>
                                        <p className="text-sm text-gray-500">{item.description}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="pt-8">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 transition-all duration-300 transform hover:scale-110 ${social.color} hover:text-white p-2`}
                                        title={social.name}
                                    >
                                        <img
                                            src={social.icon}
                                            alt={social.name}
                                            className="w-full h-full object-contain filter opacity-70 hover:opacity-100 transition-opacity duration-300"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentNode.innerHTML = `<span class="text-sm">${social.name.charAt(0)}</span>`;
                                            }}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Send Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Message subject"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                                    placeholder="Your message content..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-blue-600 hover:to-purple-600'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center space-x-2">
                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        <span>Sending...</span>
                                    </span>
                                ) : (
                                    'Send Message'
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                                    ✅ Message sent successfully! I will respond as soon as possible.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
