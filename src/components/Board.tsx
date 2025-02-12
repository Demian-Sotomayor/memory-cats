'use client'
import React, { useEffect, useState } from 'react'
import { catImages } from '@/utils'
import { Card } from './Card'

interface CardItem {
  id: number
  img: string
  flipped: boolean
}

export const Board: React.FC = () => {
  const [cards, setCards] = useState<CardItem[]>([])
  const [flipped, setFlipped] = useState<number[]>([])
  const [matched, setMatched] = useState<number[]>([])
  const [moves, setMoves] = useState(0)

  useEffect(() => {
    const shuffledCats = [...catImages, ...catImages]
      .sort(() => Math.random() - 0.5)
      .map((img, i) => ({ id: i, img, flipped: false }))

    setCards(shuffledCats)
  }, [])

  const handleClick = (index: number) => {
    if (flipped.length === 2 || flipped.includes(index)) return

    const newFlipped = [...flipped, index]
    setFlipped(newFlipped)

    if (newFlipped.length === 2) {
      setMoves(moves + 1)
      const [first, second] = newFlipped
      if (cards[first].img === cards[second].img) {
        setMatched([...matched, first, second])
      }
      setTimeout(() => setFlipped([]), 1000)
    }
  }

  return (
    <div>
      {/* Tablero */}
      <h2 className="text-center text-xl mt-4">Intentos: {moves}</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 sm:gap-8 mt-8">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            image={card.img}
            isFlipped={flipped.includes(index) || matched.includes(index)}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  )
}
