import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <div className="bg-gray-100 border-b py-6 sticky">
      <div className="wrapper">
        <Link href="/">Logo</Link>
      </div>
    </div>
  )
}
