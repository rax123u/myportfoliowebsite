import React, { useState } from 'react'
import { motion } from 'framer-motion'
 
const FormField = ({ label, name, type = 'text', value, onChange, error, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false)
 
  return (
    <div>
      <motion.label
        className="block text-sm font-medium mb-2"
        animate={{ color: isFocused ? '#00d4ff' : '#d1d5db' }}
      >
        {label}
      </motion.label>
 
      <motion.div
        className="relative"
        animate={{
          boxShadow: isFocused
            ? '0 0 30px rgba(0, 212, 255, 0.2)'
            : '0 0 0 rgba(0, 212, 255, 0)',
        }}
      >
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-accent/20 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-all"
        />
      </motion.div>
 
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-sm mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}
 
export default FormField