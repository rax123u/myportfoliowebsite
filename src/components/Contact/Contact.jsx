import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from './ContactForm'

const Contact = () => {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'rayyanmuhammad224@gmail.com',
      link: 'mailto:rayyanmuhammad224@gmail.com',
    },
    {
      icon: '💬',
      title: 'Discord',
      value: 'rayan_61008',
      link: 'https://discord.com',
    },
    {
      icon: '🔗',
      title: 'LinkedIn',
      value: 'Muhammad Rayyan',
      link: 'https://www.linkedin.com/in/muhammad-rayyan-354aa42a1/',
    },
  ]

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/rax123u' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-rayyan-354aa42a1/' },
  ]

  return (
    <section className="relative w-full bg-[#02040a] text-white font-['Sora'] py-24 overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.05),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-6xl font-black uppercase tracking-tight">
            Let's Work <span className="text-cyan-400">Together</span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Have a project in mind? Let’s build something modern and fast.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT */}
          <div className="space-y-6">

            <h3 className="font-['Space_Grotesk'] text-2xl font-bold">
              Get In Touch
            </h3>

            {contactMethods.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-cyan-500/10 bg-black/30 p-5 transition-all duration-200 hover:border-cyan-400/30"
              >
                <span className="text-2xl">{item.icon}</span>

                <div>
                  <p className="text-xs text-gray-400">{item.title}</p>
                  <p className="text-white group-hover:text-cyan-400 transition-colors">
                    {item.value}
                  </p>
                </div>

                <span className="ml-auto text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </a>
            ))}

            {/* SOCIALS */}
            <div className="pt-6 border-t border-cyan-500/10">
              <h4 className="font-['Space_Grotesk'] text-lg mb-4 text-cyan-400">
                Socials
              </h4>

              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 flex items-center justify-center rounded-lg border border-cyan-500/20 text-sm transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    {social.name.charAt(0)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="border border-cyan-500/10 bg-black/30 rounded-2xl p-6">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact