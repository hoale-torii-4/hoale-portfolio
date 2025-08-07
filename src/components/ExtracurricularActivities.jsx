import React from 'react';

const ExtracurricularActivities = () => {
    const activities = [
        {
            id: 1,
            title: 'Project "EM" Leader',
            organization: 'Charity Project',
            period: 'May 2024 - Present',
            role: 'Project Leader & Martial Arts Instructor',
            description: 'Leading a charitable community project focused on teaching martial arts and talent development programs for underprivileged children, providing them with valuable life skills and opportunities for personal growth.',
            image: 'public/images/duAnEm.jpg',
            fbLink: 'https://www.facebook.com/duanemssg104',
            highlights: [
                'Free Martial Arts Classes for 30+ Children',
                'Talent Development Programs (Arts, Dance & Sports)',
                'Community Volunteer Coordination',
                'Charity Fundraising Events'
            ],
            skills: ['Leadership', 'Martial Arts Instruction', 'Youth Development', 'Community Service']
        },
        {
            id: 2,
            title: 'Liên Quân Man Thiện Community Leader',
            organization: 'Gaming Community - Ho Chi Minh',
            period: 'May 2025 - Present',
            role: 'Community Leader',
            description: 'Managing and leading a gaming community focused on Arena of Valor (Liên Quân Mobile) in Ho Chi Minh City. Organizing tournaments, events, and fostering community growth.',
            image: 'public/images/lq.jpg',
            fbLink: 'https://www.facebook.com/profile.php?id=61578691989871',
            highlights: [
                'Community Building & Growth',
                'Event Organization',
                'Tournament Management',
                'Team Coordination'
            ],
            skills: ['Community Management', 'Event Planning', 'Team Building', 'Digital Marketing']
        }
    ];

    return (
        <section id="activities" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Extracurricular Activities
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full" />
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Leadership roles and community involvement outside of academic studies
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {activities.map((activity) => (
                        <div
                            key={activity.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Header with Image */}
                            <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                <div className="text-6xl mb-4"><img src={activity.image} alt="" className="w-full h-full object-cover" /></div>
                                <div className="absolute top-4 right-4">
                                    <span className="bg-white/70 backdrop-blur-sm text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                        {activity.role}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            {activity.title}
                                        </h3>
                                        <p className="text-lg text-gray-600 font-medium">
                                            {activity.organization}
                                        </p>
                                        <p className="text-blue-600 font-medium">
                                            {activity.period}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {activity.description}
                                </p>

                                {/* Highlights */}
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                                    <ul className="space-y-2">
                                        {activity.highlights.map((highlight, index) => (
                                            <li key={index} className="flex items-center text-gray-600">
                                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Skills */}
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills Developed:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {activity.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Facebook Link */}
                                <div className="flex items-center justify-between">
                                    <a
                                        href={activity.fbLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                    >
                                        <span className="mr-2">📘</span>
                                        View Facebook Page
                                    </a>

                                    <div className="text-sm text-gray-500">
                                        Leadership Role
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                        <div className="text-3xl mb-2">👥</div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                            2+
                        </div>
                        <div className="text-gray-600 font-medium">Leadership Roles</div>
                    </div>

                    <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                        <div className="text-3xl mb-2">📅</div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                            1.5+
                        </div>
                        <div className="text-gray-600 font-medium">Years Experience</div>
                    </div>

                    <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                        <div className="text-3xl mb-2">🎯</div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                            100%
                        </div>
                        <div className="text-gray-600 font-medium">Commitment</div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">
                        Passionate About Leadership & Community Building
                    </h3>
                    <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                        Through these leadership roles, I've developed strong teamwork, communication, and project management skills
                        that complement my technical abilities in software development.
                    </p>
                    <button
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                    >
                        Let's Connect
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ExtracurricularActivities;
