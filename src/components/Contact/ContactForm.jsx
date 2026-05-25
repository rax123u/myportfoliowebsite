import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((p) => ({ ...p, [name]: value }))

    if (errors[name]) {
      setErrors((p) => ({ ...p, [name]: '' }))
    }
  }

  const validate = () => {
    const err = {}

    if (!formData.name.trim()) err.name = 'Required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      err.email = 'Invalid email'
    if (!formData.subject.trim()) err.subject = 'Required'
    if (!formData.message.trim()) err.message = 'Required'

    return err
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const err = validate()
    if (Object.keys(err).length) {
      setErrors(err)
      return
    }

    setIsSubmitting(true)

    try {
      await new Promise((r) => setTimeout(r, 1200))
      setSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSuccess(false), 4000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 text-white font-['Sora']"
    >

      {/* SUCCESS */}
      {success && (
        <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-sm text-cyan-300">
          ✓ Message sent successfully
        </div>
      )}

      {/* INPUT GRID */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          error={errors.name}
        />

        <Input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          error={errors.email}
        />
      </div>

      <Input
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subject"
        error={errors.subject}
      />

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Tell me about your project..."
        rows={6}
        className="w-full rounded-2xl border border-cyan-500/10 bg-black/40 px-5 py-4 text-white outline-none transition focus:border-cyan-400/40 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
      />

      {errors.message && (
        <p className="text-xs text-red-400">{errors.message}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="relative w-full overflow-hidden rounded-full border border-cyan-400/30 bg-cyan-400/10 py-4 font-['Space_Grotesk'] text-lg font-bold uppercase tracking-[2px] text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] disabled:opacity-50"
      >
        <span className="relative z-10">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </span>
      </button>

      <p className="text-center text-xs text-gray-500">
        I usually respond within 24 hours
      </p>
    </form>
  )
}

const Input = ({ name, value, onChange, placeholder, error }) => (
  <div>
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-2xl border border-cyan-500/10 bg-black/40 px-5 py-4 text-white outline-none transition focus:border-cyan-400/40 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
    />

    {error && (
      <p className="mt-1 text-xs text-red-400">{error}</p>
    )}
  </div>
)

export default ContactForm