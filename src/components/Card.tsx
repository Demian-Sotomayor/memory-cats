import Image from 'next/image'
import React from 'react'

interface CardProps {
  image: string
  isFlipped: boolean
  onClick: () => void
}

export const Card: React.FC<CardProps> = ({ image, isFlipped, onClick }) => {
  return (
    <div
      className="w-24 h-24 bg-gray-200 flex justify-center items-center border cursor-pointer"
      onClick={onClick}
    >
      {/* Tarjeta */}
      {isFlipped ? (
        <div>
          <Image
            src={image}
            alt="Gato"
            className="w-full h-full object-cover"
            width={200}
            height={200}
          />
        </div>
      ) : (
        '🐱'
      )}
    </div>
  )
}
