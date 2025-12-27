import React from 'react'

export default function Skeleton({ className = 'h-6 w-full rounded' }: { className?: string }) {
  return <div className={`skeleton ${className}`} />
}
