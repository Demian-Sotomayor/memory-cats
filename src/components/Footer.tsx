import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className="bg-gray-100 border-t py-6">
      <div className="wrapper">
        <Link href="/">Logo</Link>
      </div>
      <div className="text-center mt-3">
        <p>Copyright</p>
      </div>
    </div>
  )
}
