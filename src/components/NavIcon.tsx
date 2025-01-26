'use client'

import React from 'react'

interface NavIconProps {
  src: string
  alt?: string
}

export default function NavIcon({ src, alt = '' }: NavIconProps) {
  return (
    <img 
      src={src}
      alt={alt}
      className="w-7 h-7 text-blue-600"
      loading="eager"
    />
  )
}
