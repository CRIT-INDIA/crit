import React from 'react';
import { Users, Trophy, Globe, Award } from 'lucide-react';

const AchievementsPage = () => {
  const achievements = [
    {
      number: "50K+",
      title: "Happy Clients",
      icon: <Users className="w-8 h-8 text-red-500" />,
      bgColor: "bg-red-50"
    },
    {
      number: "500+",
      title: "Successful Projects",
      icon: <Trophy className="w-8 h-8 text-red-500" />,
      bgColor: "bg-red-50"
    },
    {
      number: "30+",
      title: "Countries Served",
      icon: <Globe className="w-8 h-8 text-red-500" />,
      bgColor: "bg-red-50"
    },
    {
      number: "25+",
      title: "Industry Awards",
      icon: <Award className="w-8 h-8 text-red-500" />,
      bgColor: "bg-red-50"
    }
  ];

  return (
    <div className="min-h-*" style={{ backgroundColor: '#0C1C3C' }}>
      <div className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Achievements
          </h2>
          <p className="text-blue-200 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Celebrating excellence through continuous innovation and dedication to delivering outstanding results for our clients worldwide.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 border border-white/20"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 ${achievement.bgColor} rounded-full mb-6`}>
                {achievement.icon}
              </div>
              
              {/* Number */}
              <div className="text-3xl md:text-4xl font-bold text-white mb-3">
                {achievement.number}
              </div>
              
              {/* Title */}
              <div className="text-blue-200 font-medium text-lg">
                {achievement.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;