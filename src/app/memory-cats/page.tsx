import Link from 'next/link'

export default function MemoryCats() {
  return (
    <div className="wrapper">
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
