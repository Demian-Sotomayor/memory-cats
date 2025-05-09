import Link from 'next/link'
import React from 'react'

export const HomeContainer = () => {
  return (
    <div className="wrapper flex flex-col items-center space-y-2 mt-8">
      {/* Contenedor */}
      <Link href="/memory-cats/nivel-1" className="btn-primary">
        Nivel 1
      </Link>
      <Link href="/memory-cats/nivel-2" className="btn-primary">
        Nivel 2
      </Link>
      <Link href="/memory-cats/nivel-3" className="btn-primary">
        Nivel 3
      </Link>
      <Link href="/memory-cats/nivel-4" className="btn-primary">
        Nivel 4
      </Link>
    </div>
  )
}
