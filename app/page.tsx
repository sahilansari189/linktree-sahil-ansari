'use client';

import { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Globe, 
  Mail, 
  FileText, 
  MessageCircle, 
  Youtube, 
  Code, 
  BookOpen,
  ExternalLink
} from 'lucide-react';
import Image from 'next/image';

interface LinkItem {
  title: string;
  url: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const links: LinkItem[] = [
  {
    title: 'GitHub',
    url: 'https://github.com/sahilansari189',
    icon: <Github size={24} />,
    description: 'Smart contracts & DApps',
    color: 'from-gray-700 to-gray-900'
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sahilansari189/',
    icon: <Linkedin size={24} />,
    description: 'Professional network',
    color: 'from-blue-600 to-blue-800'
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/sahilansari189',
    icon: <Twitter size={24} />,
    description: 'Web3 insights & updates',
    color: 'from-sky-400 to-sky-600'
  },
  {
    title: 'Portfolio',
    url: 'https://www.sahilansari.tech/',
    icon: <Globe size={24} />,
    description: 'Projects & case studies',
    color: 'from-purple-600 to-purple-800'
  },
  {
    title: 'YouTube',
    url: 'https://www.youtube.com/@techy_sahil',
    icon: <Youtube size={24} />,
    description: 'Blockchain tutorials',
    color: 'from-red-600 to-red-800'
  },
  {
    title: 'Discord',
    url: 'https://discord.gg/@sahilansari9468',
    icon: <MessageCircle size={24} />,
    description: 'Community discussions',
    color: 'from-indigo-600 to-indigo-800'
  },
  {
    title: 'Email',
    url: 'mailto:sa760887@gmail.com',
    icon: <Mail size={24} />,
    description: 'Get in touch',
    color: 'from-orange-600 to-orange-800'
  }
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-md">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                <Image
                  src="image.png"
                  alt="Sahil Ansari - Blockchain Developer"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-2">
            Sahil Ansari
          </h1>
          <p className="text-slate-300 text-lg mb-4">
            Full Stack Blockchain Developer
          </p>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
            Building the future of Web3 with smart contracts, DeFi protocols, and decentralized applications. 
            Passionate about blockchain innovation and education.
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`
                relative p-4 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 
                transition-all duration-300 hover:scale-[1.02] hover:bg-white/20
                hover:shadow-xl hover:shadow-purple-500/25
                ${hoveredIndex === index ? 'transform scale-[1.02]' : ''}
              `}>
                <div className="flex items-center space-x-4">
                  <div className={`
                    w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} 
                    flex items-center justify-center text-white shadow-lg
                    transition-transform duration-300 group-hover:scale-110
                  `}>
                    {link.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg group-hover:text-cyan-300 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                      {link.description}
                    </p>
                  </div>
                  
                  <ExternalLink 
                    size={20} 
                    className="text-slate-400 group-hover:text-cyan-400 transition-colors transform group-hover:translate-x-1 duration-300" 
                  />
                </div>
                
                {/* Animated border */}
                <div className={`
                  absolute inset-0 rounded-2xl bg-gradient-to-r ${link.color} opacity-0 
                  group-hover:opacity-20 transition-opacity duration-300 -z-10
                `}></div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p className="text-slate-400 text-sm">
            Built with Next.js & Tailwind CSS
          </p>
          <p className="text-slate-500 text-xs mt-2">
            © 2025 Sahil Ansari. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}