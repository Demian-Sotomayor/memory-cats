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
      className="mx-auto min-w-[100px] w-full sm:w-[150px] aspect-square bg-gray-200 flex justify-center items-center border cursor-pointer"
      onClick={onClick}
    >
      {/* Tarjeta */}
      {/*  /\____/\
          (        )  
           |      |__/\
           (______)___/  */}

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
