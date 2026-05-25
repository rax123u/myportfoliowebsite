import React from 'react'

const 
function CTASection() {
  return (
    <ScrollSection className="px-6 md:px-12">
      <motion.div {...fadeIn} className="text-center max-w-3xl z-20">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
          Let’s Create Something Amazing
        </h2>

        <p className="text-xl text-gray-400 mb-12">
          I’m always open to exciting projects and collaborations.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/contact">
            <Button>Get In Touch</Button>
          </Link>

          <Link to="/projects">
            <Button secondary>See My Work</Button>
          </Link>
        </div>
      </motion.div>
    </ScrollSection>
  )
}



export default CTASection
