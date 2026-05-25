import React from 'react'
import { Link } from 'react-router-dom'
 
const Footer = () => {

  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const resourceLinks = [
    { name: 'Blog', path: '/blog' },
    { name: 'Tutorials', path: '/tutorials' },
    { name: 'Tools', path: '/tools' },
    { name: 'Inspiration', path: '/inspiration' },
  ]

  const connectLinks = [
    { name: 'Twitter', url: 'https://twitter.com/yourusername' },
    { name: 'GitHub', url: 'https://github.com/rax123u' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-rayyan-354aa42a1/' },
    { name: 'Email', url: 'mailto:rayyanmuhammad224@gmail.com' },
  ]

  return (
    <footer className="relative z-20 border-t border-accent/20 bg-secondary/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Muhammad Rayyan</h3>
            <p className="text-gray-400 text-sm">
              Creating immersive digital experiences with modern web technologies.
            </p>
          </div>
 
          {/* Column 1: Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navigationLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-400 hover:text-accent transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-400 hover:text-accent transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              {connectLinks.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-accent transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
 
       
        <div className="border-t border-accent/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Muhammad Rayyan. All rights reserved.
            </p>
            <div className="flex gap-6">
             
              {[
                { name: 'Privacy', path: '/privacy' },
                { name: 'Terms', path: '/terms' },
                { name: 'Sitemap', path: '/sitemap' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
 
export default Footer