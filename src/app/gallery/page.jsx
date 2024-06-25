import Image from 'next/image'
import React from 'react'

export default function galleryPage() {
  const images = [
    '1.png',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.png',
  ];

  return (
    <div className='p-12'>
      <h1 className="text-3xl font-semibold text-center">Gallery Page</h1>
      <div>
        {
          images.map((img, i) => (
            <Image key={i} src={`/images/${img}`} alt={`image ${i + 1}`} height={1080} width={1920} />
          ))
        }
      </div>
    </div>
  )
}
